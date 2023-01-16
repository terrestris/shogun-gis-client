import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState: boolean = false;

export const slice = createSlice({
  name: 'stateOnly',
  initialState,
  reducers: {
    setStateOnly: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    }
  }
});

export const {
  setStateOnly
} = slice.actions;

export default slice.reducer;
