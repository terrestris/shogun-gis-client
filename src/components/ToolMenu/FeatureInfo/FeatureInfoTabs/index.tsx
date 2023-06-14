import React from 'react';

import {
  Tabs,
  TabsProps
} from 'antd';

import {
  FormInstance
} from 'antd/lib/form/Form';

import {
  Tab
} from 'rc-tabs/lib/interface';

import FeatureInfoForm from '../FeatureInfoForm';

export type FeatureInfoTabsProps = TabsProps & {
  tabConfig?: PropertyFormTabConfig<PropertyFormItemReadConfig>[];
  form: FormInstance;
};

export const FeatureInfoTabs: React.FC<FeatureInfoTabsProps> = ({
  tabConfig,
  form,
  ...passThroughProps
}) => {

  const items = tabConfig?.map((config, idx) => {
    return {
      label: config.title,
      key: `${idx}`,
      forceRender: true,
      children: (
        <FeatureInfoForm
          name={config.title}
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

export default FeatureInfoTabs;
