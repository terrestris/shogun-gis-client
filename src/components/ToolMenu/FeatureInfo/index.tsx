import React, {
  useState,
  FC,
  JSX
} from 'react';

import {
  FormProps,
  Spin,
  Tabs
} from 'antd';

import {
  groupBy, mapValues
} from 'lodash';

import _isNil from 'lodash/isNil';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlLayerBase from 'ol/layer/Base';
import OlLayerImage from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlSourceVector from 'ol/source/Vector';

import { Tab } from 'rc-tabs/lib/interface';

import { useTranslation } from 'react-i18next';

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

type LayerIndex = {
  layerName: string;
  index?: number;
};

export const FeatureInfo: FC<FeatureInfoProps> = ({
  ...restProps
}): JSX.Element => {

  const {
    t
  } = useTranslation();

  const map = useMap();
  const client = useSHOGunAPIClient();
  const plugins = usePlugins();
  const dispatch = useAppDispatch();

  const [activeTabKey, setActiveTabKey] = useState<string | undefined>(undefined);
  const featureInfoEnabled = useAppSelector(state => state.featureInfo.enabled);

  const layerFilter = (layer: OlLayerBase) => {
    if (!layer.getVisible()) {
      return false;
    }
    if (!layer.get('hoverable')) {
      return false;
    }
    if (layer instanceof OlLayerImage && layer.getSource() instanceof OlSourceImageWMS) {
      return true;
    }
    if (layer instanceof OlLayerTile && layer.getSource() instanceof OlSourceTileWMS) {
      return true;
    }
    if (layer instanceof OlLayerVector && layer.getSource() instanceof OlSourceVector) {
      return true;
    }
    return false;
  };

  const changeActiveKey = (key: string) => {
    setActiveTabKey(key);
  };

  const findMapLayerIndex = (layerName: string) => {
    if (_isNil(map)) {
      return;
    }
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
    if (_isNil(map)) {
      return <></>;
    }
    const featureLayerResult = coordinateInfoState.features;
    const loading = coordinateInfoState.loading;

    if (featureLayerResult.length === 0) {
      return (
        <span className='usage-hint'>
          {t('FeatureInfo.usageHint')}
        </span>
      );
    }

    const items: (Tab & { index: number })[] = [];

    const groupedResultsByLayer = groupBy(featureLayerResult, 'featureType');

    Object.entries(groupedResultsByLayer).forEach(([layerName, featureLayerResults]) => {
      let pluginRendererAvailable = false;

      const features = featureLayerResults.map(flr => flr.feature);
      const allLayers = map.getAllLayers();
      const mapLayerIndex = findMapLayerIndex(layerName);
      if (_isNil(mapLayerIndex)) {
        return;
      }
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
                    features={features}
                    layerName={layerName}
                    layer={mapLayer}
                  /> :
                  <FeatureInfoPropertyGrid
                    features={features}
                    layerName={layerName}
                    layer={mapLayer}
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
          destroyOnHidden={true}
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
    const featureLayerResult = coordinateInfoState.features;

    const grouped = groupBy(featureLayerResult, 'featureType');
    const mapped = mapValues(grouped, g => g.map(flr => flr.feature));

    const serializedFeatures: SelectedFeatures = {};
    for (const [layerName, feats] of Object.entries(mapped)) {
      serializedFeatures[layerName] = new OlFormatGeoJSON().writeFeatures(feats);
    }

    const layers: LayerIndex[] = featureLayerResult
      .map(result => ({
        layerName: result.featureType,
        index: findMapLayerIndex(result.featureType)
      }))
      .sort((a, b) => {
        if (_isNil(a.index) || _isNil(b.index)) {
          return 0;
        }
        return b.index - a.index;
      });

    if (layers.length > 0) {
      setActiveTabKey(layers[0].layerName);
    }

    dispatch(setSelectedFeatures(serializedFeatures));
  };

  if (!map) {
    return <></>;
  }

  if (!featureInfoEnabled) {
    return <></>;
  }

  return (
    <div className='feature-info-panel'>
      <CoordinateInfo
        active={featureInfoEnabled}
        drillDown={true}
        featureCount={10}
        fetchOpts={getFetchOpts}
        layerFilter={layerFilter}
        onSuccess={onSuccess}
        resultRenderer={resultRenderer}
        {...restProps}
      />
    </div>
  );
};

export default FeatureInfo;
