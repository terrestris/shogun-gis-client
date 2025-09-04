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
  setVisibility
} from '../../store/classificationDrawer';
import {
  store
} from '../../store/store';

import ClassificationDrawer from './index';

const createWrapper = () => {
  return ({
    children
  }: any) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

describe('ClassificationDrawer', () => {
  it('can be rendered', () => {
    const {
      container
    } = render(<ClassificationDrawer />, {
      wrapper: createWrapper()
    });

    expect(container).toBeVisible();
  });

  it('renders the correct title', async () => {
    render(<ClassificationDrawer />, {
      wrapper: createWrapper()
    });

    store.dispatch(setVisibility(true));
    await waitFor(() => {
      expect(screen.getByText('ClassificationDrawer.title')).toBeInTheDocument();
    });
  });
});
