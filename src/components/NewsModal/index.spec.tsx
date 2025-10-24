import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import NewsModal from './index';

describe('<NewsModal />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(
      <NewsModal />, {
        wrapper: createReduxWrapper()
      }
    );
    expect(container).toBeVisible();
  });

});
