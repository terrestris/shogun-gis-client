import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export type LayerTreeConfig = {
  enabled?: boolean;
  activeUploadTools?: UploadTools[];
  showLegends?: boolean;
};

export enum UploadTools {
  addWMS = 'addWMS',
  dataUpload = 'dataUpload'
}

const initialState: LayerTreeConfig = {
  enabled: false,
  activeUploadTools: [UploadTools.addWMS, UploadTools.dataUpload],
  showLegends: false
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
    },
    setLayerTreeShowLegends(state, action: PayloadAction<boolean>) {
      state.showLegends = action.payload;
    }
  }
});

export const {
  setLayerTreeEnabled,
  setLayerTreeActiveUploadTools,
  setLayerTreeShowLegends
} = slice.actions;

export default slice.reducer;
