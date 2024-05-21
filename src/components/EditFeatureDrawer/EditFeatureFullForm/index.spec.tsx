import React from 'react';

import {
  cleanup,
  render
} from '@testing-library/react';

import { renderHook } from '@testing-library/react-hooks';

import { WmsLayer } from '@terrestris/react-geo/dist/Util/typeUtils';

import useAppSelector from '../../../hooks/useAppSelector';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureFullForm from '.';

let layer: WmsLayer;

describe('<EditFeatureFullForm />', () => {

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(EditFeatureFullForm).toBeDefined();
  });

  it('can be rendered', () => {
    const { result } = renderHook(() => useAppSelector(state => state.editFeature.feature),
      {
        wrapper: createReduxWrapper()
      });

    let feature = result.current;

    if (!feature) {
      return;
    };

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
