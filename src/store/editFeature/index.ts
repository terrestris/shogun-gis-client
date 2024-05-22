import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit';

import {
  Feature
} from 'geojson';

export type EditLevel =
  | 'CREATE'
  | 'UPDATE'
  | 'DELETE'
  | 'EDIT_GEOMETRY'
  | 'NONE';
export interface EditFeatureState {
  layerId: string | null;
  feature: Feature | null;
  userEditMode: EditLevel[];
  formDirty: boolean;
}

const initialState: EditFeatureState = {
  layerId: null,
  feature: null,
  userEditMode: ['NONE'],
  formDirty: false
};

const editFeatureSlice = createSlice({
  name: 'editFeature',
  initialState,
  reducers: {
    setLayerId(state, action: PayloadAction<string | null>) {
      state.layerId = action.payload;
    },
    setFeature(state, action: PayloadAction<Feature | null>) {
      state.feature = action.payload;
    },
    reset(state) {
      state.layerId = null;
      state.feature = null;
    },
    setUserEditMode(state, action: PayloadAction<EditLevel[]>) {
      state. = action.payload;
    },
    setFormDirty(state, action: PayloadAction<boolean>) {
      state.formDirty = action.payload;
    }
  }
});

export const {
  setLayerId,
  setFeature,
  reset,
  setUserEditMode,
  setFormDirty
} = editFeatureSlice.actions;

export default editFeatureSlice.reducer;
