import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import {
  render,
  screen
} from '@testing-library/react';

import OlFeature from 'ol/Feature';
import OlGeomPoint from 'ol/geom/Point';
import OlLayerImage from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import { EditLevel } from 'store/editFeature';

import MapContext from '@terrestris/react-util/dist/Context/MapContext/MapContext';

import FeatureInfo from './index';

let mockCoordinateInfoResult: any = {
  features: [],
  loading: false
};
const mockAllowedEditMode: EditLevel[] = ['UPDATE'];

jest.mock('@terrestris/react-util/dist/Hooks/useCoordinateInfo/useCoordinateInfo', () => ({
  useCoordinateInfo: () => {
    return mockCoordinateInfoResult;
  }
}));

jest.mock('../../../hooks/useAppDispatch', () => ({
  __esModule: true,
  default: () => jest.fn()
}));

jest.mock('../../../hooks/useAppSelector', () => ({
  __esModule: true,
  default: (selector: any) => selector({
    featureInfo: { enabled: true },
    selectedFeatures: {},
    editFeature: {
      userEditMode: mockAllowedEditMode
    }
  })
}));

describe('<FeatureInfo />', () => {
  let map: OlMap;
  let store: any;
  let tileLayer: OlLayerTile<OlSourceTileWMS>;
  let imageLayer: OlLayerImage<OlSourceImageWMS>;

  beforeEach(() => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    map = new OlMap({
      target,
      view: new OlView({
        center: [0, 0],
        zoom: 2
      })
    });

    tileLayer = new OlLayerTile({
      source: new OlSourceTileWMS({
        url: 'http://example.com/wms',
        params: {
          LAYERS: 'layer1'
        }
      }),
      visible: true
    });
    tileLayer.set('hoverable', true);
    tileLayer.set('name', 'TestLayer1');

    imageLayer = new OlLayerImage({
      source: new OlSourceImageWMS({
        url: 'http://example.com/wms',
        params: {
          LAYERS: 'layer2'
        }
      }),
      visible: true
    });
    imageLayer.set('hoverable', true);
    imageLayer.set('name', 'TestLayer2');

    map.addLayer(tileLayer);
    map.addLayer(imageLayer);

    store = configureStore({
      reducer: {
        featureInfo: () => ({ enabled: true }),
        selectedFeatures: () => ({})
      }
    });

    mockCoordinateInfoResult = {
      features: [],
      loading: false
    };
  });

  it('can be rendered with coordinate info', () => {
    render(
      <Provider store={store}>
        <MapContext.Provider value={map}>
          <FeatureInfo />
        </MapContext.Provider>
      </Provider>
    );

    expect(screen.getByText('FeatureInfo.usageHint')).toBeInTheDocument();
  });

  it('renders usage hint when no features are selected', () => {
    mockCoordinateInfoResult = {
      features: [],
      loading: false
    };

    render(
      <Provider store={store}>
        <MapContext.Provider value={map}>
          <FeatureInfo />
        </MapContext.Provider>
      </Provider>
    );

    expect(screen.getByText('FeatureInfo.usageHint')).toBeInTheDocument();
  });

  it('groups features by layer and renders multiple tabs when features are found', () => {
    const feature1 = new OlFeature({
      geometry: new OlGeomPoint([0, 0]),
      name: 'Feature1 from Layer1'
    });

    const feature2 = new OlFeature({
      geometry: new OlGeomPoint([1, 1]),
      name: 'Feature2 from Layer2'
    });

    mockCoordinateInfoResult = {
      features: [
        {
          feature: feature1,
          featureType: 'layer1'
        },
        {
          feature: feature2,
          featureType: 'layer2'
        }
      ],
      loading: false
    };

    render(
      <Provider store={store}>
        <MapContext.Provider value={map}>
          <FeatureInfo />
        </MapContext.Provider>
      </Provider>
    );

    expect(screen.getByText('TestLayer1')).toBeInTheDocument();
    expect(screen.getByText('TestLayer2')).toBeInTheDocument();
  });
});
