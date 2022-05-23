import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export interface ToolMenuState {
  selectedKeys: string[];
}

const initialState: ToolMenuState = {
  selectedKeys: []
};

export const slice = createSlice({
  name: 'toolMenu',
  initialState,
  reducers: {
    setSelectedKey(state, action: PayloadAction<string>) {
      state.selectedKeys.push(action.payload);
    },
    unsetSelectedKey(state, action: PayloadAction<string>) {
      state.selectedKeys = state.selectedKeys.filter((key) => key !== action.payload);
    }
  }
});

export const {
  setSelectedKey,
  unsetSelectedKey
} = slice.actions;

export default slice.reducer;
