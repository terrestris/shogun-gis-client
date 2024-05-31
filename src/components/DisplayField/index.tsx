import React from 'react';

import {
  Checkbox,
  Typography,
  UploadFile
} from 'antd';

import isString from 'lodash/isString';
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
    i18n
  } = useTranslation();

  let displayValue: React.ReactNode = '';

  if (typeof value === 'string') {
    displayValue = value;
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
    displayValue = new Intl.NumberFormat(i18n.language, {
      useGrouping: false
    }).format(Number(value));
  }

  if (isMoment(value)) {
    displayValue = value.format(format);
  }

  if (Array.isArray(value)) {
    displayValue = value.join(', ');
  }

  const isUrl = (candidate: string) => {
    const lowerCandidate = candidate.toLowerCase();
    const protocols = ['http://', 'https://', 'ftp://', 'file://', 'mailto:'];
    if (protocols.some(protocol => lowerCandidate.startsWith(protocol))) {
      return true;
    }
    // windows (network) paths
    if (candidate.startsWith('\\\\')) {
      return true;
    }
    if (candidate.match(/^[a-zA-Z]:\\/)) {
      return true;
    }
    return false;
  };

  if (isString(value) && isUrl(value)) {
    displayValue = (
      <a
        href={value}
        target="_blank"
        rel='noreferrer'
      >
        {value}
      </a>
    );
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

  if (suffix) {
    displayValue = <>{displayValue} {suffix}</>;
  }

  return (
    <Typography.Text
      className="displayfield"
      {...passThroughProps}
    >
      {displayValue}
    </Typography.Text>
  );
};

export default DisplayField;
