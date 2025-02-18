import React from 'react';

import {
  cleanup,
  render
} from '@testing-library/react';

import OlLayerTile from 'ol/layer/Tile';
import OlSourceTileWMS from 'ol/source/TileWMS';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureFullForm from '.';

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
        feature={{
          type: 'Feature',
          geometry: {
            coordinates: [0, 0],
            type: 'Point'
          },
          properties: {
            foo: 'bar'
          }
        }}
        layer={new OlLayerTile({
          source: new OlSourceTileWMS()
        })}
      />, {
        wrapper: createReduxWrapper()
      }
    );
    expect(container).toBeVisible();
  });
});
