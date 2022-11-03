import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import ApplicationInfo from './index';

describe('<ApplicationInfo />', () => {

  it('is defined', () => {
    expect(ApplicationInfo).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<ApplicationInfo />, {
      wrapper: createReduxWrapper()
    });
    expect(container).toBeVisible();
  });

});
