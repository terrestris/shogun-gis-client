import React from 'react';

import {
  AutoComplete,
  Form,
  Input
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

import type {
  FormData
} from '..';

export type AttributionRowProps = {
  keyName: string | number;
  onChange?: (value: string) => void;
  options?: string[];
};

const AttributionRow: React.FC<AttributionRowProps> = ({
  keyName,
  onChange = () => {},
  options
}) => {

  const {
    t
  } = useTranslation();

  return (
    <>
      <Form.Item
        name={[keyName, 'name']}
        rules={[{
          required: true,
          message: t('AttributionRow.missingKey')
        }, ({ getFieldsValue }) => ({
          validator(_, value: string) {
            const fields: FormData = getFieldsValue(true);

            if (fields.fields) {
              const filtered = Object.entries(fields.fields).filter(([, val]) => val?.name === value);

              if (filtered.length > 1) {
                return Promise.reject(new Error(t('AttributionRow.keyInUse')));
              }
            }

            return Promise.resolve();
          }
        })]}
      >
        <AutoComplete
          placeholder={t('AttributionRow.keyPlaceholder')}
          onChange={(value) => {
            onChange(value);
          }}
          options={options?.map(o => ({ value: o }))}
        />
      </Form.Item>
      <Form.Item
        name={[keyName, 'value']}
        rules={[{
          required: true,
          message: t('AttributionRow.missingValue')
        }]}
      >
        <Input
          placeholder={t('AttributionRow.valuePlaceholder')}
          onChange={evt => {
            onChange(evt.target.value);
          }}
        />
      </Form.Item>
    </>
  );
};

export default AttributionRow;
