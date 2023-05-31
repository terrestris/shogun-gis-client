import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit';

import {
  Feature
} from 'geojson';

export type EditLevel = 'NONE' | 'FULL' | 'LIMITED';
export interface EditFeatureState {
  layerId: string | null;
  feature: Feature | null;
  userEditMode: EditLevel;
}

const initialState: EditFeatureState = {
  layerId: null,
  feature: null,
  userEditMode: 'NONE'
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
    setUserEditMode(state, action: PayloadAction<EditLevel>) {
      state.userEditMode = action.payload;
    }
  }
});

export const {
  setLayerId,
  setFeature,
  reset,
  setUserEditMode
} = editFeatureSlice.actions;

export default editFeatureSlice.reducer;
