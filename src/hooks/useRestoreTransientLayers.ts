import _isEmpty from 'lodash/isEmpty';

import BaseLayer from 'ol/layer/Base';
import OlLayerGroup from 'ol/layer/Group';

import OlLayerImage from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';
import { PermalinkUtil } from '@terrestris/ol-util/dist/PermalinkUtil/PermalinkUtil';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import Layer from '@terrestris/shogun-util/dist/model/Layer';
import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';

import useQueryParams from './useQueryParams';
import useSHOGunAPIClient from './useSHOGunAPIClient';

export const useRestoreTransientLayers = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const map = useMap();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const client = useSHOGunAPIClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queryParams = useQueryParams();
  const {
    t
  // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useTranslation();

  const layers = queryParams.get('layers');

  if (!map) {
    return;
  }

  const identifier = (l: BaseLayer) => l.get('name');
  const filter = (l: BaseLayer) => (l instanceof OlLayerTile || l instanceof OlLayerImage);
  const configString = PermalinkUtil.applyLink(map, ';', identifier, filter);

  if (!configString) {
    return;
  }

  const addLayerGroup = (name: string) => {
    const layerGroup = new OlLayerGroup({
      layers: []
    });
    layerGroup.set('name', name);
    const existingGroups = map.getLayerGroup().getLayers();
    existingGroups.insertAt(existingGroups?.getLength() || 0, layerGroup);

    return layerGroup;
  };

  try {
    const config = JSON.parse(configString);

    if (!client) {
      throw new Error('Client is not available');
    }

    const parser = new SHOGunApplicationUtil({
      client
    });

    for (const cfg of config) {
      if (!_isEmpty(cfg?.layerConfig)) {
        const layerConfig: Layer = cfg.layerConfig;
        const olLayer = await parser.parseLayer(layerConfig);

        if (!olLayer) {
          continue;
        }

        if (cfg.isExternalLayer) {
          olLayer.set('isExternalLayer', cfg.isExternalLayer);
        }

        if (cfg.isUploadedLayer) {
          olLayer.set('isUploadedLayer', cfg.isUploadedLayer);
        }

        olLayer.set('groupName', cfg.groupName);
        olLayer.set('layerConfig', cfg.layerConfig);

        olLayer.setVisible(!!layers?.split(';').some(l => l === layerConfig.name));

        if (!(olLayer.get('isExternalLayer') || olLayer.get('isUploadedLayer'))) {
          continue;
        }

        let targetGroup: OlLayerGroup;

        if (olLayer.get('groupName')) {
          // handle custom layer group
          targetGroup = MapUtil.getLayerByName(map, olLayer.get('groupName')) as OlLayerGroup;

          if (!targetGroup) {
            targetGroup = addLayerGroup(olLayer.get('groupName'));
          }
        } else {
          // handle default layer group for external layers (external and uploaded layers)
          targetGroup = MapUtil.getLayersByProperty(map, 'isExternalLayerGroup', true)?.[0] as OlLayerGroup;
          if (!targetGroup) {
            targetGroup = addLayerGroup(t('AddLayerModal.externalWmsFolder'));
            targetGroup.set('isExternalLayerGroup', true);
          }
        }

        if (!MapUtil.getLayerByName(map, olLayer.get('name'))) {
          targetGroup.getLayers().push(olLayer);
        }
      }
    }
  } catch (error) {
    Logger.error(error);
  }
};

export default useRestoreTransientLayers;
