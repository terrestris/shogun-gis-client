import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import {
  Style
} from 'geostyler-style';

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

export type BaseToolConfig<T extends ClientTools, S = {}> = {
  name: T;
  config: {
    visible: boolean;
  } & S;
};

export type MeasureToolConfig = BaseToolConfig<
  ClientTools.MEASURE_TOOLS,
  {
    showMeasureDistance: boolean;
    showMeasureArea: boolean;
  }
>;

export type DrawToolConfig = BaseToolConfig<
  ClientTools.DRAW_TOOLS,
  {
    showDrawPoint?: boolean;
    showDrawLine?: boolean;
    showDrawPolygon?: boolean;
    showDrawCircle?: boolean;
    showDrawRectangle?: boolean;
    showDrawAnnotation?: boolean;
    showModifyFeatures?: boolean;
    showUploadFeatures?: boolean;
    showDownloadFeatures?: boolean;
    showDeleteFeatures?: boolean;
    showStyleEditor?: boolean;
    features?: GeoJSON.FeatureCollection;
    style?: Style;
  }
>;

export type FeatureInfoToolConfig = BaseToolConfig<
  ClientTools.FEATURE_INFO
>;

export type PrintToolConfig = BaseToolConfig<
  ClientTools.PRINT
>;

export type TreeToolConfig = BaseToolConfig<
  ClientTools.TREE
>;

export type LanguageSelectorToolConfig = BaseToolConfig<
  ClientTools.LANGUAGE_SELECTOR
>;

export type PermalinkToolConfig = BaseToolConfig<
  ClientTools.PERMALINK
>;

export type AppContextToolConfig = BaseToolConfig<
  ClientTools.APP_CONTEXT
>;

export type ApplicationToolConfig = Array<
  MeasureToolConfig |
  DrawToolConfig |
  FeatureInfoToolConfig |
  PrintToolConfig |
  TreeToolConfig|
  LanguageSelectorToolConfig |
  PermalinkToolConfig |
  AppContextToolConfig
>;

const initialState: ApplicationToolConfig = [{
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
    features: {
      type: 'FeatureCollection',
      features: []
    },
    style: {
      name: 'Default Style',
      rules: [{
        name: 'Area',
        symbolizers: [{
          kind: 'Fill',
          color: '#00b72b',
          outlineOpacity: 0.8,
          opacity: 0.5,
          fillOpacity: 0.8,
          outlineWidth: 2,
          outlineColor: '#00b72b'
        }]
      }, {
        name: 'Line',
        symbolizers: [{
          kind: 'Line',
          color: '#00b72b',
          width: 2,
          opacity: 0.8
        }]
      }, {
        name: 'Point',
        symbolizers: [{
          kind: 'Mark',
          wellKnownName: 'circle',
          color: '#00b72b',
          strokeColor: '#00b72b',
          strokeOpacity: 0.8,
          opacity: 0.5,
          radius: 7
        }],
        filter: [
          '==',
          'label',
          'undefined'
        ]
      }, {
        name: 'Text',
        symbolizers: [{
          kind: 'Text',
          label: '{{label}}',
          size: 12,
          font: [
            'sans-serif'
          ],
          opacity: 0.8,
          color: '#00b72b',
          offset: [
            5,
            5
          ],
          haloColor: '#00b72b',
          haloWidth: 1
        }],
        filter: [
          '!=',
          'label',
          'undefined'
        ]
      }]
    }
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
    setToolConfig(state, action: PayloadAction<ApplicationToolConfig>) {
      return action.payload;
    },
    setDrawFeatures: (state, action: PayloadAction<GeoJSON.FeatureCollection>) => {
      const drawToolConfigIdx = state.findIndex(config => config.name === ClientTools.DRAW_TOOLS);

      if (drawToolConfigIdx === -1) {
        return;
      }

      (state[drawToolConfigIdx] as DrawToolConfig).config.features = action.payload;
    },
    addDrawFeature: (state, action: PayloadAction<GeoJSON.Feature>) => {
      const drawToolConfigIdx = state.findIndex(config => config.name === ClientTools.DRAW_TOOLS);

      if (drawToolConfigIdx === -1) {
        return;
      }

      (state[drawToolConfigIdx] as DrawToolConfig).config.features?.features.push(action.payload);
    },
    addDrawFeatures: (state, action: PayloadAction<GeoJSON.FeatureCollection>) => {
      const drawToolConfigIdx = state.findIndex(config => config.name === ClientTools.DRAW_TOOLS);

      if (drawToolConfigIdx === -1) {
        return;
      }

      (state[drawToolConfigIdx] as DrawToolConfig).config.features?.features.push(...action.payload.features);
    },
    updateDrawFeature: (state, action: PayloadAction<GeoJSON.Feature>) => {
      const drawToolConfigIdx = state.findIndex(config => config.name === ClientTools.DRAW_TOOLS);

      if (drawToolConfigIdx === -1) {
        return;
      }

      const updateCandidateIdx = (state[drawToolConfigIdx] as DrawToolConfig).config.features?.features
        .findIndex((feat: GeoJSON.Feature) => feat.id === action.payload.id);

      if (updateCandidateIdx === undefined || updateCandidateIdx === -1) {
        return;
      }

      const featuresToUpdate = (state[drawToolConfigIdx] as DrawToolConfig).config.features;

      if (!featuresToUpdate) {
        return;
      }

      featuresToUpdate.features[updateCandidateIdx] = action.payload;
    },
    removeDrawFeature: (state, action: PayloadAction<string | number>) => {
      const drawToolConfigIdx = state.findIndex(config => config.name === ClientTools.DRAW_TOOLS);

      if (drawToolConfigIdx === -1) {
        return;
      }

      const updateCandidateIdx = (state[drawToolConfigIdx] as DrawToolConfig).config.features?.features
        .findIndex((feat: GeoJSON.Feature) => feat.id === action.payload);

      if (updateCandidateIdx === undefined || updateCandidateIdx === -1) {
        return;
      }

      (state[drawToolConfigIdx] as DrawToolConfig).config.features?.features.splice(updateCandidateIdx, 1);
    },
    setDrawStyle: (state, action: PayloadAction<Style>) => {
      const drawToolConfigIdx = state.findIndex(config => config.name === ClientTools.DRAW_TOOLS);

      if (drawToolConfigIdx === -1) {
        return;
      }

      (state[drawToolConfigIdx] as DrawToolConfig).config.style = action.payload;
    }
  }
});

export const {
  setToolConfig,
  setDrawFeatures,
  addDrawFeature,
  addDrawFeatures,
  updateDrawFeature,
  removeDrawFeature,
  setDrawStyle
} = slice.actions;

export default slice.reducer;
