import React from 'react';

import {
  render
} from '@testing-library/react';

import EditFeatureDrawer from '.';

describe('EditFeatureDrawer', () => {

  it('is defined', () => {
    expect(EditFeatureDrawer).toBeDefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<EditFeatureDrawer />);

    expect(container).toBeVisible();
  });
});
