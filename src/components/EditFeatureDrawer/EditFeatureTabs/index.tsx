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

import {
  PropertyFormItemEditConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useLocalize from '../../../hooks/useLocalize';

import EditFeatureForm from '../EditFeatureForm';

export type EditFeatureTabsProps = TabsProps & {
  tabConfig?: PropertyFormTabConfig<PropertyFormItemEditConfig>[];
  form: FormInstance;
  initialValues?: Record<string, any>;
};

export const EditFeatureTabs: React.FC<EditFeatureTabsProps> = ({
  tabConfig,
  form,
  initialValues,
  ...passThroughProps
}) => {
  const localize = useLocalize();

  const items = tabConfig?.map((config, idx) => {
    return {
      label: localize(config.title),
      key: `${idx}`,
      forceRender: true,
      children: (
        <EditFeatureForm
          name={config.title}
          form={form}
          initialValues={initialValues}
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
