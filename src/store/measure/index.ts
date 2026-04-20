import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { MeasurementMode } from 'components/ToolMenu/Measure';

export type MeasureState = {
  showSegmentLengths: boolean;
  measurementMode: MeasurementMode;
};

const initialState: MeasureState = {
  showSegmentLengths: false,
  measurementMode: 'auto'
};

export const measureSlice = createSlice({
  name: 'measure',
  initialState,
  reducers: {
    setShowSegmentLengths: (state, action: PayloadAction<boolean>) => {
      state.showSegmentLengths = action.payload;
    },
    setMeasurementMode: (state, action: PayloadAction<MeasurementMode>) => {
      state.measurementMode = action.payload;
    }
  }
});

export const {
  setShowSegmentLengths,
  setMeasurementMode
} = measureSlice.actions;

export default measureSlice.reducer;
