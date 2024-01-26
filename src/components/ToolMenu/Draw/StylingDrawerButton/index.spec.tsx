import React from 'react';

import {
  render,
  screen,
  waitFor
} from '@testing-library/react';

import {
  Provider
} from 'react-redux';

import {
  store
} from '../../../../store/store';

import StylingDrawerButton from './index';

const createWrapper = () => {
  // eslint-disable-next-line react/display-name
  return ({
    children
  }: any) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

describe('StylingDrawer', () => {
  it('can be rendered', () => {
    const {
      container
    } = render(<StylingDrawerButton />, {
      wrapper: createWrapper()
    });

    expect(container).toBeVisible();
  });

  it('renders the correct Button title', async () => {
    render(<StylingDrawerButton />, {
      wrapper: createWrapper()
    });

    expect(screen.getByText('StylingDrawer.pickColor')).toBeInTheDocument();
  });
});
