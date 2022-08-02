import React from 'react';

import {
  getUid
} from 'ol';
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

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

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
  const client = useSHOGunAPIClient();

  if (!map) {
    return <></>;
  }

  const queryLayers = MapUtil.getAllLayers(map)
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
      return (
        <span className='usage-hint'>
          {t('FeatureInfo.usageHint')}
        </span>
      );
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

  const getFetchOpts = () => {
    const opts: {
      [uid: string]: RequestInit;
    } = {};

    queryLayers.forEach(layer => {
      const layerUid = getUid(layer);
      opts[layerUid] = {
        headers: {
          ...layer.get('useBearerToken') ? {
            ...getBearerTokenHeader(client?.getKeycloak())
          } : undefined
        }
      };
    });

    return opts;
  };

  return (
    <div className='feature-info-panel'>
      <CoordinateInfo
        featureCount={10}
        map={map}
        queryLayers={queryLayers}
        resultRenderer={resultRenderer}
        fetchOpts={getFetchOpts()}
        {...restProps}
      />
    </div>
  );
};

export default FeatureInfo;
