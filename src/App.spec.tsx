import React from 'react';

import { render } from '@testing-library/react';

import App from './App';
import { createReduxWrapper } from './utils/testUtils';

describe('App', () => {
  it('is defined', () => {
    expect(App).toBeDefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<App />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

  it('has header', () => {
    const {
      container
    } = render(<App />, {
      wrapper: createReduxWrapper()
    });

    const headerElem = container.querySelector('.header');
    expect(headerElem).toBeVisible();
  });
});
