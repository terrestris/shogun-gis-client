import * as React from 'react';

import {
  useEffect,
  useState
} from 'react';

import {
  CardStyle,
  CardStyleProps
} from 'geostyler/dist/Component/CardStyle/CardStyle';

import OlParser from 'geostyler-openlayers-parser';

import {
  Style as GsStyle
} from 'geostyler-style';

import OlFeature from 'ol/Feature';

import OlLayerVector from 'ol/layer/Vector';

import {
  StyleFunction,
  StyleLike as OlStyleLike
} from 'ol/style/Style';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

export type StylingComponentProps = CardStyleProps;

export const StylingComponent: React.FC<StylingComponentProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const defaultStyle: GsStyle = {
    name: 'Default Style',
    rules: [{
      name: 'Area',
      symbolizers: [{
        kind: 'Fill',
        color: '#00b72b',
        outlineOpacity: 0.8,
        opacity: 0.5,
        fillOpacity: 0.8,
        outlineWidth: 2,
        outlineColor: '#00b72b'
      }]
    }, {
      name: 'Line',
      symbolizers: [{
        kind: 'Line',
        color: '#00b72b',
        width: 2,
        opacity: 0.8
      }]
    }, {
      name: 'Point',
      symbolizers: [{
        kind: 'Mark',
        wellKnownName: 'circle',
        color: '#00b72b',
        strokeColor: '#00b72b',
        strokeOpacity: 0.8,
        opacity: 0.5,
        radius: 7
      }],
      filter: [
        '==',
        'label',
        'undefined'
      ]
    }, {
      name: 'Text',
      symbolizers: [{
        kind: 'Text',
        label: '{{label}}',
        size: 12,
        font: [
          'sans-serif'
        ],
        opacity: 0.8,
        color: '#00b72b',
        offset: [
          5,
          5
        ],
        haloColor: '#00b72b',
        haloWidth: 1
      }],
      filter: [
        '!=',
        'label',
        'undefined'
      ]
    }]
  };

  const [style, setStyle] = useState<GsStyle>(defaultStyle);

  const map = useMap();

  useEffect(() => {
    if (!style || !map) {
      return;
    }

    const olParser = new OlParser();

    let drawVectorLayer = MapUtil.getLayerByName(map, 'react-geo_digitize') as OlLayerVector<OlFeature>;

    const parseStyles = async () => {
      let olStylePolygon: OlStyleLike;
      let olStyleLineString: OlStyleLike;
      let olStylePoint: OlStyleLike;
      let olStyleText: OlStyleLike;

      for (const rule of style.rules) {
        const newStyle: GsStyle = {
          name: '',
          rules: [rule]
        };

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

      const drawLayerStyleFunction = (feature: OlFeature, resolution: number) => {
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

      drawVectorLayer.setStyle(drawLayerStyleFunction as StyleFunction);
    };

    parseStyles();
  }, [style, map]);

  return (
    <CardStyle
      style={style}
      onStyleChange={setStyle}
      {...passThroughProps}
    />
  );
};

export default StylingComponent;
