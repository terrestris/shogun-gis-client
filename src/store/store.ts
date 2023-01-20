import {
  combineReducers,
  configureStore,
  Reducer
} from '@reduxjs/toolkit';

import addLayerModal from './addLayerModal';
import appInfo from './appInfo';
import description from './description';
import legal from './legal';
import logoPath from './logoPath';
import selectedFeatures from './selectedFeatures';
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
    description,
    legal,
    logoPath,
    toolMenu,
    addLayerModal,
    user,
    selectedFeatures,
    ...asyncReducers
  });
};

export const store = configureStore({
  reducer: createReducer()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
