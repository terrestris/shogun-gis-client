import {
  createSlice
} from '@reduxjs/toolkit';

interface AddLayerModalState {
  visible: boolean;
}

const initialState: AddLayerModalState = {
  visible: false
};

const addLayerModalSlice = createSlice({
  name: 'addLayerModal',
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
} = addLayerModalSlice.actions;

export default addLayerModalSlice.reducer;
