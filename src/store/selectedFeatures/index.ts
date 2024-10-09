import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export type SelectedFeatures = Record<string, string>;

const initialState: SelectedFeatures = {};

export const slice = createSlice({
  name: 'selectedFeatures',
  initialState,
  reducers: {
    setSelectedFeatures(state, action: PayloadAction<SelectedFeatures>) {
      return action.payload;
    }
  }
});

export const {
  setSelectedFeatures
} = slice.actions;

export default slice.reducer;
