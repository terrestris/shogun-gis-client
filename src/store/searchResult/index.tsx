import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import { Feature } from 'geojson';

export interface SearchResultState {
  geoJSONFeature: Feature | null;
  drawerVisibility: boolean;
}

const initialState: SearchResultState = {
  drawerVisibility: false,
  geoJSONFeature: null
};

export const slice = createSlice({
  name: 'searchResultDrawer',
  initialState,
  reducers: {
    setSearchResultState: (state, action: PayloadAction<SearchResultState>) => {
      return {
        ...state,
        ...action.payload
      };
    },
    setDrawerVisibility: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        drawerVisibility: action.payload
      };
    },
    setGeoJSONFeature: (state, action: PayloadAction<Feature>) => {
      return {
        ...state,
        geoJSONFeature: action.payload
      };
    }
  }
});

export const {
  setGeoJSONFeature: setFeature,
  setSearchResultState,
  setDrawerVisibility
} = slice.actions;

export default slice.reducer;
