import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import {
  ClientTools
} from '../toolConfig';

export interface ToolMenuState {
  activeKeys: ClientTools[];
}

const initialState: ToolMenuState = {
  activeKeys: []
};

export const slice = createSlice({
  name: 'toolMenu',
  initialState,
  reducers: {
    setActiveKeys(state, action: PayloadAction<ClientTools[]>) {
      state.activeKeys = [...action.payload];
    }
  }
});

export const {
  setActiveKeys
} = slice.actions;

export default slice.reducer;
