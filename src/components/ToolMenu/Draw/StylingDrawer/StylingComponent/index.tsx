import React, {
  useEffect,
  useState
} from 'react';

import OlParser from 'geostyler-openlayers-parser';

import {
  Style as GsStyle
} from 'geostyler-style';

import CardStyle, {
  CardStyleProps
} from 'geostyler/dist/Component/CardStyle/CardStyle';

import OlFeature from 'ol/Feature';

import OlLayerVector from 'ol/layer/Vector';

import VectorSource from 'ol/source/Vector';

import {
  StyleFunction as OlStyleFunction
} from 'ol/style/Style';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-geo/dist/Util/DigitizeUtil';

import {
  parseStyle
} from '../../../../../utils/parseStyle';

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

export type StylingComponentProps = CardStyleProps & {};

export const StylingComponent: React.FC<StylingComponentProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const [style, setStyle] = useState<GsStyle>(defaultStyle);

  const map = useMap();

  useEffect(() => {
    if (!style || !map) {
      return;
    }

    const setStyleToLayer = async () => {
      const drawVectorLayer = DigitizeUtil.getDigitizeLayer(map);

      const drawLayerStyleFunction = await parseStyle(style);

      drawVectorLayer.set('gsStyle', style);

      drawVectorLayer.setStyle(drawLayerStyleFunction as OlStyleFunction);
    };

    setStyleToLayer();
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
