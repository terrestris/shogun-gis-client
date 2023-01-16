import {
  ConfigProvider
} from 'antd';

import Color from 'color';

import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlLayerVector from 'ol/layer/Vector';
import OlMap from 'ol/Map';

import Logger from '@terrestris/base-util/dist/Logger';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-geo/dist/Util/DigitizeUtil';

import Application from '@terrestris/shogun-util/dist/model/Application';
import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';
import SHOGunAPIClient from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

import {
  setDescription
} from '../store/description';
import {
  setId
} from '../store/id';
import {
  setLogoPath
} from '../store/logoPath';
import {
  setStateOnly
} from '../store/stateOnly';
import {
  setTitle
} from '../store/title';
import {
  ClientTools,
  setToolConfig
} from '../store/toolConfig';

import {
  parseStyle
} from '../utils/parseStyle';

import useAppDispatch from './useAppDispatch';
import useSHOGunAPIClient from './useSHOGunAPIClient';

export type ReadOpts = {
  map: OlMap;
  client: SHOGunAPIClient;
};

export const useReadAppContext = () => {
  const dispatch = useAppDispatch();

  const map = useMap();

  const client = useSHOGunAPIClient();

  if (!map || !client) {
    return;
  }

  const restoreMap = async (application: Application) => {
    const parser = new SHOGunApplicationUtil({
      client
    });

    try {
      const view = await parser.parseMapView(application);

      if (view) {
        view.setConstrainResolution(true);
        if (application.clientConfig?.mapView.extent) {
          view.set('extent', application.clientConfig.mapView.extent);
        }

        map?.setView(view);
      }
    } catch (error) {
      Logger.warn('Error while restoring the map view: ', error);
    }

    try {
      const layers = await parser.parseLayerTree(application);

      // TODO Is this asssumption correct?
      if (layers && layers.getLayersArray().length > 0) {
        map.getLayers().getArray()
          .filter(l => !(l instanceof OlLayerVector))
          .forEach(l => map.removeLayer(l));

        layers.getLayers().getArray()
          .forEach(l => {
            const appSettings = application.layerConfig
              ?.find(layerConfig => layerConfig.layerId === l.get('shogunId'));
            l.set('appSettings', appSettings);
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
      }
    } catch (error) {
      Logger.warn('Error while restoring the map layers: ', error);
    }
  };

  const restoreTheme = (application: Application) => {
    ConfigProvider.config({
      theme: {
        primaryColor: Color(application.clientConfig?.theme?.primaryColor).isLight() ?
          Color(application.clientConfig?.theme?.primaryColor).darken(0.5).hexa() :
          application.clientConfig?.theme?.primaryColor
      }
    });

    const appElement = document.querySelector('.App') as HTMLElement;

    if (appElement) {
      if (application.clientConfig?.theme?.primaryColor) {
        appElement.style.setProperty('--primaryColor', application.clientConfig?.theme?.primaryColor);
      }

      if (application.clientConfig?.theme?.secondaryColor) {
        appElement.style.setProperty('--secondaryColor', application.clientConfig?.theme?.secondaryColor);
      }

      if (application.clientConfig?.theme?.complementaryColor) {
        appElement.style.setProperty('--complementaryColor', application.clientConfig?.theme?.complementaryColor);
      }
    }

    if (application.clientConfig?.theme?.logoPath) {
      dispatch(setLogoPath(application.clientConfig?.theme?.logoPath));
    }
  };

  const restoreName = (application: Application) => {
    if (application.name) {
      dispatch(setTitle(application.name));
    }
  };

  const restoreDescription = (application: Application) => {
    if (application.clientConfig?.description) {
      dispatch(setDescription(application.clientConfig?.description));
    }
  };

  const restoreToolConfig = async (application: Application) => {
    if (application.toolConfig) {
      dispatch(setToolConfig(application.toolConfig));
    }

    const drawToolConfig = application.toolConfig?.find(tool => tool.name === ClientTools.DRAW_TOOLS);
    if (drawToolConfig && drawToolConfig.config.visible) {
      const drawVectorLayer = DigitizeUtil.getDigitizeLayer(map);

      if (drawVectorLayer) {
        drawVectorLayer.getSource()?.clear();

        if (drawToolConfig.config.features) {
          try {
            const feats = new OlFormatGeoJSON().readFeatures(drawToolConfig.config.features, {
              dataProjection: 'EPSG:4326',
              featureProjection: map.getView().getProjection()
            });
            drawVectorLayer.getSource()?.addFeatures(feats);
          } catch (error) {
            Logger.warn('Error while restoring the draw features: ', error);
          }
        }

        if (drawToolConfig.config.style) {
          try {
            const styleFunction = await parseStyle(drawToolConfig.config.style);
            drawVectorLayer.setStyle(styleFunction);
          } catch (error) {
            Logger.warn('Error while restoring the draw style: ', error);
          }
        }
      }
    }
  };

  const restoreId = (application: Application) => {
    if (application.id) {
      dispatch(setId(application.id));
    }
  };

  const clearUrl = () => {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    params.delete('applicationId');

    window.history.replaceState(null, '', url);
  };

  const readAppContext = async (application: Application) => {
    // TODO Do we need to become smarter in here?
    clearUrl();

    dispatch(setStateOnly(true));

    await restoreMap(application);

    restoreTheme(application);

    restoreId(application);

    restoreName(application);

    restoreDescription(application);

    await restoreToolConfig(application);
  };

  return readAppContext;
};

export default useReadAppContext;
