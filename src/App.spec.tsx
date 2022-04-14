import React from 'react';

import {
  render, screen
} from '@testing-library/react';

import {
  Provider
} from 'react-redux';

import App from './App';

import {
  store
} from './store/store';

const createWrapper = () => {
  // eslint-disable-next-line react/display-name
  return ({
    children
  }: any) => <Provider store={store}>{children}</Provider>;
};

describe('App', () => {
  it('can be rendered', () => {
    const {
      container
    } = render(<App />, {
      wrapper: createWrapper()
    });

    expect(container).toBeVisible();
  });

  it('renders a toggle button', () => {
    render(<App />, {
      wrapper: createWrapper()
    });

    const linkElement = screen.getByRole(/button/i);
    expect(linkElement).toBeInTheDocument();
  });
});
