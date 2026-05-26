import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  showGeolocation: true,
  showZoomFullExtent: false,
  zoomFullExtentCenter: undefined as [number, number] | undefined,
  zoomFullExtentLevel: undefined as number | undefined
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
    },
    setZoomFullExtentTarget(state, action: PayloadAction<{
      center?: [number, number];
      zoom?: number;
    }>) {
      state.zoomFullExtentCenter = action.payload.center;
      state.zoomFullExtentLevel = action.payload.zoom;
    }
  }
});

export const {
  setGeoLocationVisible,
  setZoomFullExtentTarget,
  setZoomFullExtentVisible,
  setMapToolbarVisible
} = slice.actions;

export default slice.reducer;
