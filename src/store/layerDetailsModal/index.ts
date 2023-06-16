import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit';

export interface LayerDetailsModalState {
  visible: boolean;
  layerId?: string;
}

const initialState: LayerDetailsModalState = {
  visible: false
};

const layerDetailsModalSlice = createSlice({
  name: 'layerDetailsModal',
  initialState,
  reducers: {
    setLayer(state, action: PayloadAction<string | undefined>) {
      state.layerId = action.payload;
    },
    show(state) {
      state.visible = true;
    },
    hide(state) {
      state.visible = false;
    },
    toggle(state) {
      state.visible = !state.visible;
    }
  }
});

export const {
  setLayer,
  show,
  hide,
  toggle
} = layerDetailsModalSlice.actions;

export default layerDetailsModalSlice.reducer;
