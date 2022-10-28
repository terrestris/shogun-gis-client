import React from 'react';

import {
  render
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

  it('renders the correct drawer title', () => {
    const {
      getByText
    } = render(<StylingDrawer />, {
      wrapper: createWrapper()
    });
    getByText('StylingDrawer.pickColor').click();
    expect(getByText('StylingDrawer.title')).toBeInTheDocument();
  });

});
