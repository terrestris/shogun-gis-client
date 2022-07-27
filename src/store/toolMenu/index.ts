import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export interface ToolMenuState {
  selectedKeys: string[];
}

const initialState: ToolMenuState = {
  // This is the default state. If no config is given, then load all tools
  selectedKeys: ['default']
};

export const slice = createSlice({
  name: 'toolMenu',
  initialState,
  reducers: {
    setSelectedKey(state, action: PayloadAction<string[]>) {
      state.selectedKeys = [...action.payload];
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
