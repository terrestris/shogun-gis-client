import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState: string = 'Default title';

export const slice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      return action.payload;
    }
  }
});

export const {
  setTitle
} = slice.actions;

export default slice.reducer;
