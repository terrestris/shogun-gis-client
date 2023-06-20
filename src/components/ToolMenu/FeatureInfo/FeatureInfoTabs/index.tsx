import React, {
  useEffect,
  useState
} from 'react';

import {
  Tabs,
  TabsProps,
  Pagination
} from 'antd';

import OlFeature from 'ol/Feature';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';

import {
  Tab
} from 'rc-tabs/lib/interface';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import {
  PropertyFormItemReadConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useHighlightVectorLayer from '../../../../hooks/useHighlightVectorLayer';

import FeatureInfoForm from '../FeatureInfoForm';

export type FeatureInfoTabsProps = TabsProps & {
  features: OlFeature[];
  layerName: string;
  tabConfig?: PropertyFormTabConfig<PropertyFormItemReadConfig>[];
};

export const FeatureInfoTabs: React.FC<FeatureInfoTabsProps> = ({
  features,
  layerName,
  tabConfig,
  ...passThroughProps
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedFeature, setSelectedFeature] = useState<OlFeature>();

  const map = useMap();

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
    setCurrentPage(page);
    setSelectedFeature(features[page - 1]);
  };

  if (!tabConfig || !selectedFeature) {
    return <></>;
  }

  const items = tabConfig
    .filter(config => config !== undefined)
    .map((config, idx) => {
      return {
        label: config.title,
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

  return (
    <>
      <Pagination
        simple
        total={features.length}
        size="small"
        pageSize={1}
        current={currentPage}
        onChange={onChange}
      />
      <Tabs
        items={items}
        {...passThroughProps}
      />
    </>
  );
};

export default FeatureInfoTabs;
