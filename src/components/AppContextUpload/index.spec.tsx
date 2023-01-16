import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import AppContextUpload from './index';

describe('<AppContextUpload />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(<AppContextUpload />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

});
