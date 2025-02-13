import React from 'react';

import {
  screen,
  fireEvent,
  cleanup,
  waitFor
} from '@testing-library/react';

import { Feature } from 'ol';
import { Point } from 'ol/geom';
import OlMap from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import OlView from 'ol/View';

import {
  Provider
} from 'react-redux';

import { DigitizeUtil } from '@terrestris/react-util/dist/Util/DigitizeUtil';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import {
  store
} from '../../../store/store';

import Draw from './index';

let map: OlMap;

jest.mock('antd', () => {
  const actualAntd = jest.requireActual('antd');
  return {
    ...actualAntd,
    Input: {
      ...actualAntd.Input,
      TextArea: (props: any) => <textarea {...props} />
    },
    message: {
      success: jest.fn(),
      error: jest.fn()
    }
  };
});

describe('<Draw />', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    document.body.innerHTML = '<div id="map"></div>';

    map = new OlMap({
      target: 'map',
      view: new OlView({
        zoom: 10
      }),
      controls: [],
      layers: []
    });

    const mockFeature = new Feature({
      geometry: new Point(fromLonLat([0, 0]))
    });

    const digitizeLayer = DigitizeUtil.getDigitizeLayer(map);
    const vectorSource = digitizeLayer.getSource();

    vectorSource?.addFeature(mockFeature);
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(Draw).not.toBeUndefined();
  });

  it('can be rendered with optional buttons based on props', () => {
    const {
      container
    } = renderInMapContext(
      map,
      <Provider store={store}>
        <Draw
          showDrawPoint={true}
          showDrawLine={true}
          showDrawPolygon={true}
          showDrawCircle={true}
          showDrawRectangle={true}
          showDrawAnnotation={true}
          showModifyFeatures={true}
          showUploadFeatures={true}
          showDeleteFeatures={true}
        />
      </Provider>
    );

    expect(container).toBeVisible();
    expect(screen.getByText('StylingDrawer.openColorPalette')).toBeInTheDocument();
    expect(screen.getByText('Draw.point')).toBeInTheDocument();
    expect(screen.getByText('Draw.line')).toBeInTheDocument();
    expect(screen.getByText('Draw.polygon')).toBeInTheDocument();
    expect(screen.getByText('Draw.circle')).toBeInTheDocument();
    expect(screen.getByText('Draw.rectangle')).toBeInTheDocument();
    expect(screen.getByText('Draw.text')).toBeInTheDocument();
    expect(screen.getByText('Draw.modify')).toBeInTheDocument();
    expect(screen.getByText('Draw.upload')).toBeInTheDocument();
  });

  test('toggle buttons respond to user interaction', () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <Draw
          showDrawPoint={true}
        />
      </Provider>
    );
    const drawPointButton = screen.getByText('Draw.point');
    fireEvent.click(drawPointButton);
    expect(drawPointButton).toBeInTheDocument();
  });

  test('opens import modal on upload button click', () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <Draw
          showUploadFeatures={true}
        />
      </Provider>
    );
    const uploadButton = screen.getByText('Draw.upload');
    fireEvent.click(uploadButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('handles upload with valid file type', () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <Draw
          showUploadFeatures={true}
        />
      </Provider>
    );
    const file = new File(['{"type": "FeatureCollection", "features": []}'], 'features.geojson', { type: 'application/geo+json' });
    const input = screen.getByLabelText('draw-upload') as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });

    expect(input.files).not.toBeNull();
    expect(input.files![0]).toBe(file);
  });

  it('downloads GeoJSON on export button click', async () => {
    const mockCreateObjectURL = jest.fn(() => 'blob:http://localhost/exportedFeatures.geojson');
    window.URL.createObjectURL = mockCreateObjectURL;

    renderInMapContext(
      map,
      <Provider store={store}>
        <Draw
          showUploadFeatures={true}
        />
      </Provider>
    );

    await waitFor(() => {
      const features = DigitizeUtil.getDigitizeLayer(map).getSource()?.getFeatures();
      expect(features?.length).toBeGreaterThan(0);
    });

    const downloadButton = screen.getByText('Draw.export');

    fireEvent.click(downloadButton);
    await waitFor(() => {
      expect(mockCreateObjectURL).toHaveBeenCalled();
    });
  });

});
