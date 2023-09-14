import React from 'react';

import {
  Typography
} from 'antd';

import {
  isMoment
} from 'moment';

import {
  useTranslation
} from 'react-i18next';

import {
  PropertyFormItemReadConfig
} from '@terrestris/shogun-util/dist/model/Layer';

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

  if (typeof value === 'boolean') {
    displayText = value ? t('DisplayField.yesText') : t('DisplayField.noText');
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
