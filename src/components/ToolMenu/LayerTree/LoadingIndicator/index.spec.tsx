import React from 'react';

import {
  render
} from '@testing-library/react';

import LoadingIndicator from '.';

describe('LoadingIndicator', () => {
  it('can be rendered', () => {
    const {
      container
    } = render(
      <LoadingIndicator />
    );
    expect(container).toBeVisible();
  });

});
