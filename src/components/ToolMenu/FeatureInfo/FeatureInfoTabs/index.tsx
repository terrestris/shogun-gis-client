import React, {
  useEffect,
  useState
} from 'react';

import {
  Tabs,
  TabsProps
} from 'antd';

import _isNil from 'lodash/isNil';
import OlFeature from 'ol/Feature';
import OlLayer from 'ol/layer/Layer';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';

import {
  Tab
} from 'rc-tabs/lib/interface';

import {
  MapUtil
} from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import {
  PropertyFormItemReadConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useHighlightVectorLayer from '../../../../hooks/useHighlightVectorLayer';
import useLocalize from '../../../../hooks/useLocalize';

import FeatureInfoForm from '../FeatureInfoForm';
import PaginationToolbar from '../PaginationToolbar';

export type FeatureInfoTabsProps = TabsProps & {
  features: OlFeature[];
  layerName: string;
  tabConfig?: PropertyFormTabConfig<PropertyFormItemReadConfig>[];
  layer: OlLayer;
};

export const FeatureInfoTabs: React.FC<FeatureInfoTabsProps> = ({
  features,
  layerName,
  layer,
  tabConfig,
  ...passThroughProps
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedFeature, setSelectedFeature] = useState<OlFeature>();
  const [activeKey, setActiveKey] = useState<string>('0');

  const map = useMap();

  const localize = useLocalize();

  const vectorLayerName = `selection-layer-${layerName}`;

  useHighlightVectorLayer({
    layerName: vectorLayerName
  });

  useEffect(() => {
    if (!map) {
      return;
    }

    const vectorLayer = MapUtil.getLayerByName(map, vectorLayerName) as OlLayerVector<OlSourceVector>;

    if (!vectorLayer) {
      return;
    }

    vectorLayer.getSource()?.clear();
    setCurrentPage(1);

    if (features.length > 0) {
      setActiveKey('0');
      setSelectedFeature(features[0]);
    }
  }, [features, map, vectorLayerName]);

  useEffect(() => {
    if (!selectedFeature || !map) {
      return;
    }

    const vectorLayer = MapUtil.getLayerByName(map, vectorLayerName) as OlLayerVector<OlSourceVector>;

    if (!vectorLayer) {
      return;
    }

    vectorLayer.getSource()?.clear();
    vectorLayer.getSource()?.addFeature(selectedFeature);
  }, [selectedFeature, map, vectorLayerName]);

  const onChange = (page: number) => {
    if (page < 1) {
      return;
    }

    setCurrentPage(page);
    setSelectedFeature(features[page - 1]);
  };

  if (!tabConfig || !selectedFeature) {
    return <></>;
  }

  const exportFilter = (propertyName: string) => {
    let match = false;

    for (const conf of tabConfig) {
      if (!conf.children) {
        continue;
      }

      for (const child of conf.children) {
        if (child.propertyName === propertyName) {
          match = true;
          break;
        }
      }
    }

    return match;
  };

  const items = tabConfig
    .filter(config => !_isNil(config))
    .map((config, idx) => {
      return {
        label: localize(config.title),
        key: `${idx}`,
        forceRender: true,
        children: (
          <FeatureInfoForm
            name={config.title}
            feature={selectedFeature}
            formConfig={config.children}
          />
        )
      } as Tab;
    });

  const changeKey = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div
      className="feature-info-tabs"
    >
      <PaginationToolbar
        current={currentPage}
        exportFilter={exportFilter}
        features={features}
        layer={layer}
        onChange={onChange}
        selectedFeature={selectedFeature}
      />
      <Tabs
        items={items}
        activeKey={activeKey}
        defaultActiveKey='0'
        onTabClick={changeKey}
        {...passThroughProps}
      />
    </div>
  );
};

export default FeatureInfoTabs;
