import React from 'react';

import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within
} from '@testing-library/react';

import {
  Feature
} from 'geojson';

import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlLayerTile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import { WmsLayer } from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import useExecuteWfsTransaction from '../../../hooks/useExecuteWfsTransaction';
import useWriteWfsTransaction from '../../../hooks/useWriteWfsTransaction';
import { store } from '../../../store/store';
import { createReduxWrapper } from '../../../utils/testUtils';

import DeleteButton from '.';

let mockLayer: WmsLayer;
let mockFeature: Feature;
let map: OlMap;

jest.mock('../../../hooks/useWriteWfsTransaction');
jest.mock('../../../hooks/useExecuteWfsTransaction');

describe('<DeleteButton />', () => {

  beforeEach(() => {
    document.body.innerHTML = '<div id="map"></div>';

    mockLayer = new OlLayerTile({
      source: new OlSourceTileWMS({
        url: 'https://shogun2022.intranet.terrestris.de/geoserver/ows?',
        params: {
          LAYERS: [],
          useBearerToken: true
        }
      })
    });

    mockFeature = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 0]
      },
      id: 1,
      properties: { layer: mockLayer }
    };

    map = new OlMap({
      target: 'map',
      view: new OlView({
        center: [0, 0],
        zoom: 10
      }),
      layers: []
    });

    map.renderSync();
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(DeleteButton).toBeDefined();

    const olFeature = new OlFormatGeoJSON().readFeature(mockFeature);
    expect(olFeature).toBeDefined();
  });

  it('delete button is available', async () => {
    const { container } = render(
      <DeleteButton
        feature={mockFeature}
        layer={mockLayer}
      />,
      {
        wrapper: createReduxWrapper()
      }
    );

    await waitFor(() => {
      expect(container).toBeVisible();
    });

    const deleteButton = screen.getByText('DeleteButton.title');
    expect(deleteButton).toBeVisible();
  });

  it('confirm popover is opened on click and delete is successfully executed on confirm', async () => {
    const mockSuccessFunction = jest.fn();
    const mockTransaction = document.createElement('div');
    mockTransaction.textContent = 'Mocked Node';
    const mockWriteWfsTransaction = jest.fn().mockResolvedValue(mockTransaction);
    const mockExecuteWfsTransaction = jest.fn().mockResolvedValue({});

    (useWriteWfsTransaction as jest.Mock).mockReturnValueOnce(mockWriteWfsTransaction);
    (useExecuteWfsTransaction as jest.Mock).mockReturnValueOnce(mockExecuteWfsTransaction);

    renderInMapContext(
      map,
      <Provider store={store}>
        <DeleteButton
          data-testid='delete'
          feature={mockFeature}
          layer={mockLayer}
          onSuccess={mockSuccessFunction}
        />
      </Provider>
    );

    const deleteButton = screen.getByText('DeleteButton.title');
    expect(deleteButton).toBeVisible();

    act(() => {
      fireEvent.click(deleteButton);
    });

    const popover = document.querySelector('.ant-popover-open');
    await waitFor(() => {
      expect(popover).toBeVisible();
    });

    const tooltip = within(screen.getByRole('tooltip'));

    fireEvent.click(tooltip.getByText('OK'));

    await waitFor(() => {
      expect(mockWriteWfsTransaction).toHaveBeenCalled();
      expect(mockExecuteWfsTransaction).toHaveBeenCalled();
      expect(mockSuccessFunction).toHaveBeenCalled();
    });
  });

  it('Error function is called when delete operation can not be executed', async () => {
    const mockErrorFunction = jest.fn();

    renderInMapContext(
      map,
      <Provider store={store}>
        <DeleteButton
          data-testid='delete'
          feature={mockFeature}
          layer={mockLayer}
          onError={mockErrorFunction}
        />
      </Provider>
    );

    const deleteButton = screen.getByText('DeleteButton.title');
    expect(deleteButton).toBeVisible();

    act(() => {
      fireEvent.click(deleteButton);
    });

    const popover = document.querySelector('.ant-popover-open');
    await waitFor(() => {
      expect(popover).toBeVisible();
    });

    const tooltip = within(screen.getByRole('tooltip'));

    fireEvent.click(tooltip.getByText('OK'));

    await waitFor(() => {
      expect(mockErrorFunction).toHaveBeenCalled();
    });
  });
});

