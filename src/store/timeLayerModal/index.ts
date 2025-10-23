import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export interface TimeLayerModalState {
  layerId: string | null;
}

const initialState: TimeLayerModalState = {
  layerId: null
};

export const slice = createSlice({
  name: 'timeLayerModal',
  initialState,
  reducers: {
    openTimeLayerModal(state, action: PayloadAction<string>) {
      state.layerId = action.payload;
    },
    closeTimeLayerModal(state) {
      state.layerId = null;
    }
  }
});

export const {
  openTimeLayerModal,
  closeTimeLayerModal
} = slice.actions;

export default slice.reducer;
