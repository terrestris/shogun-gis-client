import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState: string = 'Default SHOGun client';

export const slice = createSlice({
  name: 'description',
  initialState,
  reducers: {
    setDescription: (state, action: PayloadAction<string>) => {
      return action.payload;
    }
  }
});

export const {
  setDescription
} = slice.actions;

export default slice.reducer;
