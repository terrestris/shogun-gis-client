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
  FormInstance,
  FormProps
} from 'antd/lib/form/Form';

import _debounce from 'lodash/debounce';

import Logger from '@terrestris/base-util/dist/Logger';
import {
  PropertyFormItemEditConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import {
  setFormDirty
} from '../../../store/editFeature';
import DisplayField from '../../DisplayField';

import './index.less';

export type EditFeatureFormProps = FormProps & {
  formConfig?: PropertyFormItemEditConfig[];
  form: FormInstance;
};

export const EditFeatureForm: React.FC<EditFeatureFormProps> = ({
  formConfig,
  form,
  ...passThroughProps
}): JSX.Element => {

  const dispatch = useAppDispatch();

  const formDirty = useAppSelector(
    state => state.editFeature.formDirty
  );

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

    formItemProps.rules = [{
      required: fieldCfg.required
    }];

    if ((fieldCfg.component === 'SWITCH' || fieldCfg.component === 'CHECKBOX') && !fieldCfg.readOnly) {
      formItemProps.valuePropName = 'checked';
    }

    if (fieldCfg.component === 'UPLOAD' && !fieldCfg.readOnly) {
      formItemProps.valuePropName = 'fileList';
    }

    return (
      <Form.Item
        key={fieldCfg.propertyName}
        name={fieldCfg.propertyName}
        label={fieldCfg.displayName || fieldCfg.propertyName}
        {...formItemProps}
        {...fieldCfg.fieldProps}
      >
        {field}
      </Form.Item>
    );
  };

  const createReadOnlyComponent = (fieldConfig: PropertyFormItemEditConfig): React.ReactNode => {
    return (
      <DisplayField
        {...fieldConfig.fieldProps}
      />
    );
  };

  const createFieldComponent = (fieldCfg: PropertyFormItemEditConfig): React.ReactNode => {
    switch (fieldCfg.component) {
      case 'CHECKBOX':
        return (
          <Checkbox
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
      case 'SELECT':
        return (
          <Select
            allowClear={true}
            {...fieldCfg?.fieldProps}
          />
        );
      case 'SWITCH':
        return (
          <Switch
            {...fieldCfg?.fieldProps}
          />
        );
      case 'TEXTAREA':
        return (
          <Input.TextArea
            {...fieldCfg?.fieldProps}
          />
        );
      // TODO Before we allow uploading we should check all side effects.
      // case 'UPLOAD':
      //   return (
      //     <Upload
      //       {...fieldCfg?.fieldProps}
      //     >
      //       <Button>Upload</Button>
      //     </Upload>
      //   );
      default:
        Logger.error(`Component type "${fieldCfg?.component}" is not supported`);
        return <></>;
    }
  };

  const onValuesChange = async (changedValues: any) => {
    if (changedValues && !formDirty) {
      dispatch(setFormDirty(true));
    }
  };

  return (
    <Form
      className="edit-feature-form"
      form={form}
      labelCol={{
        span: 8
      }}
      labelAlign="left"
      labelWrap
      onValuesChange={_debounce(onValuesChange, 250)}
      {...passThroughProps}
    >
      { formConfig?.map(createFormItem) }
    </Form>
  );
};

export default EditFeatureForm;
