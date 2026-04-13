import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  showGeolocation: true
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
    }
  }
});

export const {
  setGeoLocationVisible,
  setMapToolbarVisible
} = slice.actions;

export default slice.reducer;
