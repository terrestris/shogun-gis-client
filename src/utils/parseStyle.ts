
import OlParser from 'geostyler-openlayers-parser';

import {
  Style as GsStyle
} from 'geostyler-style';

import {
  FeatureLike as OlFeatureLike
} from 'ol/Feature';
import {
  StyleFunction as OlStyleFunction,
  StyleLike as OlStyleLike
} from 'ol/style/Style';

export const parseStyle = async (style: GsStyle): Promise<OlStyleFunction | undefined> => {
  let olStylePolygon: OlStyleLike;
  let olStyleLineString: OlStyleLike;
  let olStylePoint: OlStyleLike;
  let olStyleText: OlStyleLike;

  for (const rule of style.rules) {
    const newStyle: GsStyle = {
      name: '',
      rules: [rule]
    };

    const olParser = new OlParser();

    const olStyle = await olParser.writeStyle(newStyle);

    if (!olStyle.output) {
      return;
    }

    if (rule.symbolizers[0].kind === 'Fill') {
      olStylePolygon = olStyle.output;
    }

    if (rule.symbolizers[0].kind === 'Text') {
      olStyleText = olStyle.output;
    }

    if (rule.symbolizers[0].kind === 'Line') {
      olStyleLineString = olStyle.output;
    }

    if (rule.symbolizers[0].kind === 'Mark') {
      olStylePoint = olStyle.output;
    }
  }

  const drawLayerStyleFunction = (feature: OlFeatureLike, resolution: number) => {
    const geometryType = feature.getGeometry()?.getType();

    if (!geometryType) {
      return;
    }

    if (['MultiPolygon', 'Polygon', 'Circle'].includes(geometryType)) {
      return typeof olStylePolygon === 'function' ? olStylePolygon(feature, resolution) : olStylePolygon;
    }

    if (['MultiLineString', 'LineString'].includes(geometryType)) {
      return typeof olStyleLineString === 'function' ? olStyleLineString(feature, resolution) : olStyleLineString;
    }

    if (['MultiPoint', 'Point'].includes(geometryType)) {
      if (feature.get('label')) {
        return typeof olStyleText === 'function' ? olStyleText(feature, resolution) : olStyleText;
      }

      return typeof olStylePoint === 'function' ? olStylePoint(feature, resolution) : olStylePoint;
    }
  };

  return drawLayerStyleFunction;
};
