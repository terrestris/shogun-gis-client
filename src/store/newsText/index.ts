import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState = -1;

export const slice = createSlice({
  name: 'newsText',
  initialState,
  reducers: {
    setNewsText: (state, action: PayloadAction<number>) => {
      return action.payload;
    }
  }
});

export const {
  setNewsText
} = slice.actions;

export default slice.reducer;
