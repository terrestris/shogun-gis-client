import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../../utils/testUtils';

import AppContext from './index';

describe('<AppContext />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(<AppContext />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

});
