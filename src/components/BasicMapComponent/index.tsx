import React, {
  useEffect,
  useCallback
} from 'react';

import _isEmpty from 'lodash/isEmpty';

import BaseLayer from 'ol/layer/Base';

import LayerGroup from 'ol/layer/Group';
import ImageLayer from 'ol/layer/Image';
import TileLayer from 'ol/layer/Tile';

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

import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';

import useQueryParams from '../../hooks/useQueryParams';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

export const BasicMapComponent: React.FC<Partial<MapComponentProps>> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const client = useSHOGunAPIClient();
  const queryParams = useQueryParams();

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

    const externalLayerGroup = MapUtil.getLayerByName(map, t('AddLayerModal.externalWmsFolder')) as LayerGroup;

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
          const layerConfig = cfg.layerConfig;
          const olLayer = await parser.parseLayer(layerConfig);
          if (cfg.isExternalLayer) {
            externalLayerGroup.getLayers().extend([olLayer]);
            externalLayerGroup.setVisible(true);
          } else {
            const customFolderName = cfg.groupName;
            const customLayerGroup = MapUtil.getLayerByName(map, customFolderName) as LayerGroup;

            if (customLayerGroup) {
              customLayerGroup.getLayers().extend([olLayer]);
              customLayerGroup.setVisible(true);
            }
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
      const filter = (l: BaseLayer) => (l instanceof TileLayer || l instanceof ImageLayer);
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

  if (!map) {
    return <></>;
  }

  return (
    <MapComponent
      map={map}
      {...restProps}
    />
  );
};

export default BasicMapComponent;
