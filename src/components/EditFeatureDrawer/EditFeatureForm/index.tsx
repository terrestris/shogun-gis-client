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

import {
  isMoment
} from 'moment';

import OlFeature from 'ol/Feature';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  PropertyFormItemEditDefaultConfig,
  PropertyFormItemEditReferenceTableConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import {
  setFormDirty
} from '../../../store/editFeature';
import DisplayField from '../../DisplayField';
import ReferenceTable from '../ReferenceTable';

import './index.less';

type FormDataType = Record<string, string | number | boolean>;

export type EditFeatureFormProps = FormProps & {
  editFeature: OlFeature;
  form: FormInstance;
  formConfig?: (PropertyFormItemEditDefaultConfig | PropertyFormItemEditReferenceTableConfig)[];
};

export const EditFeatureForm: React.FC<EditFeatureFormProps> = ({
  editFeature,
  form,
  formConfig,
  ...passThroughProps
}): JSX.Element => {

  const dispatch = useAppDispatch();

  const formDirty = useAppSelector(
    state => state.editFeature.formDirty
  );

  const createFormItem = (fieldCfg: (PropertyFormItemEditDefaultConfig | PropertyFormItemEditReferenceTableConfig)) => {
    let field: React.ReactNode;
    if (fieldCfg.readOnly) { // && fieldCfg.component !== 'REFERENCE_TABLE'
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
        // normalize={normalize}
        {...formItemProps}
      >
        {field}
      </Form.Item>
    );
  };

  // StoreValue
  // const normalize = (value: any) => {
  //   // if create then already moment
  //   console.log(value)
  //   // if () {

  //   // }

  //   return value;
  // };

  const createReadOnlyComponent = (fieldConfig: (PropertyFormItemEditDefaultConfig | PropertyFormItemEditReferenceTableConfig)) => {
    return (
      <DisplayField
        {...fieldConfig.fieldProps}
      />
    );
  };

  const createFieldComponent = (fieldCfg: (PropertyFormItemEditDefaultConfig | PropertyFormItemEditReferenceTableConfig)) => {
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
      case 'REFERENCE_TABLE':
        const referenceTableConfig = (fieldCfg as PropertyFormItemEditReferenceTableConfig);

        return (
          <ReferenceTable
            parentEditFeature={editFeature}
            layerId={referenceTableConfig.layerId}
            propertyName={referenceTableConfig.propertyName}
            referencePropertyName={referenceTableConfig.referencePropertyName}
            referencedLayerPropertyName={referenceTableConfig.referencedLayerPropertyName}
            readOnly={referenceTableConfig.readOnly}
            tablePropertyName={referenceTableConfig.tablePropertyName}
            {...referenceTableConfig?.fieldProps}
          />
        );
      default:
        Logger.error(`Component type "${fieldCfg?.component}" is not supported`);
        return <></>;
    }
  };

  const onValuesChange = async (changedValues: any) => {
    if (changedValues && !formDirty) {
      dispatch(setFormDirty(true));
    }

    Object.entries(changedValues).forEach(([key, value]) => {
      // Transform undefined to null values.
      if (value === undefined) {
        editFeature.set(key, null);
        return;
      }

      // Transform moments back to iso string.
      if (isMoment(value)) {
        editFeature.set(key, value.toISOString());
        return;
      }

      editFeature.set(key, value);
    });
  };

  return (
    <Form<FormDataType>
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
