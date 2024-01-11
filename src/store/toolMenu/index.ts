import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export interface ToolMenuState {
  activeKeys: string[];
  availableTools: string[];
}

const initialState: ToolMenuState = {
  // This is the default state. If no config is given, then load all tools
  activeKeys: [],
  availableTools: ['default']
};

export const slice = createSlice({
  name: 'toolMenu',
  initialState,
  reducers: {
    setActiveKeys(state, action: PayloadAction<string[]>) {
      state.activeKeys = [...action.payload];
    },
    setAvailableTools(state, action: PayloadAction<string[]>) {
      state.availableTools = [...action.payload];
    }
  }
});

export const {
  setActiveKeys,
  setAvailableTools
} = slice.actions;

export default slice.reducer;
