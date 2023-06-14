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

import {
  Tab
} from 'rc-tabs/lib/interface';

import {
  PropertyFormItemReadConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import FeatureInfoForm from '../FeatureInfoForm';

export type FeatureInfoTabsProps = TabsProps & {
  tabConfig?: PropertyFormTabConfig<PropertyFormItemReadConfig>[];
  features: OlFeature[];
};

export const FeatureInfoTabs: React.FC<FeatureInfoTabsProps> = ({
  tabConfig,
  features,
  ...passThroughProps
}) => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedFeature, setSelectedFeature] = useState<OlFeature>();

  useEffect(() => {
    setCurrentPage(1);
    setSelectedFeature(features[0]);
  }, [features]);

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
