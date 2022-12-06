import OlLayer from 'ol/layer/Layer';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import MapFishPrintV3WMSSerializer from '@terrestris/mapfish-print-manager/dist/serializer/MapFishPrintV3WMSSerializer';

export class SHOGunMapFishPrintV3WMSSerializer extends MapFishPrintV3WMSSerializer {

  static TYPE_WMS: string = 'wms';

  static sourceCls: any[] = [
    OlSourceImageWMS
  ];

  constructor() {
    super();
  }

  serialize(layer: OlLayer<OlSourceImageWMS | OlSourceTileWMS>, opts: any = {}, resolution: number) {
    const serialized: any = super.serialize(layer, opts, resolution);

    if (serialized.baseURL.startsWith('/geoserver/ows')) {
      serialized.baseURL = `http://shogun-geoserver:8080${serialized.baseURL}`;
    }

    if (serialized.baseURL.startsWith('/geoserver/SHOGUN')) {
      serialized.baseURL = `http://shogun-geoserver:8080${serialized.baseURL}`;
    }

    return serialized;
  }
}

export default SHOGunMapFishPrintV3WMSSerializer;
