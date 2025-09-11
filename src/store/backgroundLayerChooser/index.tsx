import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export type LayerConfig = {
      layerId: number;
      title?: string;
      opacity?: number;
    };

export type BackgroundLayerChooserConfig = {
    visible: boolean;
    layers: LayerConfig[];
    initiallySelectedLayer: number;
    allowEmptyBackground: boolean;
};

const initialState: BackgroundLayerChooserConfig = {
  visible: false,
  layers: [],
  initiallySelectedLayer: 0,
  allowEmptyBackground: false
};

export const slice = createSlice({
  name: 'backgroundLayerChooser',
  initialState,
  reducers: {
    setBackgroundLayerChooserVisible: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
    setBackgroundLayerChooserAllowEmptyBackground: (state, action: PayloadAction<boolean>) => {
      state.allowEmptyBackground = action.payload;
    }
  }
});

export const {
  setBackgroundLayerChooserVisible,
  setBackgroundLayerChooserAllowEmptyBackground
} = slice.actions;

export default slice.reducer;
