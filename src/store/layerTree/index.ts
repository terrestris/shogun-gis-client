import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import { LayerTreeConfig } from '../../components/ToolMenu/LayerTree';

// eslint-disable-next-line no-shadow
export enum UploadTools {
  addWMS = 'addWMS',
  dataUpload = 'dataUpload'
}

const initialState: LayerTreeConfig = {
  enabled: false,
  activeUploadTools: [UploadTools.addWMS, UploadTools.dataUpload]
};

export const slice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setLayerTreeConfig(state, action: PayloadAction<LayerTreeConfig>) {
      state = action.payload;
    },
    setLayerTreeEnabled(state, action: PayloadAction<boolean>) {
      state.enabled = action.payload;
    },
    setLayerTreeActiveUploadTools(state, action: PayloadAction<UploadTools[]>) {
      state.activeUploadTools = action.payload;
    }
  }
});

export const {
  setLayerTreeEnabled,
  setLayerTreeActiveUploadTools
} = slice.actions;

export default slice.reducer;
