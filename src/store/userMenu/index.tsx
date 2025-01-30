import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

const initialState = {
  visible: true
};

export const slice = createSlice({
  name: 'user_menu',
  initialState,
  reducers: {
    setVisible(state, action: PayloadAction<boolean>) {
      state.visible = action.payload;
    }
  }
});

export const {
  setVisible
} = slice.actions;

export default slice.reducer;
