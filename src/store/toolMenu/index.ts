import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export interface ToolMenuState {
  activeKeys: string[];
  availableTools: string[];
  maxHeight?: number | string;
  width: number | string;
}

const initialState: ToolMenuState = {
  // This is the default state. If no config is given, then load all tools
  activeKeys: [],
  availableTools: ['default'],
  width: 320
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
    setToolMenuMaxHeight(state, action: PayloadAction<string | number>) {
      state.maxHeight = action.payload;
    },
    setToolMenuWidth(state, action: PayloadAction<string | number>) {
      state.width = action.payload;
    }
  }
});

export const {
  setActiveKeys,
  setAvailableTools,
  setToolMenuMaxHeight,
  setToolMenuWidth
} = slice.actions;

export default slice.reducer;
