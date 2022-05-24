import React from 'react';

import OlLayerImage from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  useTranslation
} from 'react-i18next';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import CoordinateInfo, {
  CoordinateInfoState,
  CoordinateInfoProps
} from '@terrestris/react-geo/dist/CoordinateInfo/CoordinateInfo';
import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import {
  WmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import FeatureInfoPropertyGrid from './FeaturePropertyGrid';

import './index.less';

export type FeatureInfoProps = {
  enabled?: boolean;
} & Partial<CoordinateInfoProps>;

export const FeatureInfo: React.FC<FeatureInfoProps> = ({
  enabled,
  ...restProps
}): JSX.Element => {
  const {
    t
  } = useTranslation();

  const map = useMap();

  if (!map) {
    return <></>;
  }

  const getQueryLayers = MapUtil.getAllLayers(map)
    .filter((layer) => {
      if (!layer.get('hoverable')) {
        return false;
      }

      if (layer instanceof OlLayerImage && layer.getSource() instanceof OlSourceImageWMS) {
        return true;
      }

      if (layer instanceof OlLayerTile && layer.getSource() instanceof OlSourceTileWMS) {
        return true;
      }

      return false;
    }) as WmsLayer[];

  const resultRenderer = (opts: CoordinateInfoState) => {
    const features = opts.features;
    const loading = opts.loading;

    if (Object.keys(features).length === 0) {
      return <span>Click on the map to get details about the clicked coordinate.</span>;
    }

    return Object.entries(features)
      .map(([layerName, feats]) => {
        return (
          <div
            key={layerName}
          >
            <FeatureInfoPropertyGrid
              features={feats}
              layerName={layerName}
              loading={loading}
            />
          </div>
        );
      });
  };

  if (!enabled) {
    return <></>;
  }

  return (
    <CoordinateInfo
      featureCount={10}
      map={map}
      queryLayers={getQueryLayers}
      resultRenderer={resultRenderer}
      {...restProps}
    />
  );
};

export default FeatureInfo;
