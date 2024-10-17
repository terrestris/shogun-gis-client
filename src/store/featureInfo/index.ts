import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import { FeatureInfoConfig } from '../../components/ToolMenu/FeatureInfo';

export enum CopyTools {
  COPY_AS_GEOJSON = 'COPY_AS_GEOJSON',
  COPY_AS_OBJECT = 'COPY_AS_OBJECT'
}

const initialState: FeatureInfoConfig = {
  enabled: false,
  activeCopyTools: [CopyTools.COPY_AS_GEOJSON, CopyTools.COPY_AS_OBJECT]
};

export const slice = createSlice({
  name: 'featureInfo',
  initialState,
  reducers: {
    setFeatureInfoConfig(state, action: PayloadAction<FeatureInfoConfig>) {
      state = action.payload;
    },
    setFeatureInfoEnabled(state, action: PayloadAction<boolean>) {
      state.enabled = action.payload;
    },
    setFeatureInfoActiveCopyTools(state, action: PayloadAction<CopyTools[]>) {
      state.activeCopyTools = action.payload;
    }
  }
});

export const {
  setFeatureInfoEnabled,
  setFeatureInfoActiveCopyTools
} = slice.actions;

export default slice.reducer;
