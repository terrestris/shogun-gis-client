import {
  configureStore
} from '@reduxjs/toolkit';

import addLayerModal from './addLayerModal';
import saveSelectModal from './saveSelectModal';
import appInfo from './appInfo';
import logoPath from './logoPath';
import title from './title';
import toolMenu from './toolMenu';
import user from './user';

export const store = configureStore({
  reducer: {
    appInfo,
    title,
    logoPath,
    toolMenu,
    addLayerModal,
    saveSelectModal,
    user
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
