import React from 'react';

import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';

import {
  Feature
} from 'geojson';

import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlLayerTile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlView from 'ol/View';

import { WmsLayer } from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import { createReduxWrapper } from '../../../utils/testUtils';

import DeleteButton from '.';

let mockLayer: WmsLayer;
let mockFeature: Feature;
let map: OlMap;

describe('<DeleteButton />', () => {

  beforeEach(() => {
    document.body.innerHTML = '<div id="map"></div>';

    mockLayer = new OlLayerTile({
      source: new OlSourceTileWMS({
        url: 'https://shogun2022.intranet.terrestris.de/geoserver/ows?',
        params: {
          LAYERS: [],
          useBearerToken: true
        }
      })
    });

    mockFeature = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 0]
      },
      id: 1,
      properties: { layer: mockLayer }
    };

    map = new OlMap({
      target: 'map',
      view: new OlView({
        center: [0, 0],
        zoom: 10
      }),
      layers: []
    });

    map.renderSync();
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(DeleteButton).toBeDefined();

    const olFeature = new OlFormatGeoJSON().readFeature(mockFeature);
    expect(olFeature).toBeDefined();
  });

  it('delete button is available', async () => {
    const { container } = render(
      <DeleteButton
        feature={mockFeature}
        layer={mockLayer}
      />,
      {
        wrapper: createReduxWrapper()
      }
    );

    await waitFor(() => {
      expect(container).toBeVisible();
    });

    const deleteButton = screen.getByText('DeleteButton.title');
    expect(deleteButton).toBeVisible();
  });

  it('confirm popover is opened on click', async () => {
    render(
      <DeleteButton
        data-testid='delete'
        feature={mockFeature}
        layer={mockLayer}
      />,
      { wrapper: createReduxWrapper() }
    );

    const deleteButton = screen.getByText('DeleteButton.title');
    expect(deleteButton).toBeVisible();

    act(() => {
      fireEvent.click(deleteButton);
    });

    const popover = document.querySelector('.ant-popover-open');
    await waitFor(() => {
      expect(popover).toBeVisible();
    });
  });
});
