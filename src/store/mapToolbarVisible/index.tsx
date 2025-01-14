import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState = {
  visible: false
};

export const slice = createSlice({
  name: 'map_toolbar',
  initialState,
  reducers: {
    setMapToolbarVisible(state, action: PayloadAction<boolean>) {
      state.visible = action.payload;
    }
  }
});

export const {
  setMapToolbarVisible
} = slice.actions;

export default slice.reducer;
