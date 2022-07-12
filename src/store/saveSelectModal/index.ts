import {
  createSlice
} from '@reduxjs/toolkit';

interface SaveSelectModalState {
  visible: boolean;
}

const initialState: SaveSelectModalState = {
  visible: false
};

const saveSelectModalSlice = createSlice({
  name: 'saveSelectModal',
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
} = saveSelectModalSlice.actions;

export default saveSelectModalSlice.reducer;
