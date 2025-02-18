import React from 'react';

import {
  cleanup,
  fireEvent,
  waitFor
} from '@testing-library/react';

import {
  FormInstance
} from 'antd/lib/form/Form';

import { DescribeFeatureType } from 'hooks/useExecuteWfsDescribeFeatureType';
import OlFeature from 'ol/Feature';
import OlGeometry from 'ol/geom/Geometry';
import OlMultiPolygon from 'ol/geom/MultiPolygon';
import OlLayerTile from 'ol/layer/Tile';
import OlVectorLayer from 'ol/layer/Vector';
import OlMap from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlSourceVector from 'ol/source/Vector';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import { WmsLayer } from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import { DigitizeUtil } from '@terrestris/react-util/dist/Util/DigitizeUtil';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import {
  EditLevel,
  setFormDirty,
  setUserEditMode
} from '../../../store/editFeature';

import { store } from '../../../store/store';

import SaveButton from '.';

let mockLayer: WmsLayer;
let map: OlMap;
let mockForm: FormInstance;
let allowedEditMode: EditLevel[] = ['NONE'];

const mockCoordinates = [
  [
    fromLonLat([-100, 40]),
    fromLonLat([-90, 40]),
    fromLonLat([-90, 30]),
    fromLonLat([-100, 30]),
    fromLonLat([-100, 40])
  ]
];

const mockGeometry = new OlMultiPolygon([mockCoordinates]);

const mockDescribeFeatureType: DescribeFeatureType = ({
  elementFormDefault: 'qualified',
  targetNamespace: 'http://www.openplans.org/topp',
  targetPrefix: 'topp',
  featureTypes: [{
    typeName: 'states',
    properties: [{
      name: 'the_geom',
      localType: 'MultiPolygon',
      maxOccurs: 1,
      minOccurs: 0,
      nillable: true,
      type: 'gml:MultiPolygon'
    }]
  }]
});

const mockVectorSource = new OlSourceVector({
  features: [new OlFeature<OlGeometry>(mockGeometry)]
});

const mockVectorLayer = new OlVectorLayer({
  source: mockVectorSource
});

jest.mock('@terrestris/ol-util/dist/MapUtil/MapUtil');

const mockUseExecuteWfsDescribeFeatureType = jest.fn().mockResolvedValue(mockDescribeFeatureType);

jest.mock('../../../hooks/useExecuteWfsDescribeFeatureType', () => {
  const originalModule = jest.requireActual('../../../hooks/useExecuteWfsDescribeFeatureType');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => mockUseExecuteWfsDescribeFeatureType)
  };
});

const mockWfsTransaction = jest.fn().mockResolvedValue('success');

jest.mock('../../../hooks/useExecuteWfsTransaction', () => {
  const originalModule = jest.requireActual('../../../hooks/useExecuteWfsTransaction');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => mockWfsTransaction)
  };
});

describe('<SaveButton />', () => {
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
      layers: [mockLayer, mockVectorLayer]
    });

    mockForm = {
      submit: jest.fn(),
      getFieldValue: jest.fn(),
      getFieldsValue: jest.fn(() => true),
      resetFields: jest.fn(),
      setFieldsValue: jest.fn(),
      validateFields: jest.fn(),
      scrollToField: jest.fn(),
      getFieldError: jest.fn(),
      getFieldsError: jest.fn(),
      getFieldWarning: jest.fn(),
      getFieldInstance: jest.fn(),
      isFieldsTouched: jest.fn(),
      isFieldTouched: jest.fn(),
      isFieldValidating: jest.fn(),
      isFieldsValidating: jest.fn(),
      setFields: jest.fn(),
      setFieldValue: jest.fn(),
      focusField: jest.fn()
    };
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(SaveButton).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } =
      renderInMapContext(
        map,
        <Provider store={store}>
          <SaveButton
            layer={mockLayer}
            form={mockForm}
          />
        </Provider>
      );

    expect(container).toBeVisible();
  });

  it('can be saved', async () => {
    const mockSuccessFunction = jest.fn();
    const mockErrorFunction = jest.fn();
    const getDigitizeLayerMock = jest.spyOn(DigitizeUtil, 'getDigitizeLayer').mockReturnValue(mockVectorLayer);
    allowedEditMode = ['CREATE', 'EDIT_GEOMETRY'];
    store.dispatch(setUserEditMode(allowedEditMode));
    store.dispatch(setFormDirty(true));

    renderInMapContext(
      map,
      <Provider store={store}>
        <SaveButton
          layer={mockLayer}
          form={mockForm}
          onSuccess={mockSuccessFunction}
          onError={mockErrorFunction}
        />
      </Provider>
    );

    const buttonElem: HTMLElement | null = document.querySelector('.save-button');
    expect(buttonElem).toBeVisible();

    await waitFor(() => {
      fireEvent.click(buttonElem!);
    });

    expect(mockForm.getFieldsValue).toHaveBeenCalled();
    expect(mockForm.validateFields).toHaveBeenCalled();

    expect(mockSuccessFunction).toHaveBeenCalled();

    getDigitizeLayerMock.mockRestore();
  });
});
