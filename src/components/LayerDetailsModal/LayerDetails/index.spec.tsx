import React from 'react';

import {
  render
} from '@testing-library/react';

import LayerDetails from './index';

describe('<LayerDetails />', () => {

  it('is defined', () => {
    expect(LayerDetails).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<LayerDetails />);

    expect(container).toBeVisible();
  });
});
