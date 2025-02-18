import React from 'react';

import {
  Provider
} from 'react-redux';

import {
  store
} from '../store/store';

export const createReduxWrapper = () => {

  return ({
    children
  }: any) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
