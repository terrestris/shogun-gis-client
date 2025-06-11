import React, {
  FC,
  JSX
} from 'react';

import {
  Checkbox,
  Typography,
  UploadFile
} from 'antd';

import dayjs, {
  Dayjs,
  isDayjs
} from 'dayjs';

import _isString from 'lodash/isString';
import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import ShogunFile from '@terrestris/shogun-util/dist/model/File';
import {
  PropertyFormItemReadConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import { isFileConfig } from '../EditFeatureDrawer/EditFeatureForm';
import FileUpload from '../FileUpload';
import ImageUpload from '../ImageUpload';
import ReferenceTable from '../ReferenceTable';

export type ValueType = string | number | boolean | Dayjs | Record<string, any>;
export type DataType = 'auto' | 'number' | 'boolean' | 'string' | 'date' | 'url' | 'json';

export type ReferenceConfig = {
  tablePropertyName?: string;
  featureInfoFormConfig?: PropertyFormItemReadConfig[];
};

export type DisplayFieldProps = {
  /**
   * The data type of the value to display. If set to 'auto' (default),
   * the component tries to guess the data type based on the value. Otherwise
   * the component will try to enforce the given data type.
   */
  dataType?: DataType;
  /**
   * A map of values to display instead of the actual value. The key is the
   * original value and the value is the value to display instead.
   */
  valueMap?: Record<string, ValueType>;
  format?: string;
  suffix?: string;
  value?: ValueType | ValueType[];
  label?: string;
  referenceConfig?: ReferenceConfig;
  /**
   * If set, it displays the given value instead of the URL.
   */
  urlDisplayValue?: string;
};

export const DisplayField: FC<DisplayFieldProps> = ({
  dataType = 'auto',
  valueMap,
  format = 'DD.MM.YYYY',
  suffix,
  value,
  referenceConfig,
  urlDisplayValue,
  ...passThroughProps
}): JSX.Element => {

  const {
    i18n
  } = useTranslation();

  let displayValue: React.ReactNode = '';

  // eslint-disable-next-line no-prototype-builtins
  if (value && typeof value === 'string' && valueMap?.hasOwnProperty(value)) {
    value = valueMap[value];
  }

  if (
    dataType === 'string' ||
    (dataType === 'auto' && typeof value === 'string')
  ) {
    if (value) {
      displayValue = value?.toString();
    }
  }

  if (
    dataType === 'boolean' ||
    (dataType === 'auto' && typeof value === 'boolean' || value === 'false' || value === 'true')
  ) {
    return (
      <Checkbox
        checked={value !== 'false' && value !== false}
        disabled
      />
    );
  }

  if (
    dataType === 'number' ||
    (dataType === 'auto' && Number.isFinite(value))
  ) {
    if (value) {
      displayValue = new Intl.NumberFormat(i18n.language, {
        useGrouping: false
      }).format(Number(value));
    }
  }

  if (
    dataType === 'date' ||
    (dataType === 'auto' && dayjs(`${value}`).isValid())
  ) {
    if (value && (isDayjs(value) || (_isString(value) && dayjs(`${value}`).isValid()))) {
      displayValue = dayjs(value).format(format);
    }
  }

  if (dataType === 'auto' && Array.isArray(value)) {
    displayValue = value.join(', ');
  }

  const isUrl = (candidate: string) => {
    const lowerCandidate = candidate.toLowerCase();
    const protocols = ['http://', 'https://', 'ftp://', 'mailto:'];
    return protocols.some(protocol => lowerCandidate.startsWith(protocol));
  };

  if (
    dataType === 'url' ||
    (dataType === 'auto' && _isString(value) && isUrl(value))
  ) {
    if (value) {
      displayValue = (
        <a
          href={value?.toString()}
          target="_blank"
          rel='noreferrer'
        >
          {urlDisplayValue ? urlDisplayValue : value?.toString()}
        </a>
      );
    }
  }

  const getUpload = (val: ValueType | ValueType[]): UploadFile<ShogunFile>[] | null => {
    if (!value) {
      return null;
    }
    let v = typeof val !== 'string' ? JSON.stringify(val) : val;

    try {
      v = JSON.parse(v);
    } catch (e) {
      Logger.trace(e);
      return null;
    }

    if (typeof v === 'object' && v !== null && isFileConfig(v[0])) {
      return v as UploadFile<ShogunFile>[];
    }
    return null;
  };

  const uploadValue = value && getUpload(value);

  if (dataType === 'auto' && uploadValue) {
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
      Logger.trace(e);
      return false;
    }

    return typeof v === 'object' && v !== null;
  };

  if (
    dataType === 'json' ||
    dataType === 'auto' && value && isJson(value)
  ) {
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
