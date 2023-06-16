import React from 'react';

import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import { store } from '../../../store/store';

import EditFeatureGeometryToolbar from './';

describe('EditFeatureGeometryToolbar', () => {
  it('is defined', () => {
    expect(EditFeatureGeometryToolbar).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } = render(
      <Provider store={store}>
        <EditFeatureGeometryToolbar
          feature={{
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [0, 0]
            }
          }}
        />
      </Provider>
    );
    expect(container).toBeVisible();
  });
});
