import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState: string = '/loading.png';

export const slice = createSlice({
  name: 'logoPath',
  initialState,
  reducers: {
    setLogoPath: (state, action: PayloadAction<string>) => {
      return action.payload;
    }
  }
});

export const {
  setLogoPath
} = slice.actions;

export default slice.reducer;
