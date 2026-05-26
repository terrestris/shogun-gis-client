import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  showGeolocation: true,
  showZoomFullExtent: true
};

export const slice = createSlice({
  name: 'map_toolbar',
  initialState,
  reducers: {
    setMapToolbarVisible(state, action: PayloadAction<boolean>) {
      state.visible = action.payload;
    },
    setGeoLocationVisible(state, action: PayloadAction<boolean>) {
      state.showGeolocation = action.payload;
    },
    setZoomFullExtentVisible(state, action: PayloadAction<boolean>) {
      state.showZoomFullExtent = action.payload;
    }
  }
});

export const {
  setGeoLocationVisible,
  setZoomFullExtentVisible,
  setMapToolbarVisible
} = slice.actions;

export default slice.reducer;
