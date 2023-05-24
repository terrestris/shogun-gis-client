import React from 'react';

import {
  Tabs,
  TabsProps
} from 'antd';

import {
  FormInstance
} from 'antd/lib/form/Form';

import {
  Feature
} from 'geojson';

import {
  Tab
} from 'rc-tabs/lib/interface';

import {
  PropertyFormItemEditConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import EditFeatureForm from '../EditFeatureForm';

export type EditFeatureTabsProps = TabsProps & {
  tabConfig?: PropertyFormTabConfig<PropertyFormItemEditConfig>[];
  feature?: Feature | null;
  form: FormInstance;
};

export const EditFeatureTabs: React.FC<EditFeatureTabsProps> = ({
  tabConfig,
  feature,
  form,
  ...passThroughProps
}) => {

  const items = tabConfig?.map((config, idx) => {
    return {
      label: config.title,
      key: `${idx}`,
      children: (
        <EditFeatureForm
          form={form}
          formConfig={config.children}
        />
      )
    } as Tab;
  });

  return (
    <Tabs
      items={items}
      {...passThroughProps}
    />
  );
};

export default EditFeatureTabs;
