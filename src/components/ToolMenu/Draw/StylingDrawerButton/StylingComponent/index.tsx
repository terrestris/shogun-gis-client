import React, {
  useEffect,
  useState,
  FC,
  JSX, useMemo
} from 'react';

import {
  locale as GsLocale
} from 'geostyler';
import {
  CardStyle,
  CardStyleProps
} from 'geostyler/dist/Component/CardStyle/CardStyle';

import {
  GeoStylerContext
} from 'geostyler/dist/context/GeoStylerContext/GeoStylerContext';

import { OlStyleParser } from 'geostyler-openlayers-parser';

import {
  Style as GsStyle
} from 'geostyler-style';

import _get from 'lodash/get';
import OlFeature from 'ol/Feature';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';

import {
  StyleFunction,
  StyleLike as OlStyleLike
} from 'ol/style/Style';

import { useTranslation } from 'react-i18next';

import logger from '@terrestris/base-util/dist/Logger';
import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import i18n from '../../../../../i18n';

export type StylingComponentProps = CardStyleProps;

export const StylingComponent: FC<StylingComponentProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const { t } = useTranslation();

  const gsLocale = useMemo(() => {
    let currentLocale = i18n.language || i18n.options?.lng || 'en_US';
    switch (currentLocale) {
      case 'en':
      case 'en_GB':
      case 'en_US':
        currentLocale = 'en_US'; break;
      case 'de':
        currentLocale = 'de_DE'; break;
      case 'pl':
        currentLocale = 'pl_Pl'; break;
      case 'cz':
        currentLocale = 'cs_CZ'; break;
      default:
        currentLocale = '';
    }
    return _get(GsLocale, currentLocale) || GsLocale.en_US;
  }, []);

  const defaultStyle: GsStyle = {
    name: t('StylingComponent.defaultStyleName'),
    rules: [{
      name: t('StylingComponent.defaultAreaStyleName'),
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
      name: t('StylingComponent.defaultLineStyleName'),
      symbolizers: [{
        kind: 'Line',
        color: '#00b72b',
        width: 2,
        opacity: 0.8
      }]
    }, {
      name: t('StylingComponent.defaultPointStyleName'),
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
      name: t('StylingComponent.defaultTextStyleName'),
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

    const olParser = new OlStyleParser();

    const drawVectorLayer = MapUtil.getLayerByName(map, 'react-geo_digitize') as OlLayerVector<OlSourceVector>;

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

        if (!olStyle.output || rule.symbolizers.length < 1) {
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

    parseStyles().then(() => logger.info('Styles parsed and applied to draw layer.'));
  }, [style, map]);

  return (
    <GeoStylerContext.Provider value={{
      locale: gsLocale
    }}
    >
      <CardStyle
        style={style}
        onStyleChange={setStyle}
        {...passThroughProps}
      />
    </GeoStylerContext.Provider>
  );
};

export default StylingComponent;
