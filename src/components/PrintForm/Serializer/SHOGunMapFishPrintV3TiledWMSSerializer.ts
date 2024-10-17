import OlLayer from 'ol/layer/Layer';
import OlSourceTileWMS from 'ol/source/TileWMS';

import { MapFishPrintV3TiledWMSSerializer } from '@terrestris/mapfish-print-manager/dist/serializer/MapFishPrintV3TiledWMSSerializer';

import SHOGunMapFishPrintV3WMSSerializer from './SHOGunMapFishPrintV3WMSSerializer';

export class SHOGunMapFishPrintV3TiledWMSSerializer extends SHOGunMapFishPrintV3WMSSerializer {

  serialize(layer: OlLayer<OlSourceTileWMS>, opts: any) {
    const optsToApply = {
      tileSize: [512, 512],
      ...opts
    };

    const source = layer.getSource();

    if (!source || !this.validateSource(source)) {
      return;
    }

    const serialized = {
      ...super.serialize(layer, optsToApply),
      ...{
        type: MapFishPrintV3TiledWMSSerializer.TYPE_WMS
      },
      ...opts
    };

    return serialized;
  }
}

export default SHOGunMapFishPrintV3TiledWMSSerializer;
