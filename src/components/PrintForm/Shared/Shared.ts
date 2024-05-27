import OlLayer from 'ol/layer/Layer';
import OlRendererLayer from 'ol/renderer/Layer';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSource from 'ol/source/Source';
import OlSourceTileWMS from 'ol/source/TileWMS';

import { Shared } from '@terrestris/mapfish-print-manager/dist/util/Shared';

Shared.getLegendGraphicUrl = (layer: OlLayer<OlSource, OlRendererLayer<any>>): string => {
  if (layer.get('legendUrl')) {
    return layer.get('legendUrl');
  }

  if (layer.getSource() instanceof OlSourceTileWMS ||
    layer.getSource() instanceof OlSourceImageWMS) {

    const customParams: any = layer.get('customPrintLegendParams');
    const source: any = layer.getSource();

    const {
      LAYERS,
      VERSION,
      FORMAT
    } = source.getParams();

    let url: string = source instanceof OlSourceImageWMS ?
      source.getUrl() :
      source.getUrls()[0];

    if (url.startsWith('/geoserver/ows')) {
      url = `http://shogun-geoserver:8080${url}`;
    }

    const params: any = {
      LAYER: LAYERS.split(',')[0],
      VERSION: VERSION || '1.3.0',
      SERVICE: 'WMS',
      REQUEST: 'GetLegendGraphic',
      FORMAT: FORMAT || 'image/png',
      ...customParams
    };

    const queryParams = Object.keys(params).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    }).join('&');

    if (url.startsWith('/geoserver/SHOGUN')) {
      url = `http://shogun-geoserver:8080${url}/service?`;
      return `${url}${queryParams}`;
    }

    if (url.endsWith('?')) {
      return `${url}${queryParams}`;
    } else {
      return `${url}?${queryParams}`;
    }
  }

  return '';
};
