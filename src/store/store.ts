import {
  configureStore
} from '@reduxjs/toolkit';

import drawer from './drawer';

export const store = configureStore({
  reducer: {
    drawer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
