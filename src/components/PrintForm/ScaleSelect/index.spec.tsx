import React from 'react';

import {
  render
} from '@testing-library/react';

import OlMap from 'ol/Map';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';

import ScaleSelect from './index';

describe('<ScaleSelect />', () => {

  let printManager: MapFishPrintV3Manager;

  beforeEach(() => {
    printManager = new MapFishPrintV3Manager({
      map: new OlMap()
    });
  });

  it('is defined', () => {
    expect(ScaleSelect).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<ScaleSelect printManager={printManager} />);
    expect(container).toBeVisible();
  });

});
