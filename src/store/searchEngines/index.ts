import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState: string[] = ['nominatim'];

export const slice = createSlice({
  name: 'searchEngines',
  initialState,
  reducers: {
    setSearchEngines: (state, action: PayloadAction<string[]>) => {
      return action.payload;
    }
  }
});

export const {
  setSearchEngines
} = slice.actions;

export default slice.reducer;
