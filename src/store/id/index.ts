import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState: number = -1;

export const slice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      return action.payload;
    }
  }
});

export const {
  setId
} = slice.actions;

export default slice.reducer;
