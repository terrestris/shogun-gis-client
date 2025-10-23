import React from 'react';

import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import '@testing-library/jest-dom';

import OlFeature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import { Provider } from 'react-redux';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import { store } from '../../../../store/store';

import FeatureInfoPropertyGrid from './index';

jest.mock('../../../../hooks/useHighlightVectorLayer', () => jest.fn());
jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: jest.fn()
}));
jest.mock('@terrestris/ol-util/dist/MapUtil/MapUtil', () => ({
  MapUtil: {
    getLayerByName: jest.fn()
  }
}));

describe('FeatureInfoPropertyGrid', () => {
  let feature1: OlFeature;
  let feature2: OlFeature;
  let vectorLayer: VectorLayer<VectorSource>;

  beforeEach(() => {
    feature1 = new OlFeature({
      id: 1,
      name: 'Feature One'
    });
    feature2 = new OlFeature({
      id: 2,
      name: 'Feature Two',
      geom: new Point([0, 0])
    });

    vectorLayer = new VectorLayer({ source: new VectorSource() });
    (useMap as jest.Mock).mockReturnValue({});
    (MapUtil.getLayerByName as jest.Mock).mockReturnValue(vectorLayer);
  });

  it('renders empty fragment if no selectedFeature', () => {
    (MapUtil.getLayerByName as jest.Mock).mockReturnValue(null);
    const { container } = render(
      <FeatureInfoPropertyGrid
        features={[]}
        layerName="test-layer"
      />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders PropertyGrid when features are provided', () => {
    render(
      <Provider store={store}>
        <FeatureInfoPropertyGrid
          features={[feature1]}
          layerName="test-layer"
        />
      </Provider>
    );

    expect(screen.getAllByRole('table')[0]).toBeInTheDocument();
    expect(screen.getByText(/Feature One/)).toBeInTheDocument();
  });

  it('sets selectedFeature to first feature and clears vectorLayer on mount', () => {
    const clearSpy = jest.spyOn(vectorLayer.getSource()!, 'clear');
    render(
      <Provider store={store}>
        <FeatureInfoPropertyGrid
          features={[feature1, feature2]}
          layerName="test-layer"
        />
      </Provider>
    );

    expect(clearSpy).toHaveBeenCalled();
    expect(screen.getByText(/Feature One/)).toBeInTheDocument();
  });

  it('blacklists geometry attributes', () => {
    render(
      <Provider store={store}>
        <FeatureInfoPropertyGrid
          features={[feature2]}
          layerName="test-layer"
        />
      </Provider>
    );

    expect(screen.getByText(/Feature Two/)).toBeInTheDocument();
    expect(screen.queryByText(/geom/)).not.toBeInTheDocument();
  });

  it('updates selectedFeature when page changes', () => {
    render(
      <Provider store={store}>
        <FeatureInfoPropertyGrid
          features={[feature1, feature2]}
          layerName="test-layer"
        />
      </Provider>
    );

    const pagination = screen.getByRole('list');
    const nextBtn = pagination.querySelectorAll('li')[2].querySelector('button');
    fireEvent.click(nextBtn!);

    expect(screen.getByText(/Feature Two/)).toBeInTheDocument();
  });
});

