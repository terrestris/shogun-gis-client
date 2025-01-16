import React from 'react';

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';

import {
  Feature as FeatureGeoJson
} from 'geojson';
import { Feature } from 'ol';
import { MultiPolygon } from 'ol/geom';
import OlGeometry from 'ol/geom/Geometry';
import OlVectorLayer from 'ol/layer/Vector';
import OlMap from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import OlSourceVector from 'ol/source/Vector';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import { DigitizeUtil} from '@terrestris/react-util/dist/Util/DigitizeUtil';
import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import useAppSelector from '../../../hooks/useAppSelector';
import { EditLevel } from '../../../store/editFeature';
import { store } from '../../../store/store';
import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureGeometryToolbar from './';

let map: OlMap;
let mockAllowedEditMode: EditLevel[] = ['EDIT_GEOMETRY'];

jest.mock('../../../hooks/useAppSelector', () => ({
  __esModule: true,
  default: jest.fn()
}));

const feature: FeatureGeoJson = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [0, 0]
  },
  id: 1,
  properties: {}
};

const mockCoordinates = [
  [
    fromLonLat([-100, 40]),
    fromLonLat([-90, 40]),
    fromLonLat([-90, 30]),
    fromLonLat([-100, 30]),
    fromLonLat([-100, 40])
  ]
];

const mockFeature = {
  geometry: new MultiPolygon([mockCoordinates]),
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

const mockVectorSource = new OlSourceVector({
  features: [new Feature<OlGeometry>(mockFeature)]
});

const mockVectorLayer = new OlVectorLayer({
  source: mockVectorSource
});

jest.mock('@terrestris/ol-util/dist/MapUtil/MapUtil');

const mockDescribeFeatureType = jest.fn().mockResolvedValue(mockFeature);
jest.mock('../../../hooks/useExecuteWfsDescribeFeatureType', () => {
  const originalModule = jest.requireActual('../../../hooks/useExecuteWfsDescribeFeatureType');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => mockDescribeFeatureType)
  };
});

describe('EditFeatureGeometryToolbar', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="map"></div>';

    map = new OlMap({
      target: 'map',
      view: new OlView({
        zoom: 10
      }),
      controls: [],
      layers: []
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(EditFeatureGeometryToolbar).toBeDefined();
  });

  it('can be rendered', async () => {
    const getDigitizeLayerMock = jest.spyOn(DigitizeUtil, 'getDigitizeLayer').mockReturnValue(mockVectorLayer);
    jest.requireMock('../../../hooks/useAppSelector').default.mockImplementation((callback: any) => callback({
      editFeature: {
        userEditMode: mockAllowedEditMode
      }
    }));
    const { container } = renderInMapContext(
      map,
      <Provider store={store}>
        <EditFeatureGeometryToolbar
          feature={feature}
        />,
      </Provider>
    );

    expect(container).toBeVisible();

    await waitFor(() => {
      expect(useAppSelector).toHaveBeenCalled();
    });

    expect(screen.queryByText('EditFeatureGeometryToolbar.draw')).toBeNull();
    expect(screen.queryByText('EditFeatureGeometryToolbar.edit')).toBeNull();
    expect(screen.queryByText('EditFeatureGeometryToolbar.delete')).toBeNull();

    await waitFor(() => {
      expect(screen.getByRole('toolbar')).toBeInTheDocument();
    });

    getDigitizeLayerMock.mockRestore();
  });

  it('is empty when not allowed to edit geometery', async () => {
    mockAllowedEditMode = [];
    jest.requireMock('../../../hooks/useAppSelector').default.mockImplementation((callback: any) => callback({
      editFeature: {
        userEditMode: mockAllowedEditMode
      }
    }));
    const { container } = render(
      <EditFeatureGeometryToolbar
        feature={feature}
      />,
      {
        wrapper: createReduxWrapper()
      });
    expect(container).toBeVisible();

    await waitFor(() => {
      expect(useAppSelector).toHaveBeenCalled();
    });
    expect(screen.queryByRole('toolbar')).toBeNull();
  });

  it('renders draw button in edit model create', async () => {
    mockAllowedEditMode = ['EDIT_GEOMETRY', 'CREATE'];
    jest.requireMock('../../../hooks/useAppSelector').default.mockImplementation((callback: any) => callback({
      editFeature: {
        userEditMode: mockAllowedEditMode
      }
    }));
    const { container } = renderInMapContext(
      map,
      <Provider store={store}>
        <EditFeatureGeometryToolbar
          feature={feature}
        />,
      </Provider>
    );

    expect(container).toBeVisible();

    await waitFor(() => {
      expect(useAppSelector).toHaveBeenCalled();
    });

    const drawButton = container.querySelector('button[name="draw"]');
    expect(drawButton).toBeInTheDocument();

    await waitFor(() => {
      fireEvent.click(drawButton);
    });

    expect(drawButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders delete button', async () => {
    mockAllowedEditMode = ['EDIT_GEOMETRY', 'DELETE'];
    jest.requireMock('../../../hooks/useAppSelector').default.mockImplementation((callback: any) => callback({
      editFeature: {
        userEditMode: mockAllowedEditMode
      }
    }));
    const { container } = renderInMapContext(
      map,
      <Provider store={store}>
        <EditFeatureGeometryToolbar
          feature={feature}
        />,
      </Provider>
    );

    expect(container).toBeVisible();

    await waitFor(() => {
      expect(useAppSelector).toHaveBeenCalled();
    });

    const deleteButton = container.querySelector('button[name="delete"]');
    expect(deleteButton).toBeInTheDocument();

    await waitFor(() => {
      fireEvent.click(deleteButton);
    });

    expect(deleteButton).toHaveAttribute('aria-pressed', 'true');
  });
});
