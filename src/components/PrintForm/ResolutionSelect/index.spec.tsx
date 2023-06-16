import React from 'react';

import {
  render
} from '@testing-library/react';

import OlMap from 'ol/Map';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';

import ResolutionSelect from './index';

describe('<ResolutionSelect />', () => {

  let printManager: MapFishPrintV3Manager;

  beforeEach(() => {
    printManager = new MapFishPrintV3Manager({
      map: new OlMap()
    });
  });

  it('is defined', () => {
    expect(ResolutionSelect).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<ResolutionSelect printManager={printManager} />);
    expect(container).toBeVisible();
  });

});
