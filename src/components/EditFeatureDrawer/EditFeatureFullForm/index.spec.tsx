import React from 'react';

import {
  cleanup,
  render
} from '@testing-library/react';

import {
  Feature
} from 'geojson';

import { WmsLayer } from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureFullForm from '.';

let layer: WmsLayer;
let feature: Feature;

describe('<EditFeatureFullForm />', () => {

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(EditFeatureFullForm).toBeDefined();
  });

  it('can be rendered', () => {

    const {
      container
    } = render(
      <EditFeatureFullForm
        feature={feature}
        layer={layer}
      />, {
        wrapper: createReduxWrapper()
      }
    );
    expect(container).toBeVisible();
  });
});
