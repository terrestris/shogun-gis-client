import React from 'react';

import {
  cleanup,
  fireEvent,
  screen,
  waitFor
} from '@testing-library/react';

import { setupJestCanvasMock } from 'jest-canvas-mock';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlFeature from 'ol/Feature';
import OlPoint from 'ol/geom/Point';

import Draw from './index';

import { Provider } from 'react-redux';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';
import { DigitizeUtil } from '@terrestris/react-util/dist/Util/DigitizeUtil';

import { store } from '../../../store/store';

describe('<Draw />', () => {
  let map: OlMap;
  let feature: OlFeature;
  global.URL.createObjectURL = jest.fn();

  const coord = [829729, 6708850];

  beforeEach(() => {
    setupJestCanvasMock();

    feature = new OlFeature({
      geometry: new OlPoint(coord),
      someProp: 'test'
    });

    map = new OlMap({
      target: 'map',
      view: new OlView({
        center: coord,
        zoom: 10
      }),
      controls: [],
      layers: []
    });
    (DigitizeUtil.getDigitizeLayer(map))
      .getSource()?.addFeature(feature);
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(Draw).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = renderInMapContext(map,
      <Provider store={store}>
        <Draw
        />
      </Provider>
    );
    expect(container).toBeVisible();
  });

  it('is rendered with all props', () => {
    renderInMapContext(map,
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
    expect(screen.getByText('Draw.point')).toBeVisible();
    expect(screen.getByText('Draw.line')).toBeVisible();
    expect(screen.getByText('Draw.polygon')).toBeVisible();
    expect(screen.getByText('Draw.circle')).toBeVisible();
    expect(screen.getByText('Draw.rectangle')).toBeVisible();
    expect(screen.getByText('Draw.text')).toBeVisible();
    expect(screen.getByText('Draw.modify')).toBeVisible();
    expect(screen.getByText('Draw.upload')).toBeVisible();
    expect(screen.getByText('Draw.delete')).toBeVisible();
    expect(screen.getByText('StylingDrawer.openColorPalette')).toBeVisible();
  });

  it('imports data', async () => {
    renderInMapContext(map,
      <Provider store={store}>
        <Draw
          showUploadFeatures={true}
        />
      </Provider>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText('Draw.upload'));
    });

    const exportButton = screen.getByText('Draw.export')
    expect(exportButton).toBeVisible();

    await waitFor(() => {
      fireEvent.click(exportButton);
    });

    expect(window.URL.createObjectURL).toHaveBeenCalled();
  });

});

