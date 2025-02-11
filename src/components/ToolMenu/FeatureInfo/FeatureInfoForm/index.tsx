import React, {
  useEffect
} from 'react';

import {
  Form,
  FormProps
} from 'antd';

import {
  useForm
} from 'antd/lib/form/Form';

import OlFeature from 'ol/Feature';

import {
  PropertyFormItemReadConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import DisplayField from '../../../DisplayField';

import './index.less';

export type FeatureInfoFormProps = FormProps & {
  feature: OlFeature;
  formConfig?: PropertyFormItemReadConfig[];
};

export const FeatureInfoForm: React.FC<FeatureInfoFormProps> = ({
  feature,
  formConfig,
  ...passThroughProps
}): JSX.Element => {

  const [form] = useForm();

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(feature.getProperties());
  }, [feature, form]);

  const createFormItem = (fieldCfg: PropertyFormItemReadConfig) => {
    return (
      <Form.Item
        key={fieldCfg.propertyName}
        name={fieldCfg.propertyName}
        label={fieldCfg.displayName ?? fieldCfg.propertyName}
      >
        <DisplayField
          label={fieldCfg.displayName ?? fieldCfg.propertyName}
          {...fieldCfg.fieldProps}
        />
      </Form.Item>
    );
  };

  return (
    <Form
      className="feature-info-form"
      form={form}
      labelCol={{
        span: 8
      }}
      labelAlign="left"
      labelWrap
      {...passThroughProps}
    >
      {formConfig?.map(createFormItem)}
    </Form>
  );

};

export default FeatureInfoForm;
