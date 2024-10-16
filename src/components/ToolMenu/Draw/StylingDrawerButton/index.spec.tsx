import React from 'react';

import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';

import {
  Provider
} from 'react-redux';

import {
  store
} from '../../../../store/store';

import StylingDrawerButton from './index';

const createWrapper = () => {
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

    const button = screen.getByText('StylingDrawer.openColorPalette');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByText('StylingDrawer.closeColorPalette')).toBeInTheDocument();
  });
});
