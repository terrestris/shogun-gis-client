import React from 'react';

import { render } from '@testing-library/react';
import { ConfigProvider } from 'antd';

import App from './App';
import { createReduxWrapper } from './utils/testUtils';

describe('App', () => {
  it('is defined', () => {
    expect(App).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } = render(
      <ConfigProvider>
        <App />
      </ConfigProvider>,
      { wrapper: createReduxWrapper() }
    );

    expect(container).toBeVisible();
  });

  it('has header', () => {
    const { container } = render(
      <ConfigProvider>
        <App />
      </ConfigProvider>,
      { wrapper: createReduxWrapper() }
    );

    const headerElem = container.querySelector('.header');
    expect(headerElem).toBeVisible();
  });
});
