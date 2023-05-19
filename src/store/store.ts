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
import print from './print';
import selectedFeatures from './selectedFeatures';
import title from './title';
import toolMenu from './toolMenu';
import uploadDataModal from './uploadDataModal';
import user from './user';

type AsyncReducer = {
  [key: string]: Reducer;
};

export const createReducer = (asyncReducers?: AsyncReducer) => {
  return combineReducers({
    addLayerModal,
    appInfo,
    description,
    legal,
    logoPath,
    print,
    selectedFeatures,
    title,
    toolMenu,
    uploadDataModal,
    user,
    ...asyncReducers
  });
};

export const store = configureStore({
  reducer: createReducer()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;