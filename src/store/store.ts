import {
  configureStore
} from '@reduxjs/toolkit';

import logoPath from './logoPath';
import title from './title';
import toolMenu from './toolMenu';

export const store = configureStore({
  reducer: {
    title,
    logoPath,
    toolMenu
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
