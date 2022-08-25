import {
  combineReducers,
  configureStore,
  Reducer
} from '@reduxjs/toolkit';

import addLayerModal from './addLayerModal';
import appInfo from './appInfo';
import logoPath from './logoPath';
import title from './title';
import toolMenu from './toolMenu';
import user from './user';

type AsyncReducer = {
  [key: string]: Reducer;
};

export const createReducer = (asyncReducers?: AsyncReducer) => {
  return combineReducers({
    appInfo,
    title,
    logoPath,
    toolMenu,
    addLayerModal,
    user,
    ...asyncReducers
  });
};

export const store = configureStore({
  reducer: createReducer()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
