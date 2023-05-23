import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit';

export interface EditFeatureState {
  layerId: string | null;
  featureId: string | null;
}

const initialState: EditFeatureState = {
  layerId: null,
  featureId: null
};

const editFeatureSlice = createSlice({
  name: 'editFeature',
  initialState,
  reducers: {
    setLayerId(state, action: PayloadAction<string | null>) {
      state.layerId = action.payload;
    },
    setFeatureId(state, action: PayloadAction<string | null>) {
      state.featureId = action.payload;
    },
    reset(state) {
      state.layerId = null;
      state.featureId = null;
    }
  }
});

export const {
  setLayerId,
  setFeatureId,
  reset
} = editFeatureSlice.actions;

export default editFeatureSlice.reducer;
