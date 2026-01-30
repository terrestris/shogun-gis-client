
import React from 'react';

import { render } from '@testing-library/react';

import { createReduxWrapper } from '../../../utils/testUtils';

import Measure from './index';

describe('<Measure />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(
      <Measure />,
      { wrapper: createReduxWrapper() }
    );
    expect(container).toBeVisible();
  });

});
