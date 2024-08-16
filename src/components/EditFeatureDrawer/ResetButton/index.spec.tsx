import React from 'react';

import {
  cleanup, fireEvent, prettyDOM, render, screen,
  waitFor
} from '@testing-library/react';

import {
  FormInstance, useForm
} from 'antd/lib/form/Form';
import {
  Feature
} from 'geojson';

import OlMap from 'ol/Map';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import { store } from '../../../store/store';

import ResetButton from '.';

let mockFeature: Feature;
let mockForm: FormInstance;
let map: OlMap;

jest.mock('@terrestris/ol-util/dist/MapUtil/MapUtil');

describe('<ResetButton />', () => {
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

    mockFeature = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 0]
      },
      id: 1,
      properties: {}
    };

    mockForm = {
      submit: jest.fn(),
      getFieldValue: jest.fn(),
      getFieldsValue: jest.fn(),
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
      setFieldValue: jest.fn()
    };
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(ResetButton).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } =
      renderInMapContext(
        map,
        <Provider store={store}>
          <ResetButton
            feature={mockFeature}
            form={mockForm}
          />
        </Provider>
      );

    expect(container).toBeVisible();
  });

  it('reset can be called', async () => {
    const { container } =
      renderInMapContext(
        map,
        <Provider store={store}>
          <ResetButton
            feature={mockFeature}
            form={mockForm}
          />
        </Provider>
      );

    expect(container).toBeVisible();

    const buttonElem = container.querySelector('button');

    await waitFor(() => {
      fireEvent.click(buttonElem);
    });

    expect(mockForm.resetFields).toHaveBeenCalled();
  });
});
