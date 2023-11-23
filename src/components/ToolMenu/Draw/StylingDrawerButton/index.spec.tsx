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

import StylingDrawer from './index';

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
    } = render(<StylingDrawer />, {
      wrapper: createWrapper()
    });

    expect(container).toBeVisible();
  });

  it('renders the correct drawer title', async () => {
    render(<StylingDrawer />, {
      wrapper: createWrapper()
    });

    screen.getByText('StylingDrawer.pickColor').click();

    await waitFor(() => screen.getByText('StylingDrawer.title'));

    expect(screen.getByText('StylingDrawer.title')).toBeInTheDocument();
  });

});
