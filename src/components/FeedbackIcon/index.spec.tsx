import React from 'react';

import {
  render
} from '@testing-library/react';

import FeedbackIcon from '.';

describe('FeedbackIcon', () => {

  it('is defined', () => {
    expect(FeedbackIcon).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } = render(
      <FeedbackIcon loadComplete />
    );

    expect(container).toBeVisible();
  });
});
