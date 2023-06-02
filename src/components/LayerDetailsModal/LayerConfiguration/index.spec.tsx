import React from 'react';

import {
  render
} from '@testing-library/react';

import LayerConfiguration from './index';

describe('<LayerConfiguration />', () => {

  it('is defined', () => {
    expect(LayerConfiguration).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<LayerConfiguration />);

    expect(container).toBeVisible();
  });

});
