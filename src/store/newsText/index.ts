import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState: number[] = [];

export const slice = createSlice({
  name: 'newsTextIds',
  initialState,
  reducers: {
    setNewsText: (state, action: PayloadAction<number[]>) => {
      return action.payload;
    }
  }
});

export const {
  setNewsText
} = slice.actions;

export default slice.reducer;
