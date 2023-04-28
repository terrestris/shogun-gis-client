import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../../utils/testUtils';

import AppState from './index';

describe('<AppState />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(<AppState />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

});
