import React from 'react';

import { configureStore } from '@reduxjs/toolkit';

import {
  render,
  screen
} from '@testing-library/react';

import OlFeature from 'ol/Feature';
import OlLayerImage from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import MapContext from '@terrestris/react-util/dist/Context/MapContext/MapContext';

import { FeatureInfoForm } from './FeatureInfoForm';

import FeatureInfo from './index';

jest.mock('../../DisplayField', () => (props: any) => (
  <div data-testid="display-field">{props.label}</div>
));
describe('<FeatureInfo />', () => {
  let map: OlMap;
  let store: any;
  let tileLayer: OlLayerTile<OlSourceTileWMS>;
  let imageLayer: OlLayerImage<OlSourceImageWMS>;

  beforeEach(() => {
    map = new OlMap({
      view: new OlView({
        center: [0, 0],
        zoom: 2
      })
    });

    tileLayer = new OlLayerTile({
      source: new OlSourceTileWMS({
        url: 'http://example.com/wms',
        params: {
          LAYERS: 'test:layer1'
        }
      }),
      visible: true
    });
    tileLayer.set('hoverable', true);
    tileLayer.set('name', 'Test Layer 1');

    imageLayer = new OlLayerImage({
      source: new OlSourceImageWMS({
        url: 'http://example.com/wms',
        params: {
          LAYERS: 'test:layer2'
        }
      }),
      visible: true
    });
    imageLayer.set('hoverable', true);
    imageLayer.set('name', 'Test Layer 2');

    map.addLayer(tileLayer);
    map.addLayer(imageLayer);

    store = configureStore({
      reducer: {
        featureInfo: () => ({ enabled: true }),
        selectedFeatures: () => ({})
      }
    });
  });

  it('is defined', () => {
    expect(FeatureInfo).not.toBeUndefined();
  });

  it('renders nothing when map is not available', () => {
    const { container } = render(
      <Provider store={store}>
        <MapContext.Provider value={null}>
          <FeatureInfo />
        </MapContext.Provider>
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });

  it('renders nothing when featureInfo is disabled', () => {
    const disabledStore = configureStore({
      reducer: {
        featureInfo: () => ({ enabled: false }),
        selectedFeatures: () => ({})
      }
    });

    const { container } = render(
      <Provider store={disabledStore}>
        <MapContext.Provider value={map}>
          <FeatureInfo />
        </MapContext.Provider>
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });

  it('renders empty form when no formConfig is set', () => {
    const feature = new OlFeature({
      foo: 'bar',
      baz: 42
    });

    render(
      <FeatureInfoForm
        feature={feature}
      />
    );

    expect(document.querySelector('.feature-info-form')).toBeInTheDocument();
    expect(screen.queryByTestId('display-field')).toBeNull();
  });

  it('renders form items based on formConfig', () => {
    const feature = new OlFeature({
      foo: 'bar',
      baz: 42
    });
    const formConfig = [
      {
        propertyName: 'foo',
        displayName: 'Foo Label',
        fieldProps: {}
      },
      {
        propertyName: 'baz',
        fieldProps: {}
      }
    ];

    render(
      <FeatureInfoForm
        feature={feature}
        formConfig={formConfig}
      />
    );

    expect(screen.getAllByText('Foo Label')[0]).toBeInTheDocument();
    expect(screen.getByTitle('baz')).toBeInTheDocument();
    expect(screen.getAllByTestId('display-field')).toHaveLength(2);
  });

  it('passes additional props to Form', () => {
    const feature = new OlFeature({ foo: 'bar' });
    const { container } = render(
      <FeatureInfoForm
        feature={feature}
        data-testid="my-form"
      />
    );
    expect(container.querySelector('.feature-info-form')).toBeInTheDocument();
    expect(screen.getByTestId('my-form')).toBeInTheDocument();
  });

  it('calls resetFields and setFieldsValue on feature change', () => {
    const feature1 = new OlFeature({ foo: 'bar' });
    const feature2 = new OlFeature({ foo: 'baz' });
    const formConfig = [{
      propertyName: 'foo',
      fieldProps: {}
    }];

    const { rerender } = render(
      <FeatureInfoForm
        feature={feature1}
        formConfig={formConfig}
      />
    );
    rerender(
      <FeatureInfoForm
        feature={feature2}
        formConfig={formConfig}
      />
    );

    expect(screen.getAllByText('foo')[0]).toBeInTheDocument();
  });
});

