import React from 'react';

import {
  render
} from '@testing-library/react';

import MapDrawer from '.';

describe('MapDrawer', () => {

  it('is defined', () => {
    expect(MapDrawer).toBeDefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<MapDrawer />);

    expect(container).toBeVisible();
  });
});
