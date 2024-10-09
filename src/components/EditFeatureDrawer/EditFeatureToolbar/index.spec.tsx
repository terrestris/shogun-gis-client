import React from 'react';

import {
  configureStore,
  createSlice
} from '@reduxjs/toolkit';

import {
  cleanup,
  render,
  screen
} from '@testing-library/react';

import { FormInstance } from 'antd/lib/form/hooks/useForm';

import {
  Feature
} from 'geojson';

import { Provider } from 'react-redux';

import { WmsLayer } from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import { EditLevel } from '../../../store/editFeature';

import EditFeatureToolbar from '.';

let layer: WmsLayer;
const feature: Feature = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [0, 0]
  },
  id: 0,
  properties: {}

};
let toolbarElem: HTMLInputElement | null;
let form: FormInstance<any>;

interface EditFeatureState {
  userEditMode: EditLevel[];
}

let initialEditFeatureState: EditFeatureState = {
  userEditMode: ['CREATE']
};
describe('<EditFeatureToolbar />', () => {

  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    const editFeatureSlice = createSlice({
      name: 'editFeature',
      initialState: initialEditFeatureState,
      reducers: {}
    });

    const store = configureStore({
      reducer: {
        editFeature: editFeatureSlice.reducer
      }
    });

    const {
      container
    } = render(
      <Provider store={store}>
        <EditFeatureToolbar
          feature={feature!}
          layer={layer}
          form={form}
        />,
      </Provider>
    );
    expect(container).toBeVisible();
    toolbarElem = container.querySelector('.edit-feature-toolbar');
  });

  it('is defined', () => {
    expect(EditFeatureToolbar).toBeDefined();
  });

  it('can be rendered', () => {
    expect(toolbarElem).toBeVisible();
  });

  it('save button is available', async () => {
    const saveButton = screen.getByText('SaveButton.title');
    expect(saveButton).toBeVisible();
  });

  it('reset button is available', async () => {
    const resetButton = screen.getByText('ResetButton.title');
    expect(resetButton).toBeVisible();

    initialEditFeatureState = { userEditMode: ['DELETE'] };
  });

  it('delete button is available', async () => {
    const deleteButton = screen.getByText('DeleteButton.title');
    expect(deleteButton).toBeVisible();
  });

});
