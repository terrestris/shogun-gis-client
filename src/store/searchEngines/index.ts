import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export type SearchEngine = 'nominatim' | 'solr' | 'wfs';

const initialState: SearchEngine[] = ['nominatim'];

export const slice = createSlice({
  name: 'searchEngines',
  initialState,
  reducers: {
    setSearchEngines: (state, action: PayloadAction<SearchEngine[]>) => {
      return action.payload;
    }
  }
});

export const {
  setSearchEngines
} = slice.actions;

export default slice.reducer;
