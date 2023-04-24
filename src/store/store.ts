import {
  combineReducers,
  configureStore,
  Reducer
} from '@reduxjs/toolkit';

import addLayerModal from './addLayerModal';
import appInfo from './appInfo';
import description from './description';
import id from './id';
import legal from './legal';
import logoPath from './logoPath';
import selectedFeatures from './selectedFeatures';
import stateOnly from './stateOnly';
import title from './title';
import toolConfig from './toolConfig';
import toolMenu from './toolMenu';
import user from './user';

type AsyncReducer = {
  [key: string]: Reducer;
};

export const createReducer = (asyncReducers?: AsyncReducer) => {
  return combineReducers({
    id,
    appInfo,
    title,
    description,
    legal,
    logoPath,
    toolMenu,
    toolConfig,
    addLayerModal,
    user,
    stateOnly,
    selectedFeatures,
    ...asyncReducers
  });
};

export const store = configureStore({
  reducer: createReducer()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
