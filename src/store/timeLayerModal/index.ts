import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

export interface TimeLayerModalState {
  layerId: string | null;
  visible: boolean;
}

const initialState: TimeLayerModalState = {
  layerId: null,
  visible: false
};

export const slice = createSlice({
  name: 'timeLayerModal',
  initialState,
  reducers: {
    setLayerId(state, action: PayloadAction<string>) {
      state.layerId = action.payload;
    },
    setModalVisible(state, action: PayloadAction<boolean>) {
      state.visible = action.payload;
    }
  }
});

export const {
  setLayerId,
  setModalVisible
} = slice.actions;

export default slice.reducer;
