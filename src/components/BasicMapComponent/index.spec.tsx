import React from 'react';

import { cleanup } from '@testing-library/react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import { store } from '../../store/store';

import BasicMapComponent from './index';

describe('<BasicMapComponent />', () => {
  let map: OlMap;

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
    expect(BasicMapComponent).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const { container } =
      renderInMapContext(
        map,
        <Provider store={store}>
          <BasicMapComponent />
        </Provider>
      );

    const mapElem = container.querySelector('.map');
    expect(mapElem).toBeVisible();
  });
});
