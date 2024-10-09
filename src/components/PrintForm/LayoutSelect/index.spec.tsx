import React from 'react';

import {
  render
} from '@testing-library/react';

import OlMap from 'ol/Map';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';

import LayoutSelect from './index';

describe('<LayoutSelect />', () => {

  let printManager: MapFishPrintV3Manager;

  beforeEach(() => {
    printManager = new MapFishPrintV3Manager({
      map: new OlMap()
    });
  });

  it('is defined', () => {
    expect(LayoutSelect).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(
      <LayoutSelect
        printManager={printManager}
        onValueChange={() => ''}
      />
    );
    expect(container).toBeVisible();
  });

});
