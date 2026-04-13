import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit';

export interface ClassificationDrawerState {
  visibility: boolean;
  layerId: string | null;
}

const initialState: ClassificationDrawerState = {
  visibility: false,
  layerId: null
};

const classificationDrawerSlice = createSlice({
  name: 'classificationDrawer',
  initialState,
  reducers: {
    setVisibility(state, action: PayloadAction<boolean>) {
      state.visibility = action.payload;
    },
    setLayerId(state, action: PayloadAction<string | null>) {
      state.layerId = action.payload;
    }
  }
});

export const {
  setVisibility,
  setLayerId
} = classificationDrawerSlice.actions;

export default classificationDrawerSlice.reducer;
