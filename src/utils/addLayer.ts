import OlLayerGroup from 'ol/layer/Group';
import OlMap from 'ol/Map';

import {
  MapUtil
} from '@terrestris/ol-util';

import Layer from '@terrestris/shogun-util/dist/model/Layer';

import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';

import {
  useSHOGunAPIClient
} from '../hooks/useSHOGunAPIClient';

export const addLayer = async (map: OlMap, shogunLayer: Layer) => {
  const client = useSHOGunAPIClient();
  if (!client || !shogunLayer) {
    return;
  }
  const parser = new SHOGunApplicationUtil({
    client
  });

  const olLayer = await parser.parseLayer(shogunLayer);

  olLayer.set('isProcessedLayer', true);

  const targetFolderName = 'Processed Layers';
  let targetGroup = MapUtil.getLayerByName(map, targetFolderName) as OlLayerGroup;
  if (!targetGroup) {
    targetGroup = new OlLayerGroup();
    targetGroup.set('name', targetFolderName);
    const existingGroups = map.getLayerGroup().getLayers();

    targetGroup.getLayers().extend([olLayer]);
    console.log('targetGroup.getlayers()', targetGroup.getLayers());

    existingGroups.insertAt(existingGroups?.getLength() || 0, targetGroup);
    console.log('existingGroups', existingGroups);
  }
};
