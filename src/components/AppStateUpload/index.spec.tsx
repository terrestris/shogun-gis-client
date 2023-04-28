import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import AppStateUpload from './index';

describe('<AppStateUpload />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(<AppStateUpload />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

});
