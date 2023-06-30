import React from 'react';

import {
  Tabs,
  TabsProps
} from 'antd';

import {
  FormInstance
} from 'antd/lib/form/Form';

import OlFeature from 'ol/Feature';

import {
  Tab
} from 'rc-tabs/lib/interface';

import {
  WmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import {
  PropertyFormItemEditConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import EditFeatureForm from '../EditFeatureForm';

export type EditFeatureTabsProps = TabsProps & {
  editLayer: WmsLayer;
  editFeature: OlFeature;
  form: FormInstance;
  tabConfig?: PropertyFormTabConfig<PropertyFormItemEditConfig>[];
  initialValues?: Record<string, any>;
};

export const EditFeatureTabs: React.FC<EditFeatureTabsProps> = ({
  editLayer,
  editFeature,
  tabConfig,
  form,
  initialValues,
  ...passThroughProps
}) => {

  const items = tabConfig?.map((config, idx) => {
    return {
      label: config.title,
      key: `${idx}`,
      forceRender: true,
      children: (
        <EditFeatureForm
          name={config.title}
          form={form}
          editLayer={editLayer}
          editFeature={editFeature}
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
