import {
  configureStore
} from '@reduxjs/toolkit';

import drawer from './drawer';
import title from './title';

export const store = configureStore({
  reducer: {
    drawer,
    title
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
