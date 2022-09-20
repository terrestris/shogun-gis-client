import React, {
  useEffect
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
  const {
    t
  } = useTranslation();

  const restoreTransientLayers = async (configString: string) => {
    if (!map) {
      return;
    }
    const processedFolderName = t('BasicMapComponent.processedLayersFolder');
    const processedLayerGroup = MapUtil.getLayerByName(map, processedFolderName) as LayerGroup;
    const externalFolderName = t('AddLayerModal.externalWmsFolder');
    const externalLayerGroup = MapUtil.getLayerByName(map, externalFolderName) as LayerGroup;

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
        if (!_isEmpty(cfg)) {
          const layerConfig = cfg.layerConfig;
          const olLayer = await parser.parseLayer(layerConfig);
          if (cfg.isExternalLayer) {
            externalLayerGroup.getLayers().extend([olLayer]);
            externalLayerGroup.setVisible(true);
          } else if (cfg.isProcessedLayer) {
            processedLayerGroup.getLayers().extend([olLayer]);
            processedLayerGroup.setVisible(true);
          }
        }
      }

    } catch (error) {
      Logger.error(error);
    }
  };

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
    queryParams.get('center'),
    queryParams.get('zoom'),
    queryParams.get('layers'),
    queryParams.get('customLayerAttributes')
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
