import React from 'react';

import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import { store } from '../../../store/store';

import EditFeatureSwitch from '.';

describe('EditFeatureSwitch', () => {
  it('is defined', () => {
    expect(EditFeatureSwitch).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } = render(
      <Provider store={store}>
        <EditFeatureSwitch />
      </Provider>
    );

    expect(container).toBeVisible();
  });
});
