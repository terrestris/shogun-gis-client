import React from 'react';

import {
  render
} from '@testing-library/react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';

import CustomFieldInput from './index';

describe('<CustomFieldInput />', () => {

  it('is defined', () => {
    expect(CustomFieldInput).not.toBeUndefined();
  });

});
