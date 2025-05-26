import {
  createSlice, PayloadAction
} from '@reduxjs/toolkit';

export type MapInteractionStatus = 'feature-info' | 'draw' | 'measure' | 'none';

const mapInteractionStatusSlice = createSlice({
  name: 'mapInteractionStatus',
  initialState: 'none' as MapInteractionStatus,
  reducers: {
    setMapInteractionStatus: (state, action: PayloadAction<MapInteractionStatus>) =>
      action.payload,
    removeInteractionStatus: (state, action: PayloadAction<MapInteractionStatus>) => {
      return action.payload === state ? 'none' : state;
    }
  }
});

export const {
  setMapInteractionStatus,
  removeInteractionStatus
} = mapInteractionStatusSlice.actions;

export default mapInteractionStatusSlice.reducer;
