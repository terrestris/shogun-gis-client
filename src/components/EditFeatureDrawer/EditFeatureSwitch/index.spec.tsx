import React from 'react';

import { WmsLayer } from '@terrestris/react-geo/dist/Util/typeUtils';

import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import { store } from '../../../store/store';

import EditFeatureSwitch from '.';

let layer:WmsLayer

describe('EditFeatureSwitch', () => {
  it('is defined', () => {
    expect(EditFeatureSwitch).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } = render(
      <Provider store={store}>
        <EditFeatureSwitch layer={layer} />
      </Provider>
    );

    expect(container).toBeVisible();
  });
});
