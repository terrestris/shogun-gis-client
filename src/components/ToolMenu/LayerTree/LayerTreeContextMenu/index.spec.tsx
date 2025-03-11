import React from 'react';

import {
  fireEvent,
  render,
  waitFor,
  screen
} from '@testing-library/react';

import { Extent } from 'ol/extent';
import OlTileLayer from 'ol/layer/Tile';
import OlTileWMS from 'ol/source/TileWMS';

import { Provider } from 'react-redux';

import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import {
  EditLevel,
  setFeature
} from '../../../../store/editFeature';
import { show } from '../../../../store/layerDetailsModal';
import { store } from '../../../../store/store';

import {
  LayerTreeContextMenu,
  LayerTreeContextMenuProps
} from './index';

let mockAllowedEditMode: EditLevel[];
let mockLayer: OlTileLayer<OlTileWMS>;
let defaultProps: LayerTreeContextMenuProps;

jest.mock('../../../../hooks/useAppSelector', () => ({
  __esModule: true,
  default: jest.fn()
}));

jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: jest.fn()
}));

jest.mock('@terrestris/ol-util/dist/LayerUtil/LayerUtil', () => ({
  getExtentForLayer: jest.fn()
}));

jest.spyOn(store, 'dispatch');

describe('<LayerTreeContextMenu />', () => {
  beforeEach(() => {
    mockLayer = new OlTileLayer({
      source: new OlTileWMS({
        url: 'https://shogun2022.intranet.terrestris.de/geoserver/ows?',
        params: {
          LAYERS: ['some_layer'],
          useBearerToken: true
        }
      })
    });

    defaultProps = {
      layer: mockLayer,
      visibleLegendsIds: [],
      setVisibleLegendsIds: jest.fn()
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders the context menu button', () => {
    const { container } = render(
      <Provider store={store}>
        <LayerTreeContextMenu {...defaultProps} />
      </Provider>
    );

    expect(container.querySelector('.ant-dropdown-trigger')).toBeInTheDocument();
  });

  it('opens the dropdown menu when clicked', async () => {
    render(
      <Provider store={store}>
        <LayerTreeContextMenu {...defaultProps} />
      </Provider>
    );
    const triggerElem = document.querySelector('.ant-dropdown-trigger');
    await fireEvent.click(triggerElem as Element);

    await waitFor(() => {
      expect(document.querySelector('.ant-dropdown')).not.toBeNull();
    });
  });

  it('dispatches correct action when clicking "Edit Layer"', async () => {
    mockAllowedEditMode = ['CREATE'];
    jest.requireMock('../../../../hooks/useAppSelector').default.mockImplementation((callback: any) => callback({
      editFeature: {
        userEditMode: mockAllowedEditMode
      },
      layerTree: { metadataVisible: true }
    }));
    jest.spyOn(mockLayer, 'get').mockImplementation((key) => {
      if (key === 'editable') {
        return true;
      }
      return undefined;
    });

    render(
      <Provider store={store}>
        <LayerTreeContextMenu {...defaultProps} />
      </Provider>
    );

    const triggerElem = document.querySelector('.ant-dropdown-trigger');
    await fireEvent.click(triggerElem as Element);

    await expect(mockLayer.get('editable')).toBe(true);

    await waitFor(() => {
      expect(screen.getByText('LayerTreeContextMenu.editLayer')).toBeVisible();
    });

    await fireEvent.click(screen.getByText('LayerTreeContextMenu.editLayer'));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(setFeature(null));
    });
  });

  it('dispatches correct action when clicking "Layer Details"', async () => {
    jest.requireMock('../../../../hooks/useAppSelector').default.mockImplementation((callback: any) => callback({
      editFeature: {
        userEditMode: mockAllowedEditMode
      },
      layerTree: { metadataVisible: true }
    }));
    render(
      <Provider store={store}>
        <LayerTreeContextMenu {...defaultProps} />
      </Provider>
    );

    const triggerElem = document.querySelector('.ant-dropdown-trigger');
    await fireEvent.click(triggerElem as Element);

    await fireEvent.click(screen.getByText('LayerTreeContextMenu.layerDetails'));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(show());
    });
  });

  it('handles zoomToLayerExtent correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    jest.spyOn(require('@terrestris/ol-util/dist/LayerUtil/LayerUtil'), 'getExtentForLayer').mockResolvedValue([0, 0, 10, 10] as Extent);
    (useMap as jest.Mock).mockReturnValue({
      getView: jest.fn().mockReturnValue({
        getProjection: jest.fn().mockReturnValue('EPSG:3857'),
        fit: jest.fn()
      })
    });
    render(
      <Provider store={store}>
        <LayerTreeContextMenu {...defaultProps} />
      </Provider>
    );

    const triggerElem = document.querySelector('.ant-dropdown-trigger');
    await fireEvent.click(triggerElem as Element);

    await waitFor(() => {
      expect(screen.getByText('LayerTreeContextMenu.layerZoomToExtent')).toBeVisible();
    });
    await fireEvent.click(screen.getByText('LayerTreeContextMenu.layerZoomToExtent'));

    await waitFor(() => {
      expect(useMap()?.getView().fit).toHaveBeenCalled();
    });
  });

  it('displays error notification if zoomToLayerExtent fails', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    jest.spyOn(require('@terrestris/ol-util/dist/LayerUtil/LayerUtil'), 'getExtentForLayer').mockRejectedValue(new Error('Zoom failed'));
    (useMap as jest.Mock).mockReturnValue({ getView: jest.fn(() => ({ fit: jest.fn() })) });

    render(
      <Provider store={store}>
        <LayerTreeContextMenu {...defaultProps} />
      </Provider>
    );

    const triggerElem = document.querySelector('.ant-dropdown-trigger');
    await fireEvent.click(triggerElem as Element);

    await waitFor(() => {
      expect(screen.getByText('LayerTreeContextMenu.layerZoomToExtent')).toBeVisible();
    });

    await fireEvent.click(screen.getByText('LayerTreeContextMenu.layerZoomToExtent'));
    await waitFor(() => {
      expect(screen.getByText('LayerTreeContextMenu.extentError')).toBeInTheDocument();
    });
  });

  it('handles showLegend correctly', async () => {
    const mockSetVisibleLegendsIds = jest.fn();

    render(
      <Provider store={store}>
        <LayerTreeContextMenu
          layer={mockLayer}
          visibleLegendsIds={[]}
          setVisibleLegendsIds={mockSetVisibleLegendsIds}
        />
      </Provider>
    );

    const triggerElem = document.querySelector('.ant-dropdown-trigger');
    await fireEvent.click(triggerElem as Element);

    await waitFor(() => {
      expect(screen.getByText('LayerTreeContextMenu.showLegend')).toBeVisible();
    });

    fireEvent.click(screen.getByText('LayerTreeContextMenu.showLegend'));

    await waitFor(() => {
      expect(mockSetVisibleLegendsIds).toHaveBeenCalled();
    });

  });
});
