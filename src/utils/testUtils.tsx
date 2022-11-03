import React from 'react';

import {
  Provider
} from 'react-redux';

import {
  store
} from '../store/store';

export const createReduxWrapper = () => {
  // eslint-disable-next-line react/display-name
  return ({
    children
  }: any) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
