import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export interface ToolMenuState {
  activeKeys: string[];
  availableTools: string[];
  collapsed: boolean;
}

const initialState: ToolMenuState = {
  // This is the default state. If no config is given, then load all tools
  activeKeys: [],
  availableTools: ['default'],
  collapsed: false
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
    },
    setCollapsed(state, action: PayloadAction<boolean>) {
      state.collapsed = action.payload;
    }
  }
});

export const {
  setActiveKeys,
  setAvailableTools,
  setCollapsed
} = slice.actions;

export default slice.reducer;
