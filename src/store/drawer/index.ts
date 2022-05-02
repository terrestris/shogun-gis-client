import {
  createSlice
} from '@reduxjs/toolkit';

interface DrawerState {
  visible: boolean;
}

const initialState: DrawerState = {
  visible: false
};

export const slice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.visible = !state.visible;
    }
  }
});

export const {
  toggleVisibility
} = slice.actions;

export default slice.reducer;
