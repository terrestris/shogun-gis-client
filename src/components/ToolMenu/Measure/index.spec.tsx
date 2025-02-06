
import React from 'react';

import { render } from '@testing-library/react';

import Measure from './index';

describe('<Measure />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(
      <Measure />
    );
    expect(container).toBeVisible();
  });

});
