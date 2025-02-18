import React from 'react';

import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  screen
} from '@testing-library/react';

import OlLayerTile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import { WmsLayer } from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import {
  EditLevel,
  setUserEditMode
} from '../../../store/editFeature';

import { store } from '../../../store/store';
import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureSwitch from '.';

let mockLayer: WmsLayer;
let map: OlMap;
let allowedEditMode: EditLevel[] = ['NONE'];

const mockFeature = {
  elementFormDefault: 'qualified',
  targetNamespace: 'http://www.openplans.org/topp',
  targetPrefix: 'topp',
  featureTypes: [{
    typeName: 'states',
    properties: [{
      name: 'the_geom',
      nillable: true,
      type: 'gml:MultiPolygon',
      localType: 'MultiPolygon'
    }]
  }]
};

const mockDescribeFeatureType = jest.fn().mockResolvedValue(mockFeature);

jest.mock('@terrestris/ol-util/dist/MapUtil/MapUtil');
jest.mock('../../../hooks/useExecuteWfsDescribeFeatureType', () => {
  const originalModule = jest.requireActual('../../../hooks/useExecuteWfsDescribeFeatureType');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => mockDescribeFeatureType)
  };
});

describe('EditFeatureSwitch', () => {

  beforeEach(() => {
    document.body.innerHTML = '<div id="map"></div>';

    mockLayer = new OlLayerTile({
      source: new OlSourceTileWMS({
        url: 'https://ahocevar.com/geoserver/wms',
        params: {
          LAYERS: 'topp:states',
          TILED: true
        },
        serverType: 'geoserver',
        transition: 0
      })
    });

    map = new OlMap({
      target: 'map',
      view: new OlView({
        zoom: 10
      }),
      controls: [],
      layers: [mockLayer]
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(EditFeatureSwitch).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } =
      render(
        <EditFeatureSwitch layer={mockLayer} />,
        {
          wrapper: createReduxWrapper()
        });

    expect(container).toBeVisible();
    const switchElem = container.querySelector('.edit-feature-switch');
    expect(switchElem).toBeVisible();
  });

  it('feature can be added', async () => {
    const mockFunction = jest.fn();
    allowedEditMode = ['CREATE', 'UPDATE'];
    store.dispatch(setUserEditMode(allowedEditMode));

    renderInMapContext(
      map,
      <Provider store={store}>
        <EditFeatureSwitch
          layer={mockLayer}
          onCreate={mockFunction}
        />,
      </Provider>
    );

    const buttonElem: HTMLElement | null = document.querySelector('button');
    expect(buttonElem).toBeVisible();

    await waitFor(() => {
      fireEvent.click(buttonElem!);
    });

    expect(mockFunction).toHaveBeenCalled();
    expect(store.getState().editFeature.feature?.geometry.type).toBe('MultiPolygon');
  });

  it('usage can be limited', async () => {
    allowedEditMode = ['DELETE', 'UPDATE'];
    store.dispatch(setUserEditMode(allowedEditMode));

    renderInMapContext(
      map,
      <Provider store={store}>
        <EditFeatureSwitch
          layer={mockLayer}
        />,
      </Provider>
    );

    const switchElem: HTMLElement | null = screen.getByText('EditFeatureSwitch.limitedUsageHint');
    expect(switchElem).toBeVisible();
  });
});
