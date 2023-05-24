import React from 'react';

import { render } from '@testing-library/react';

import EditFeatureSwitch from '.';

describe('EditFeatureSwitch', () => {
  it('is defined', () => {
    expect(EditFeatureSwitch).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } = render(<EditFeatureSwitch />);

    expect(container).toBeVisible();
  });
});
