import React from 'react';

import {
  Checkbox,
  Typography,
  UploadFile
} from 'antd';

import {
  isMoment
} from 'moment';

import {
  useTranslation
} from 'react-i18next';

import ShogunFile from '@terrestris/shogun-util/dist/model/File';
import {
  PropertyFormItemReadConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import { isFileConfig } from '../EditFeatureDrawer/EditFeatureForm';
import FileUpload from '../FileUpload';
import ImageUpload from '../ImageUpload';
import ReferenceTable from '../ReferenceTable';

export type ValueType = string | number | boolean | moment.Moment | Record<string, any>;

export type ReferenceConfig = {
  tablePropertyName?: string;
  featureInfoFormConfig?: PropertyFormItemReadConfig[];
};

export type DisplayFieldProps = {
  format?: string;
  suffix?: string;
  value?: ValueType | ValueType[];
  label?: string;
  referenceConfig?: ReferenceConfig;
};

export const DisplayField: React.FC<DisplayFieldProps> = ({
  format = 'DD.MM.YYYY',
  suffix,
  value,
  label,
  referenceConfig,
  ...passThroughProps
}): JSX.Element => {

  const {
    t
  } = useTranslation();

  let displayText: string = '';

  if (typeof value === 'string') {
    displayText = value;
  }

  if (typeof value === 'boolean' || value === 'false' || value === 'true') {
    return (
      <Checkbox
        checked={value === true || value === 'true'}
        disabled
      />
    );
  }

  if (Number.isFinite(value)) {
    displayText = new Intl.NumberFormat().format(Number(value));
  }

  if (isMoment(value)) {
    displayText = value.format(format);
  }

  if (Array.isArray(value)) {
    displayText = value.join(', ');
  }

  const getUpload = (val: ValueType | ValueType[]): UploadFile<ShogunFile>[] | null => {
    if (!value) {
      return null;
    }
    let v = typeof val !== 'string' ? JSON.stringify(val) : val;

    try {
      v = JSON.parse(v);
    } catch (e) {
      return null;
    }

    if (typeof v === 'object' && v !== null && isFileConfig(v[0])) {
      return v as UploadFile<ShogunFile>[];
    }
    return null;
  };

  const uploadValue = value && getUpload(value);

  if (uploadValue) {
    if (uploadValue[0].response?.fileType?.startsWith('image/')) {
      return (
        <ImageUpload
          initialFileList={uploadValue}
          disabled
          readOnly
        />
      );
    } else {
      return (
        <FileUpload
          defaultFileList={uploadValue}
          disabled
          readOnly
        />
      );
    }
  }

  const isJson = (val: ValueType | ValueType[]): boolean => {
    let v = typeof val !== 'string' ? JSON.stringify(val) : val;

    try {
      v = JSON.parse(v);
    } catch (e) {
      return false;
    }

    return typeof v === 'object' && v !== null;
  };

  if (value && isJson(value)) {
    return (
      <ReferenceTable
        value={typeof value === 'string' ? value : JSON.stringify(value)}
        referenceConfig={referenceConfig}
      />
    );
  }

  return (
    <Typography.Text
      className="displayfield"
      {...passThroughProps}
    >
      {displayText}{displayText && suffix ? ` ${suffix}` : ''}
    </Typography.Text>
  );
};

export default DisplayField;
