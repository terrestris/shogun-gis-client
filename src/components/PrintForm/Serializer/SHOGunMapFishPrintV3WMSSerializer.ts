import OlLayer from 'ol/layer/Layer';

import { MapFishPrintV3WMSSerializer } from '@terrestris/mapfish-print-manager/dist/serializer/MapFishPrintV3WMSSerializer';

export class SHOGunMapFishPrintV3WMSSerializer extends MapFishPrintV3WMSSerializer {

  serialize(layer: OlLayer, opts?: any) {
    const serialized: any = super.serialize(layer, opts);

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
