import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState = false;

export const slice = createSlice({
  name: 'mapToolbar',
  initialState,
  reducers: {
    setMapToolbarVisible: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    }
  }
});

export const {
  setMapToolbarVisible
} = slice.actions;

export default slice.reducer;
