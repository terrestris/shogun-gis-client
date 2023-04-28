import {
  useMemo
} from 'react';

import OlLayerVector from 'ol/layer/Vector';

import Logger from '@terrestris/base-util/dist/Logger';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import Application from '@terrestris/shogun-util/dist/model/Application';

import Initializer from '../appContext/Initializer';

import {
  setStateOnly
} from '../store/stateOnly';

import useAppDispatch from './useAppDispatch';
import useSHOGunAPIClient from './useSHOGunAPIClient';

export const useReadAppContext = () => {
  const dispatch = useAppDispatch();

  const map = useMap();

  const client = useSHOGunAPIClient();

  const initializer = useMemo(() => {
    if (!client) {
      return;
    }

    return new Initializer({
      client
    });
  }, [client]);

  if (!map || !client || !initializer) {
    return;
  }

  const restoreMap = async (application: Application) => {
    try {
      const newMap = await initializer.setupSHOGunMap(application);

      map.setView(newMap.getView());

      const layers = newMap.getLayerGroup();

      map.getLayers().getArray()
        .filter(l => !(l instanceof OlLayerVector))
        .forEach(l => map.removeLayer(l));

      layers.getLayers().getArray()
        .forEach(l => {
          map.addLayer(l);
        });

      const highestZIndex = map.getAllLayers().reduce((previous, current) => {
        const currentZIndex = current.getZIndex();
        if (currentZIndex > previous) {
          return currentZIndex;
        }

        return previous;
      }, 0);

      // TODO Loading indicator isn't working anymore
      map.getAllLayers()
        .forEach((l, idx) => {
          if (l instanceof OlLayerVector) {
            l.setZIndex(highestZIndex + (idx + 1));
          }
        });
    } catch (error) {
      Logger.warn('Error while restoring the map view or layers: ', error);
    }
  };

  const restoreTheme = (application: Application) => {
    const theme = initializer.parseTheme(application.clientConfig?.theme);

    initializer.setTheme(theme);
  };

  const restoreState = (application: Application) => {
    initializer.setApplicationToStore(application);

    // This should always set to true, regardless what is given in the application context.
    dispatch(setStateOnly(true));
  };

  const updateUrl = (application: Application) => {
    if (!application.id) {
      return;
    }

    const url = new URL(window.location.href);
    const params = url.searchParams;

    params.set('applicationId', application.id.toString());

    window.history.replaceState(null, '', url);
  };

  const readAppContext = async (application: Application) => {
    updateUrl(application);

    await restoreMap(application);

    restoreTheme(application);

    restoreState(application);
  };

  return readAppContext;
};

export default useReadAppContext;
