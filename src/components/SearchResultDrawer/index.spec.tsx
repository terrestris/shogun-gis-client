import React from 'react';

import {
  render,
  screen,
  waitFor
} from '@testing-library/react';

import {
  Provider
} from 'react-redux';

import { setDrawerVisibility } from '../../store/searchResult';
import {
  store
} from '../../store/store';

import SearchResultDrawer from '../SearchResultDrawer';

import SearchResultDrawerButton from './index';

const createWrapper = () => {
  return ({
    children
  }: any) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

describe('SearchResultDrawer', () => {
  it('can be rendered', () => {
    const {
      container
    } = render(<SearchResultDrawer />, {
      wrapper: createWrapper()
    });

    expect(container).toBeVisible();
  });

  it('renders the correct title', async () => {
    render(<SearchResultDrawerButton />, {
      wrapper: createWrapper()
    });

    store.dispatch(setDrawerVisibility(true));
    await waitFor(() => {
      expect(screen.getByText('SearchResultDrawer.title')).toBeInTheDocument();
    });
  });
});
