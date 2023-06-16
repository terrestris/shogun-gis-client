import React from 'react';

import {
  render
} from '@testing-library/react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';

import { createReduxWrapper } from '../../utils/testUtils';

import PrintForm from './index';

describe('<PrintForm />', () => {

  const center = [829729, 6708850];
  let map: OlMap;
  let printManager: MapFishPrintV3Manager;

  beforeEach(() => {
    map = new OlMap({
      view: new OlView({
        center,
        zoom: 10
      })
    });
    printManager = new MapFishPrintV3Manager({
      map
    });
  });

  it('is defined', () => {
    expect(PrintForm).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(
      <PrintForm
        map={map}
        active={false}
      />,
      {
        wrapper: createReduxWrapper()
      }
    );
    expect(container).toBeVisible();
  });

});
