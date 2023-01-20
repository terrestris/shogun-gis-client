import {
  createSlice, PayloadAction
} from '@reduxjs/toolkit';

export type Legal = {
  contact?: string;
  imprint?: string;
  privacy?: string;
};

const initialState: Legal = {};

export const slice = createSlice({
  name: 'legal',
  initialState,
  reducers: {
    setLegal: (state, action: PayloadAction<Legal>) => {
      return action.payload;
    }
  }
});

export const { setLegal } = slice.actions;

export default slice.reducer;
