import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import AppStateManagement from './index';

describe('<AppStateManagement />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(<AppStateManagement />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

});
