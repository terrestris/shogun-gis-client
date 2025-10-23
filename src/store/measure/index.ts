import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export type MeasureState = {
  showSegmentLengths: boolean;
};

const initialState: MeasureState = {
  showSegmentLengths: false
};

export const measureSlice = createSlice({
  name: 'measure',
  initialState,
  reducers: {
    setShowSegmentLengths: (state, action: PayloadAction<boolean>) => {
      state.showSegmentLengths = action.payload;
    }
  }
});

export const {
  setShowSegmentLengths
} = measureSlice.actions;

export default measureSlice.reducer;
