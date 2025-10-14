import React from 'react';

import {
  render
} from '@testing-library/react';

import OlTileLayer from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import OlTileWMS from 'ol/source/TileWMS';
import OlView from 'ol/View';

import {
  Provider
} from 'react-redux';

import {
  renderInMapContext
} from '@terrestris/react-util/dist/Util/rtlTestUtils';

import {
  store
} from '../../../../store/store';

import {
  TreeNodeRenderer,
  TreeNodeRendererProps
} from '.';

describe('<TreeNodeRenderer />', () => {
  let map: OlMap;
  let defaultProps: TreeNodeRendererProps;
  let defaultLayer: OlTileLayer;

  beforeEach(() => {
    map = new OlMap({
      target: 'map',
      view: new OlView({
        center: [0, 0],
        zoom: 0
      }),
      layers: []
    });

    defaultLayer = new OlTileLayer({
      source: new OlTileWMS({
        url: 'https://ows.terrestris.de/osm/service?',
        params: {
          LAYERS: ['some_layer']
        }
      }),
      properties: {
        name: 'Some Layer',
        searchable: true,
        hoverable: true,
        editable: true,
        filtered: true
      }
    });

    defaultProps = {
      layer: defaultLayer,
      layerTileLoadCounter: {
        loaded: 100,
        loading: 0,
        percent: 100
      },
      setVisibleLegendsIds: jest.fn(),
      visibleLegendsIds: []
    };
  });

  it('can be rendered', () => {
    const { container } = render(
      <TreeNodeRenderer
        {...defaultProps}
      />
    );

    expect(container).toBeVisible();
  });

  it('renders the layer name', () => {
    const {
      getByText
    } = renderInMapContext(
      map,
      <Provider store={store}>
        <TreeNodeRenderer
          {...defaultProps}
        />
      </Provider>
    );

    expect(getByText('Some Layer')).toBeVisible();
  });

  it('renders the layer icons', () => {
    const {
      container
    } = renderInMapContext(
      map,
      <Provider store={store}>
        <TreeNodeRenderer
          {...defaultProps}
          layerIconsVisible={true}
        />
      </Provider>
    );

    const searchIcon = container.querySelector('[data-icon="magnifying-glass"]');
    const infoIcon = container.querySelector('[data-icon="circle-info"]');
    const editIcon = container.querySelector('[data-icon="pen"]');
    const filterIcon = container.querySelector('[data-icon="filter"]');

    expect(searchIcon).toBeVisible();
    expect(infoIcon).toBeVisible();
    expect(editIcon).toBeVisible();
    expect(filterIcon).toBeVisible();
  });
});
