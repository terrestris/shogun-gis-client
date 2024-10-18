import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  FormProps,
  Spin,
  Tabs
} from 'antd';

import {
  groupBy, mapValues
} from 'lodash';

import { Coordinate as OlCoordinate } from 'ol/coordinate';
import OlFeature from 'ol/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlLayerBase from 'ol/layer/Base';
import OlLayerImage from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import { Tab } from 'rc-tabs/lib/interface';

import { useTranslation } from 'react-i18next';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  isWmsLayer,
  WmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  CoordinateInfo,
  CoordinateInfoProps
} from '@terrestris/react-geo/dist/CoordinateInfo/CoordinateInfo';

import { CoordinateInfoResult } from '@terrestris/react-util/dist/Hooks/useCoordinateInfo/useCoordinateInfo';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import { getBearerTokenHeader } from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import usePlugins from '../../../hooks/usePlugins';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import { isFeatureInfoIntegration } from '../../../plugin';

import { CopyTools } from '../../../store/featureInfo';
import {
  SelectedFeatures, setSelectedFeatures
} from '../../../store/selectedFeatures';

import FeatureInfoTabs from './FeatureInfoTabs';

import FeatureInfoPropertyGrid from './FeaturePropertyGrid';

import './index.less';

export type FeatureInfoConfig = {
  enabled?: boolean;
  activeCopyTools?: CopyTools[];
};

export type FeatureInfoProps = FormProps & Partial<CoordinateInfoProps>;

export interface CoordinateInfoState {
  clickCoordinate: OlCoordinate | null;
  features: Record<string, OlFeature[]>;
  loading: boolean;
}

type LayerIndex = {
  layerName: string;
  index: number;
};

export const FeatureInfo: React.FC<FeatureInfoProps> = ({
  ...restProps
}): JSX.Element => {

  const {
    t
  } = useTranslation();

  const map = useMap();
  const client = useSHOGunAPIClient();
  const plugins = usePlugins();
  const dispatch = useAppDispatch();

  const [queryLayers, setQueryLayers] = useState<WmsLayer[]>([]);
  const [activeTabKey, setActiveTabKey] = useState<string | undefined>(undefined);
  const featureInfoEnabled = useAppSelector(state => state.featureInfo.enabled);

  const layerFilter = (layer: OlLayerBase) => {
    if (!layer.get('hoverable')) {
      return false;
    }
    if (layer instanceof OlLayerImage && layer.getSource() instanceof OlSourceImageWMS) {
      return true;
    }
    return layer instanceof OlLayerTile && layer.getSource() instanceof OlSourceTileWMS;
  };

  const updateQueryLayers = useCallback(() => {
    if (!map) {
      return;
    }

    const layerCandidates = MapUtil.getAllLayers(map, layerFilter) as WmsLayer[];
    setQueryLayers(layerCandidates.filter(l => l.getVisible()));
  }, [map]);

  useEffect(() => {
    if (!map) {
      return;
    }

    updateQueryLayers();

    const mapLayers = MapUtil.getAllLayers(map, layerFilter) as WmsLayer[];
    mapLayers.forEach(l => l.on('change:visible', updateQueryLayers));

    return () => {
      mapLayers.forEach(l => l.un('change:visible', updateQueryLayers));
    };

  }, [map, updateQueryLayers]);

  if (!map) {
    return <></>;
  }

  const changeActiveKey = (key: string) => {
    setActiveTabKey(key);
  };

  const findMapLayerIndex = (layerName: string) => {
    const allLayers = map.getAllLayers();

    return allLayers.findIndex(l => {
      if (isWmsLayer(l)) {
        const source = l.getSource();
        const unqualifiedMapLayerName = getUnqualifiedLayerName(source?.getParams().LAYERS);
        const unqualifiedLayerName = getUnqualifiedLayerName(layerName);

        return unqualifiedLayerName === unqualifiedMapLayerName;
      }
      return false;
    });
  };

  const resultRenderer = (coordinateInfoState: CoordinateInfoResult) => {
    const features = coordinateInfoState.features;
    const loading = coordinateInfoState.loading;

    if (Object.keys(features).length === 0) {
      return (
        <span className='usage-hint'>
          {t('FeatureInfo.usageHint')}
        </span>
      );
    }

    const items: (Tab & { index: number })[] = [];

    Object.keys(features).forEach(layerName => {
      let pluginRendererAvailable = false;

      const allLayers = map.getAllLayers();

      const mapLayerIndex = findMapLayerIndex(layerName);
      const mapLayer = allLayers[mapLayerIndex];

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
            index: mapLayerIndex,
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
        const featuresByFeatureType = groupBy(features, 'featureType')[layerName]
          .map(flr => flr.feature);
        items.push({
          label: mapLayer?.get('name') || layerName,
          index: mapLayerIndex,
          key: layerName,
          children: (
            <div
              key={layerName}
            >
              {
                mapLayer?.get('featureInfoFormConfig') ?
                  <FeatureInfoTabs
                    tabConfig={mapLayer?.get('featureInfoFormConfig')}
                    features={featuresByFeatureType}
                    layerName={layerName}
                    layer={mapLayer}
                  /> :
                  <FeatureInfoPropertyGrid
                    features={featuresByFeatureType}
                    layerName={layerName}
                  />
              }
            </div>
          )
        });
      }
    });

    items.sort((a, b) => b.index - a.index);

    return (
      <Spin
        spinning={loading}
      >
        <Tabs
          destroyInactiveTabPane={true}
          items={items}
          activeKey={activeTabKey}
          defaultActiveKey={items[0].key}
          onTabClick={changeActiveKey}
        />
      </Spin>
    );
  };

  const getUnqualifiedLayerName = (layerName: string) => {
    return layerName.split(':').length > 1 ?
      layerName.split(':')[1] :
      layerName.split(':')[0];
  };

  if (!featureInfoEnabled) {
    return <></>;
  }

  const getFetchOpts = (layer: WmsLayer) => {
    return {
      headers: {
        ...layer.get('useBearerToken') ? {
          ...getBearerTokenHeader(client?.getKeycloak())
        } : undefined
      }
    };
  };

  const onSuccess = (coordinateInfoState: CoordinateInfoResult) => {
    const features = coordinateInfoState.features;

    const grouped = groupBy(features, 'featureType');
    const mapped = mapValues(grouped, g => g.map(flr => flr.feature));

    const serializedFeatures: SelectedFeatures = {};
    for (const [layerName, feats] of Object.entries(mapped)) {
      serializedFeatures[layerName] = new OlFormatGeoJSON().writeFeatures(feats);
    }

    const layers: LayerIndex[] = Object.keys(features).map(layerName => ({
      layerName: layerName,
      index: findMapLayerIndex(layerName)
    })).sort((a, b) => b.index - a.index);

    if (layers.length > 0) {
      setActiveTabKey(layers[0].layerName);
    }

    dispatch(setSelectedFeatures(serializedFeatures));
  };

  return (
    <div className='feature-info-panel'>
      <CoordinateInfo
        featureCount={10}
        queryLayers={queryLayers}
        resultRenderer={resultRenderer}
        fetchOpts={getFetchOpts}
        onSuccess={onSuccess}
        {...restProps}
      />
    </div>
  );
};

export default FeatureInfo;
