import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import Header from './index';

describe('<Header />', () => {

  it('is defined', () => {
    expect(Header).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<Header />, {
      wrapper: createReduxWrapper()
    });
    expect(container).toBeVisible();
  });

});
