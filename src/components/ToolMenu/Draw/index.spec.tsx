import React from 'react';

import {
  screen,
  fireEvent,
  cleanup,
  waitFor
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

describe('<Draw />', () => {

  it('is defined', () => {
    expect(Draw).not.toBeUndefined();
  });

});
