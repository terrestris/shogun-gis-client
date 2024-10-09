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
} from '../../store/store';

import { setStylingDrawerVisibility } from '../../store/stylingDrawerVisibility';

import StylingDrawerButton, { StylingDrawer } from './index';

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
    } = render(<StylingDrawer />, {
      wrapper: createWrapper()
    });

    expect(container).toBeVisible();
  });

  it('renders the correct title', async () => {
    render(<StylingDrawerButton />, {
      wrapper: createWrapper()
    });

    store.dispatch(setStylingDrawerVisibility(true));
    await waitFor(() => {
      expect(screen.getByText('StylingDrawer.title')).toBeInTheDocument();
    });
  });
});
