import {
  createSlice, PayloadAction
} from '@reduxjs/toolkit';

const initialState = '';

export const slice = createSlice({
  name: 'stylingDrawerLayer',
  initialState,
  reducers: {
    setStylingDrawerLayerUid: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
    clearStylingDrawerLayerUid: () => {
      return '';
    }
  }
});

export const {
  setStylingDrawerLayerUid,
  clearStylingDrawerLayerUid
} = slice.actions;

export default slice.reducer;
