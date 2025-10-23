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
import {
  UploadChangeParam,
  UploadFile
} from 'antd/lib/upload/interface';

import _debounce from 'lodash/debounce';
import _isNil from 'lodash/isNil';
import _isObject from 'lodash/isObject';

import Logger from '@terrestris/base-util/dist/Logger';
import ShogunFile from '@terrestris/shogun-util/dist/model/File';

import {
  PropertyFormItemEditConfig,
  PropertyFormItemEditReferenceTableConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import useLocalize from '../../../hooks/useLocalize';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';
import {
  setFormDirty
} from '../../../store/editFeature';
import DisplayField from '../../DisplayField';
import FileUpload from '../../FileUpload';
import ImageUpload from '../../ImageUpload';
import EditReferenceTable from '../EditReferenceTable';

import './index.less';

export type EditFeatureFormProps = FormProps & {
  form: FormInstance;
  formConfig?: PropertyFormItemEditConfig[];
  applyFormDirty?: boolean;
};

export function isFileConfig(val: any): val is UploadFile<ShogunFile> {
  if (_isNil(val)) {
    return false;
  }

  return val.uid &&
    !_isNil(val.name) &&
    !_isNil(val.type) &&
    !_isNil(val.uid) &&
    _isObject(val.response) &&
    !_isNil(val.response.id) &&
    !_isNil(val.response.fileUuid) &&
    !_isNil(val.response.fileName) &&
    !_isNil(val.response.fileType);
}

export const EditFeatureForm: React.FC<EditFeatureFormProps> = ({
  form,
  formConfig,
  applyFormDirty = true,
  ...passThroughProps
}): JSX.Element => {

  const client = useSHOGunAPIClient();
  const dispatch = useAppDispatch();
  const localize = useLocalize();

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
      /**
       * Setting `getValueFromEvent` to provide the proper file list to the antd Upload component.
       */
      formItemProps.getValueFromEvent = (e: UploadFile<ShogunFile>[] | UploadChangeParam<UploadFile<ShogunFile>>) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
    }

    return (
      <Form.Item
        key={fieldCfg.propertyName}
        name={fieldCfg.propertyName}
        label={localize(fieldCfg.displayName ?? fieldCfg.propertyName)}
        {...formItemProps}
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
    if (!client) {
      return;
    }

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
      case 'UPLOAD':
        if (fieldCfg?.fieldProps?.type === 'IMAGE') {
          return (
            <ImageUpload
              {...fieldCfg?.fieldProps}
            />
          );
        } else {
          return (
            <FileUpload
              {...fieldCfg?.fieldProps}
            />
          );
        }
      case 'REFERENCE_TABLE': {
        const referenceTableConfig = (fieldCfg as PropertyFormItemEditReferenceTableConfig);

        return (
          <EditReferenceTable
            key={referenceTableConfig.propertyName}
            tablePropertyName={referenceTableConfig.tablePropertyName}
            propertyName={referenceTableConfig.propertyName}
            formConfig={referenceTableConfig.editFormConfig}
            parentForm={form}
            {...referenceTableConfig.fieldProps}
          />
        );
      }
      default:
        Logger.error(`Component type "${fieldCfg?.component}" is not supported`);
        return <></>;
    }
  };

  const onValuesChange = async (changedValues: any) => {
    if (applyFormDirty && changedValues && !formDirty) {
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
