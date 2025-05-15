import React from 'react';

import {
  cleanup, render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import ResizableDrawer from './index';

describe('<ResizableDrawer />', () => {

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(ResizableDrawer).not.toBeUndefined();
  });

  it('can be rendered', async () => {
    const {
      container
    } = render(
      <ResizableDrawer
        open={true}
      />,
      {
        wrapper: createReduxWrapper()
      });
    expect(container).toBeVisible();
  });

});
