import React from 'react';

import {
  Input,
  InputNumber,
  DatePicker,
  Select,
  Switch,
  Checkbox,
  Form,
  FormItemProps
} from 'antd';

import {
  FormProps,
  useForm
} from 'antd/lib/form/Form';

import {
  Feature
} from 'geojson';

import moment from 'moment';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import {
  PropertyFormItemEditConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import './index.less';

export type EditFeatureFormProps = FormProps & {
  formConfig?: PropertyFormItemEditConfig[];
  feature?: Feature | null;
};

export const EditFeatureForm: React.FC<EditFeatureFormProps> = ({
  formConfig,
  feature,
  ...passThroughProps
}): JSX.Element => {
  const [form] = useForm();
  const map = useMap();
  const {
    t
  } = useTranslation();

  if (!map) {
    return <></>;
  }

  const properties = {...feature?.properties};

  // properties.forEach(prop => {

  // });

  // form.setFieldsValue(properties);

  const createFormItem = (fieldCfg: PropertyFormItemEditConfig): React.ReactNode => {
    let field: React.ReactNode;
    if (fieldCfg.readOnly) {
      field = createReadOnlyComponent(fieldCfg);
    } else if (fieldCfg.component) {
      field = createFieldComponent(fieldCfg);
    } else {
      Logger.warn('FieldConfig is missing `readOnly`, `component` or `dataType` property.');
      field = (
        <Input
          key={fieldCfg.propertyName}
          placeholder=""
        />
      );
    }

    const formItemProps: FormItemProps = {
      rules: []
    };

    // when determining the status
    formItemProps.rules = [{
      required: fieldCfg.required
    }];

    if (fieldCfg.component === 'SWITCH' && !fieldCfg.readOnly) {
      formItemProps.valuePropName = 'checked';
    }

    return (
      <Form.Item
        key={fieldCfg.propertyName}
        name={fieldCfg.propertyName}
        // TODO Check if needed
        // normalize={fieldCfg.component ? getNormalizeFn(dataField) : undefined}
        // normalize={(val) => {
        //   console.log(val);
        // }}
        label={fieldCfg.displayName || fieldCfg.propertyName}
        {...formItemProps}
        {...fieldCfg.fieldProps}
      >
        {field}
      </Form.Item>
    );
  };

  const createReadOnlyComponent = (fieldConfig: PropertyFormItemEditConfig): React.ReactNode => {
    switch (fieldConfig.component) {
      case 'SWITCH':
        // return (
        //   <YesOrNoField
        //     {...fieldConfig.fieldProps}
        //   />
        // );
      case 'DATE':
        // return (
        //   <DisplayField
        //     format="date"
        //     {...fieldConfig.fieldProps}
        //   />
        // );
      default:
        return (
          <span
            {...fieldConfig.fieldProps}
          />
        );
    }
  };

  const createFieldComponent = (fieldCfg: PropertyFormItemEditConfig): React.ReactNode => {

    const key = fieldCfg.propertyName;
    const value = properties[fieldCfg.propertyName];

    form.setFieldValue(key, moment(value));

    switch (fieldCfg.component) {
      case 'CHECKBOX':
        return (
          <Checkbox
            checkedChildren="On"
            unCheckedChildren="Off"
            {...fieldCfg?.fieldProps}
          />
        );
      case 'DATE':
        return (
          <DatePicker
            {...fieldCfg?.fieldProps}
          />
        );
      case 'DISPLAY':
        return (
          <span {...fieldCfg?.fieldProps} />
        );
      case 'INPUT':
        return (
          <Input
            {...fieldCfg?.fieldProps}
          />
        );
      case 'NUMBER':
        return (
          <InputNumber
            {...fieldCfg?.fieldProps}
          />
        );
      case 'TEXTAREA':
        return (
          <Input.TextArea
            {...fieldCfg?.fieldProps}
          />
        );
      case 'SELECT':
        return (
          <Select
            {...fieldCfg?.fieldProps}
          />
        );
      case 'SWITCH':
        return (
          <Switch
            checkedChildren="On"
            unCheckedChildren="Off"
            {...fieldCfg?.fieldProps}
          />
        );
      case 'TEXTAREA':
        return (
          <Checkbox
            checkedChildren="On"
            unCheckedChildren="Off"
            {...fieldCfg?.fieldProps}
          />
        );
      case 'UPLOAD':
        return (
          <Checkbox
            checkedChildren="On"
            unCheckedChildren="Off"
            {...fieldCfg?.fieldProps}
          />
        );
      default:
        Logger.error(`Component type "${fieldCfg?.component}" is not supported`);
        return <></>;
    }
  };

  return (
    <Form
      className="edit-feature-form"
      form={form}
      // initialValues={{}}
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 20 }}
      {...passThroughProps}
    >
      { formConfig?.map(createFormItem) }
    </Form>
  );
};

export default EditFeatureForm;
