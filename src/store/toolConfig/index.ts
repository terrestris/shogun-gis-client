import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import {
  DefaultApplicationToolConfig
} from '@terrestris/shogun-util/dist/model/Application';

// eslint-disable-next-line no-shadow
export enum ClientTools {
  MEASURE_TOOLS = 'measure_tools',
  DRAW_TOOLS = 'draw_tools',
  FEATURE_INFO = 'feature_info',
  PRINT = 'print',
  TREE = 'tree',
  PERMALINK = 'permalink',
  APP_CONTEXT = 'app_context',
  LANGUAGE_SELECTOR = 'language_selector'
};

const initialState: DefaultApplicationToolConfig[] = [{
  name: ClientTools.MEASURE_TOOLS,
  config: {
    visible: true,
    showMeasureDistance: true,
    showMeasureArea: true
  }
}, {
  name: ClientTools.DRAW_TOOLS,
  config: {
    visible: true,
    showDrawPoint: true,
    showDrawLine: true,
    showDrawPolygon: true,
    showDrawCircle: true,
    showDrawRectangle: true,
    showDrawAnnotation: true,
    showModifyFeatures: true,
    showUploadFeatures: true,
    showDownloadFeatures: true,
    showDeleteFeatures: true,
    showStyleEditor: true,
    features: null,
    // TODO Provide the default style here?
    style: null
  }
}, {
  name: ClientTools.FEATURE_INFO,
  config: {
    visible: true
  }
}, {
  name: ClientTools.PRINT,
  config: {
    visible: true
  }
}, {
  name: ClientTools.TREE,
  config: {
    visible: true
  }
}, {
  name: ClientTools.PERMALINK,
  config: {
    visible: true
  }
}, {
  name: ClientTools.APP_CONTEXT,
  config: {
    visible: true
  }
}, {
  name: ClientTools.LANGUAGE_SELECTOR,
  config: {
    visible: true
  }
}];

export const slice = createSlice({
  name: 'toolConfig',
  initialState,
  reducers: {
    setToolConfig(state, action: PayloadAction<DefaultApplicationToolConfig[]>) {
      return action.payload;
    }
  }
});

export const {
  setToolConfig
} = slice.actions;

export default slice.reducer;
