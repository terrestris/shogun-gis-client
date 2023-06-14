import React from 'react';

import {
  Form,
  FormProps,
  FormInstance
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

import {
  PropertyFormItemEditConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import DisplayField from '../DisplayField';

// import './index.less';

export type FeatureInfoFormProps = FormProps & {
  formConfig?: PropertyFormItemEditConfig[];
  form: FormInstance;
};

export const FeatureInfoForm: React.FC<FeatureInfoFormProps> = ({
  formConfig,
  form,
  ...passThroughProps
}): JSX.Element => {

  const {
    t
  } = useTranslation();

  const createFormItem = (fieldCfg: any) => {
    let field: React.ReactNode;

    const createReadOnlyComponent = (fieldConfig: any) => {
      return (
        <DisplayField
          {...fieldConfig.fieldProps}
        />
      );
    };

    field = createReadOnlyComponent(fieldCfg);

    return (
      <Form.Item
        key={fieldCfg.propertyName}
        name={fieldCfg.propertyName}
        label={fieldCfg.displayName || fieldCfg.propertyName}
        // {...formItemProps}
        {...fieldCfg.fieldProps}
      >
        {field}
      </Form.Item>
    );
  };

  return (
    <Form
      className="feature-info-form"
      form={form}
      labelCol={{
        span: 6
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
