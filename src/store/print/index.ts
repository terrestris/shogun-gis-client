import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import { V3CustomMapParams } from '@terrestris/mapfish-print-manager/dist/manager/MapFishPrintV3Manager';

export type PrintState = {
  customMapParams?: V3CustomMapParams;
  customParams?: any;
  printApp?: string;
};

const initialState: PrintState = {
  printApp: 'default',
  customMapParams: {},
  customParams: {
    printLegend: false
  }
};

export const printSlice = createSlice({
  name: 'print',
  initialState,
  reducers: {
    setCustomMapParams: (state, action: PayloadAction<V3CustomMapParams>) => {
      state.customMapParams = action.payload;
    },
    setCustomParams: (state, action: PayloadAction<any>) => {
      state.customParams = action.payload;
    },
    setPrintApp: (state, action: PayloadAction<string>) => {
      state.printApp = action.payload;
    },
    addCustomMapParam: (state, action: PayloadAction<Partial<V3CustomMapParams>>) => {
      state.customMapParams = {
        ...state.customMapParams,
        ...action.payload
      };
    },
    addCustomParam: (state, action: PayloadAction<any>) => {
      state.customParams = {
        ...state.customParams,
        ...action.payload
      };
    }
  }
});

export const {
  setCustomMapParams,
  setCustomParams,
  addCustomMapParam,
  addCustomParam,
  setPrintApp
} = printSlice.actions;

export default printSlice.reducer;
