import defaultsDeep from 'lodash/defaultsDeep';

import OlLayer from 'ol/layer/Layer';
import OlSourceTileWMS from 'ol/source/TileWMS';

import SHOGunMapFishPrintV3WMSSerializer from './SHOGunMapFishPrintV3WMSSerializer';

export class SHOGunMapFishPrintV3TiledWMSSerializer extends SHOGunMapFishPrintV3WMSSerializer {

  static TYPE_WMS: string = 'tiledwms';

  static sourceCls: any[] = [
    OlSourceTileWMS
  ];

  constructor() {
    super();
  }

  serialize(layer: OlLayer<OlSourceTileWMS>, opts: any = {}, resolution: number) {
    defaultsDeep(opts, {
      tileSize: [512, 512]
    });

    const source = layer.getSource();

    if (!source || !this.validateSource(source)) {
      return;
    }

    const serialized = {
      ...super.serialize(layer, opts, resolution),
      ...{
        // @ts-ignore
        type: this.constructor.TYPE_WMS
      },
      ...opts
    };

    return serialized;
  }
}

export default SHOGunMapFishPrintV3TiledWMSSerializer;
