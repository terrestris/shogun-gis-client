import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import User from '@terrestris/shogun-util/dist/model/User';

const initialState: User = { };

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return action.payload;
    }
  }
});

export const {
  setUser
} = slice.actions;

export default slice.reducer;
