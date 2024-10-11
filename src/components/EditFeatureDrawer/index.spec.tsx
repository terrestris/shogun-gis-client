import React from 'react';

import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import { store } from '../../store/store';

import EditFeatureDrawer from '.';

describe('EditFeatureDrawer', () => {

  it('is defined', () => {
    expect(EditFeatureDrawer).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } = render(
      <Provider store={store}>
        <EditFeatureDrawer />
      </Provider>
    );

    expect(container).toBeVisible();
  });
});
