import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import MultiSearch from './index';

describe('<MultiSearch />', () => {

  it('is defined', () => {
    expect(MultiSearch).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(
      <MultiSearch
        useNominatim={true}
      />, {
        wrapper: createReduxWrapper()
      }
    );
    expect(container).toBeVisible();
  });

});
