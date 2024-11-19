import React from 'react';

import {
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';

import { message } from 'antd';

import { Feature } from 'ol';
import { Point } from 'ol/geom';
import OlMap from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import OlView from 'ol/View';

import {
  Provider
} from 'react-redux';

import { DigitizeUtil } from '@terrestris/react-geo/dist/Util/DigitizeUtil';

import { renderInMapContext } from '@terrestris/react-geo/dist/Util/rtlTestUtils';

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

jest.mock('@terrestris/react-geo/dist/Button/ModifyButton/ModifyButton', () => ({
  __esModule: true,
  default: ({ onToggle }: { onToggle: (active: boolean) => void }) => (
    <button onClick={() => onToggle(true)}>Mock ModifyButton</button>
  )
}));

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
        />
      </Provider>
    );

    expect(container).toBeVisible();
    expect(screen.getByText('Draw.point')).toBeInTheDocument();
    expect(screen.getByText('Draw.line')).toBeInTheDocument();
    expect(screen.getByText('Draw.polygon')).toBeInTheDocument();
    expect(screen.getByText('Draw.circle')).toBeInTheDocument();
  });

  it('handles upload with valid file type', async () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <Draw
          showUploadFeatures={true}
        />
      </Provider>
    );
    const uploadInput = document.querySelector('input[type="file"]');

    const file = new File(['{"type": "FeatureCollection", "features": []}'], 'test.geojson', { type: 'application/geojson' });

    fireEvent.change(uploadInput!, { target: { files: [file] } });

    await waitFor(() => {
      expect(message.success).toHaveBeenCalledWith('Draw.uploadSuccess');
    });
  });

  it('handles upload with invalid file type', async () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <Draw
          showUploadFeatures={true}
        />
      </Provider>
    );
    const uploadInput = document.querySelector('input[type="file"]');

    const invalidFile = new File(['invalid content'], 'test.txt', { type: 'text/plain' });

    fireEvent.change(uploadInput!, { target: { files: [invalidFile] } });

    await waitFor(() => {
      expect(message.error).toHaveBeenCalledWith('Draw.uploadError');
    });
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
