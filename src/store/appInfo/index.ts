import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import {
  AppInfo
} from '@terrestris/shogun-util/dist/model/AppInfo';

const initialState: AppInfo = {
  authorities: [],
  buildTime: '',
  commitHash: '',
  userId: -1,
  version: ''
};

export const slice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    setAppInfo(state, action: PayloadAction<AppInfo>) {
      return action.payload;
    }
  }
});

export const {
  setAppInfo
} = slice.actions;

export default slice.reducer;
