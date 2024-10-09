import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = false;

const editFeatureDrawerOpenSlice = createSlice({
  name: 'editFeatureDrawerOpen',
  initialState,
  reducers: {
    show() {
      return true;
    },
    hide() {
      return false;
    },
    toggle(state) {
      return !state;
    }
  }
});

export const {
  show,
  hide,
  toggle
} = editFeatureDrawerOpenSlice.actions;

export default editFeatureDrawerOpenSlice.reducer;
