import React, {
  useEffect,
  useCallback
} from 'react';

import _isEmpty from 'lodash/isEmpty';

import BaseLayer from 'ol/layer/Base';

import OlLayerGroup from 'ol/layer/Group';
import OlLayerImage from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  MapUtil,
  PermalinkUtil
} from '@terrestris/ol-util';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import MapComponent, {
  MapComponentProps
} from '@terrestris/react-geo/dist/Map/MapComponent/MapComponent';

import Layer from '@terrestris/shogun-util/dist/model/Layer';
import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';

import usePlugins from '../../hooks/usePlugins';
import useQueryParams from '../../hooks/useQueryParams';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';
import {
  isMapIntegration
} from '../../plugin';

export const BasicMapComponent: React.FC<Partial<MapComponentProps>> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const client = useSHOGunAPIClient();
  const queryParams = useQueryParams();
  const plugins = usePlugins();

  const center = queryParams.get('center');
  const zoom = queryParams.get('zoom');
  const layers = queryParams.get('layers');
  const customLayerAttributes = queryParams.get('customLayerAttributes');

  const {
    t
  } = useTranslation();

  const restoreTransientLayers = useCallback(async (configString: string) => {
    if (!map) {
      return;
    }

    try {
      const config = JSON.parse(configString);

      if (!client) {
        throw new Error('Client is not available');
      }

      const parser = new SHOGunApplicationUtil({
        client
      });

      for (let i = 0; i < config.length; i++) {
        const cfg = config[i];
        if (!_isEmpty(cfg?.layerConfig)) {
          const layerConfig: Layer = cfg.layerConfig;
          const olLayer = await parser.parseLayer(layerConfig);
          olLayer.set('isExternalLayer', cfg.isExternalLayer);
          olLayer.set('groupName', cfg.groupName);
          olLayer.set('layerConfig', cfg.layerConfig);

          if (olLayer.get('isExternalLayer')) {
            let defaultExternalLayerGroup = MapUtil.getLayerByName(map,
              t('AddLayerModal.externalWmsFolder')) as OlLayerGroup;

            if (!defaultExternalLayerGroup) {
              defaultExternalLayerGroup = new OlLayerGroup();
              defaultExternalLayerGroup.set('name', t('AddLayerModal.externalWmsFolder'));
              const existingGroups = map.getLayerGroup().getLayers();
              existingGroups.insertAt(existingGroups?.getLength() || 0, defaultExternalLayerGroup);
            }

            defaultExternalLayerGroup.getLayers().push(olLayer);
            defaultExternalLayerGroup.setVisible(true);
          }

          if (olLayer.get('isExternalLayer') && olLayer.get('groupName')) {
            let customExternalLayerGroup = MapUtil.getLayerByName(map, olLayer.get('groupName')) as OlLayerGroup;

            if (!customExternalLayerGroup) {
              customExternalLayerGroup = new OlLayerGroup();
              customExternalLayerGroup.set('name', olLayer.get('groupName'));
              const existingGroups = map.getLayerGroup().getLayers();
              existingGroups.insertAt(existingGroups?.getLength() || 0, customExternalLayerGroup);
            }

            customExternalLayerGroup.getLayers().push(olLayer);
            customExternalLayerGroup.setVisible(true);
          }
        }
      }
    } catch (error) {
      Logger.error(error);
    }
  }, [client, map, t]);

  useEffect(() => {
    if (map) {
      const identifier = (l: BaseLayer) => l.get('name');
      const filter = (l: BaseLayer) => (l instanceof OlLayerTile || l instanceof OlLayerImage);
      const configString = PermalinkUtil.applyLink(map, ';', identifier, filter);

      if (!configString) {
        return;
      }
      restoreTransientLayers(configString);
    }
  }, [
    map,
    restoreTransientLayers,
    center,
    zoom,
    layers,
    customLayerAttributes
  ]);

  const pluginComponents: JSX.Element[] = [];

  if (plugins) {
    plugins.forEach(plugin => {
      if (isMapIntegration(plugin.integration)) {
        const {
          key,
          wrappedComponent: WrappedPluginComponent
        } = plugin;

        pluginComponents.push(
          <WrappedPluginComponent
            key={key}
          />
        );
      }
    });
  }

  if (!map) {
    return <></>;
  }

  return (
    <MapComponent
      map={map}
      {...restProps}
    >
      {
        pluginComponents
      }
    </MapComponent>
  );
};

export default BasicMapComponent;
