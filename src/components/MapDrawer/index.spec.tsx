import React from 'react';

import {
  cleanup
} from '@testing-library/react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import MapDrawer from '.';

let map: OlMap;

describe('MapDrawer', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="map"></div>';

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
    expect(MapDrawer).toBeDefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = renderInMapContext(
      map,
      <MapDrawer
        open={false}
      />
    );
    expect(container).toBeVisible();
  });
});
