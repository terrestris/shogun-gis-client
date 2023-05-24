import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit';

import {
  Feature
} from 'geojson';

export interface EditFeatureState {
  layerId: string | null;
  feature: Feature | null;
}

const initialState: EditFeatureState = {
  layerId: null,
  feature: null
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
    }
  }
});

export const {
  setLayerId,
  setFeature,
  reset
} = editFeatureSlice.actions;

export default editFeatureSlice.reducer;
