import React from 'react';

import { configureStore } from '@reduxjs/toolkit';

import {
  render,
  screen,
  act,
  waitFor,
  cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom';

import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';

import { Provider } from 'react-redux';

import MapContext from '@terrestris/react-util/dist/Context/MapContext/MapContext';

import LayerTree from './index';

const createStore = (preloadedState: any) =>
  configureStore({
    reducer: () => preloadedState,
    preloadedState
  });

describe('LayerTree component', () => {
  const renderWithProvider = (ui: React.ReactElement, state: any, map: Map | null) => {
    const store = createStore(state);
    return render(
      <Provider store={store}>
        <MapContext.Provider value={map}>
          {ui}
        </MapContext.Provider>
      </Provider>);
  };
  let mockMap: Map;
  let mockLayer: TileLayer;

  beforeEach(() => {
    mockMap = new Map({
      view: new View({
        center: [0, 0],
        zoom: 2
      }),
      layers: []
    });
    mockLayer = new TileLayer({
      source: new TileWMS({
        url: 'http://test',
        params: {
          LAYERS: []
        }
      })
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders empty fragment if no map', () => {
    renderWithProvider(
      <LayerTree />,
      {
        editFeature: {
          userEditMode: 'NONE'
        },
        layerTree: {}
      },
      null
    );
    expect(screen.queryByLabelText('layertree')).not.toBeInTheDocument();
  });

  it('renders a basic layer tree when map is provided', () => {
    mockMap.addLayer(mockLayer);
    renderWithProvider(
      <LayerTree />,
      {
        editFeature: {
          userEditMode: 'NONE'
        },
        layerTree: {
          showLegends: false,
          layerIconsVisible: false
        }
      },
      mockMap
    );

    expect(screen.getByLabelText('layertree')).toBeInTheDocument();
  });

  it('renders tree node for WMS layer', () => {
    mockLayer.set('name', 'Tile Layer');
    mockMap.addLayer(mockLayer);

    renderWithProvider(
      <LayerTree />,
      {
        editFeature: {
          userEditMode: 'NONE'
        },
        layerTree: {
          layerIconsVisible: true
        }
      },
      mockMap
    );

    expect(screen.getByLabelText('layertree')).toBeInTheDocument();
    expect(document.querySelector('.ant-tree-treenode')).toBeInTheDocument();
  });

  it('shows LoadingIndicator while tiles are loading', () => {
    mockLayer.set('name', 'Loading Layer');
    mockMap.addLayer(mockLayer);

    renderWithProvider(
      <LayerTree />,
      {
        editFeature: {
          userEditMode: 'NONE'
        },
        layerTree: {
          layerIconsVisible: true
        }
      },
      mockMap
    );

    act(() => {
      mockLayer.getSource()?.dispatchEvent('tileloadstart');
    });

    expect(document.querySelector('.ant-tree-treenode')).toBeInTheDocument();
    waitFor(() => {
      expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
    });
  });

  it('updates load counter on tileloadend', () => {
    mockLayer.set('name', 'Finished Layer');
    mockMap.addLayer(mockLayer);

    renderWithProvider(
      <LayerTree />,
      {
        editFeature: {
          userEditMode: 'NONE'
        },
        layerTree: {}
      },
      mockMap
    );

    act(() => {
      mockLayer.getSource()?.dispatchEvent('tileloadstart');
      mockLayer.getSource()?.dispatchEvent('tileloadend');
    });

    expect(screen.queryByTestId('loading-indicator')).not.toBeInTheDocument();
  });
});
