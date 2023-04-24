import React, {
  useEffect
} from 'react';

import OlParser from 'geostyler-openlayers-parser';

import {
  VectorData
} from 'geostyler-data';

import {
  Style
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

import useAppDispatch from '../../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../../hooks/useAppSelector';

import {
  ClientTools,
  DrawToolConfig,
  setDrawStyle
} from '../../../../../store/toolConfig';

import {
  parseStyle
} from '../../../../../utils/parseStyle';

export type StylingComponentProps = CardStyleProps & {};

export const StylingComponent: React.FC<StylingComponentProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const style = useAppSelector(state => {
    const drawToolConfig = state.toolConfig.find(config => config.name === ClientTools.DRAW_TOOLS);

    if (!drawToolConfig) {
      return;
    }

    return (drawToolConfig as DrawToolConfig).config.style;
  });

  const data = useAppSelector(state => {
    const drawToolConfig = state.toolConfig.find(config => config.name === ClientTools.DRAW_TOOLS);

    if (!drawToolConfig) {
      return;
    }

    const features = (drawToolConfig as DrawToolConfig).config.features;

    if (!features) {
      return;
    }

    const d: VectorData = {
      exampleFeatures: {
        type: 'FeatureCollection',
        features: []
      },
      schema: {
        properties: {},
        type: 'FeatureCollection'
      }
    };

    features.features.forEach(feature => {
      d.exampleFeatures.features.push(feature);
      const properties = feature.properties;

      if (!properties) {
        return;
      }

      Object.entries(properties).forEach(([key, value]) => {
        let type: 'string' | 'number' | 'boolean' | null = null;

        if (typeof value === 'string') {
          type = 'string';
        }

        if (typeof value === 'number') {
          type = 'number';
        }

        if (typeof value === 'boolean') {
          type = 'boolean';
        }

        if (!type) {
          return;
        }

        d.schema.properties[key] = {
          type: type,
          minimum: d.schema.properties[key] < value ? d.schema.properties[key] : value,
          maximum: d.schema.properties[key] > value ? d.schema.properties[key] : value
        };
      });
    });

    return d;
  });

  const dispatch = useAppDispatch();

  const map = useMap();

  useEffect(() => {
    if (!style || !map) {
      return;
    }

    const setStyleToLayer = async () => {
      const drawVectorLayer = DigitizeUtil.getDigitizeLayer(map);

      const drawLayerStyleFunction = await parseStyle(style);

      drawVectorLayer.setStyle(drawLayerStyleFunction as OlStyleFunction);
    };

    setStyleToLayer();
  }, [style, map]);

  const onStyleChange = (gsStyle: Style) => {
    dispatch(setDrawStyle(gsStyle));
  };

  return (
    <CardStyle
      style={style}
      data={data}
      onStyleChange={onStyleChange}
      {...passThroughProps}
    />
  );
};

export default StylingComponent;
