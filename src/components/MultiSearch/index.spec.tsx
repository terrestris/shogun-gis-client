import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import MultiSearch from './index';

describe('<MultiSearch />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(
      <MultiSearch />, {
        wrapper: createReduxWrapper()
      }
    );
    expect(container).toBeVisible();
  });

});
