import {
  Action,
  combineReducers,
  configureStore,
  createDynamicMiddleware,
  Reducer,
  ThunkDispatch
} from '@reduxjs/toolkit';

import addLayerModal from './addLayerModal';
import appInfo from './appInfo';
import description from './description';
import editFeature from './editFeature';
import editFeatureDrawerOpen from './editFeatureDrawerOpen';
import featureInfo from './featureInfo';
import layerDetailsModal from './layerDetailsModal';
import layerTree from './layerTree';
import legal from './legal';
import logoPath from './logoPath';
import mapToolbarVisible from './mapToolbarVisible';
import print from './print';
import searchEngines from './searchEngines';
import searchResult from './searchResult';
import selectedFeatures from './selectedFeatures';
import stylingDrawerVisibility from './stylingDrawerVisibility';
import title from './title';
import toolMenu from './toolMenu';
import uploadDataModal from './uploadDataModal';
import user from './user';
import userMenu from './userMenu';

type AsyncReducer = Record<string, Reducer>;

export const dynamicMiddleware = createDynamicMiddleware();

export const createReducer = (asyncReducers?: AsyncReducer) => {
  return combineReducers({
    addLayerModal,
    appInfo,
    description,
    editFeature,
    editFeatureDrawerOpen,
    featureInfo,
    layerDetailsModal,
    layerTree,
    legal,
    logoPath,
    mapToolbarVisible,
    print,
    searchEngines,
    searchResult,
    selectedFeatures,
    stylingDrawerVisibility,
    title,
    toolMenu,
    uploadDataModal,
    user,
    userMenu,
    ...asyncReducers
  });
};

export const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(dynamicMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, undefined, Action>;
