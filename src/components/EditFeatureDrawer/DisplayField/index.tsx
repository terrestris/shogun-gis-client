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

export type ValueType = string | number | boolean | moment.Moment;

export type DisplayFieldProps = {
  format?: string;
  suffix?: string;
  value?: ValueType | ValueType[];
};

export const DisplayField: React.FC<DisplayFieldProps> = ({
  format = 'DD.MM.YYYY',
  suffix,
  value,
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
