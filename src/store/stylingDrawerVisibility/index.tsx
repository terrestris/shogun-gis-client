import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState = false;

export const slice = createSlice({
  name: 'stylingDrawerVisibility',
  initialState,
  reducers: {
    setStylingDrawerVisibility: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    }
  }
});

export const {
  setStylingDrawerVisibility
} = slice.actions;

export default slice.reducer;
