import React from 'react';

import {
  Tabs
} from 'antd';

import {
  getUid
} from 'ol';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlLayerImage from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  Tab
} from 'rc-tabs/lib/interface';

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
  isWmsLayer,
  WmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppDispatch from '../../../hooks/useAppDispatch';
import usePlugins from '../../../hooks/usePlugins';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import {
  isFeatureInfoIntegration
} from '../../../plugin';

import {
  SelectedFeatures,
  setSelectedFeatures
} from '../../../store/selectedFeatures';

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
  const plugins = usePlugins();
  const dispatch = useAppDispatch();

  if (!map) {
    return <></>;
  }

  const queryLayers = MapUtil.getAllLayers(map)
    .filter((layer) => {
      if (!layer.get('hoverable') || !layer.getVisible()) {
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

  const resultRenderer = (coordinateInfoState: CoordinateInfoState) => {
    const features = coordinateInfoState.features;
    const loading = coordinateInfoState.loading;

    if (Object.keys(features).length === 0) {
      return (
        <span className='usage-hint'>
          {t('FeatureInfo.usageHint')}
        </span>
      );
    }

    const items: Tab[] = [];

    Object.keys(features).forEach(layerName => {
      let pluginRendererAvailable = false;

      const mapLayer = map.getAllLayers().find(l => {
        if (isWmsLayer(l)) {
          const source = (l as WmsLayer).getSource();
          const unqualifiedMapLayerName = getUnqualifiedLayerName(source?.getParams().LAYERS);
          const unqualifiedLayerName = getUnqualifiedLayerName(layerName);

          return unqualifiedLayerName === unqualifiedMapLayerName;
        }
        return false;
      });

      plugins.forEach(plugin => {
        if (isFeatureInfoIntegration(plugin.integration) &&
          ((Array.isArray(plugin.integration.layers) && plugin.integration.layers.includes(layerName)) ||
          !plugin.integration.layers)) {
          const {
            key,
            wrappedComponent: WrappedPluginComponent
          } = plugin;

          items.push({
            label: layerName,
            key: layerName,
            children: (
              <WrappedPluginComponent
                key={key}
              />
            )
          });

          pluginRendererAvailable = true;
        }
      });

      if (!pluginRendererAvailable) {
        items.push({
          label: mapLayer?.get('name') || layerName,
          key: layerName,
          children: (
            <div
              key={layerName}
            >
              <FeatureInfoPropertyGrid
                features={features[layerName]}
                layerName={layerName}
                loading={loading}
              />
            </div>
          )
        });
      }
    });

    return (
      <Tabs
        items={items}
      />
    );
  };

  const getUnqualifiedLayerName = (layerName: string) => {
    return layerName.split(':').length > 1 ?
      layerName.split(':')[1] :
      layerName.split(':')[0];
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

  const onSuccess = (coordinateInfoState: CoordinateInfoState) => {
    const features = coordinateInfoState.features;

    const serializedFeatures: SelectedFeatures = {};
    Object.entries(features).forEach(entry => {
      const layerName = entry[0];
      const selectedFeatures = entry[1];

      serializedFeatures[layerName] = new OlFormatGeoJSON().writeFeatures(selectedFeatures);
    });

    dispatch(setSelectedFeatures(serializedFeatures));
  };

  return (
    <div className='feature-info-panel'>
      <CoordinateInfo
        featureCount={10}
        map={map}
        queryLayers={queryLayers}
        resultRenderer={resultRenderer}
        fetchOpts={getFetchOpts()}
        onSuccess={onSuccess}
        {...restProps}
      />
    </div>
  );
};

export default FeatureInfo;
