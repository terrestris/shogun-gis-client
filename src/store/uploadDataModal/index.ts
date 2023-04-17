import {
  createSlice
} from '@reduxjs/toolkit';

export interface UploadDataModalState {
  visible: boolean;
}

const initialState: UploadDataModalState = {
  visible: false
};

const uploadDataModalSlice = createSlice({
  name: 'uploadDataModal',
  initialState,
  reducers: {
    show(state) {
      state.visible = true;
    },
    hide(state) {
      state.visible = false;
    },
    toggle(state) {
      state.visible = !state.visible;
    }
  }
});

export const {
  show,
  hide,
  toggle
} = uploadDataModalSlice.actions;

export default uploadDataModalSlice.reducer;
