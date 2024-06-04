import React from 'react';

import { prettyDOM, render } from '@testing-library/react';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureGeometryToolbar from './';

describe('EditFeatureGeometryToolbar', () => {
  it('is defined', () => {
    expect(EditFeatureGeometryToolbar).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } = render(
      <EditFeatureGeometryToolbar
        feature={{
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [0, 0]
          }
        }}
      />,
      {
        wrapper: createReduxWrapper()
      });
    expect(container).toBeVisible();
    console.log(prettyDOM(container));
  });
});
