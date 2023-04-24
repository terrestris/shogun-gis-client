import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import AppContextDownload from './index';

describe('<AppContextDownload />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(<AppContextDownload />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

});
