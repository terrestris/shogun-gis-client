import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export type LayerConfig = {
  layerId: number;
  title?: string;
};

export type BackgroundLayerChooserConfig = {
  visible?: boolean;
  layers?: LayerConfig[];
  initiallySelectedLayer?: number | undefined;
  allowEmptyBackground?: boolean;
};

const initialState: BackgroundLayerChooserConfig = {
  visible: false,
  layers: [],
  initiallySelectedLayer: undefined,
  allowEmptyBackground: false
};

export const slice = createSlice({
  name: 'backgroundLayerChooser',
  initialState,
  reducers: {
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
    setAllowEmptyBackground: (state, action: PayloadAction<boolean>) => {
      state.allowEmptyBackground = action.payload;
    }
  }
});

export const {
  setVisible,
  setAllowEmptyBackground
} = slice.actions;

export default slice.reducer;
