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

import { Form } from 'antd';

import {
  Feature
} from 'geojson';

import OlLayerTile from 'ol/layer/Tile';
import OlSourceTileWMS from 'ol/source/TileWMS';

import { Provider } from 'react-redux';

import { EditLevel } from '../../../store/editFeature';

import EditFeatureToolbar, { EditFeatureToolbarProps } from '.';

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

interface EditFeatureState {
  userEditMode: EditLevel[];
}

let initialEditFeatureState: EditFeatureState = {
  userEditMode: ['CREATE']
};
describe('<EditFeatureToolbar />', () => {
  const EditFeatureToolbarWrapper = (props: Omit<EditFeatureToolbarProps, 'form'>) => {
    const [form] = Form.useForm();

    return (
      <EditFeatureToolbar
        {...props}
        form={form}
      />
    );
  };

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
        <EditFeatureToolbarWrapper
          feature={feature!}
          layer={new OlLayerTile({
            source: new OlSourceTileWMS()
          })}
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
