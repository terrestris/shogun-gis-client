import React from 'react';

import {
  Form, Input
} from 'antd';

import './index.less';
import { useTranslation } from 'react-i18next';

export type AttributionRowProps = {
  keyName: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

export type InputFields = {
  [fields: string]: {
    name: string;
    value: any;
  };
};

const AttributionRow: React.FC<AttributionRowProps> = ({
  keyName,
  onChange
}) => {

  const {
    t
  } = useTranslation();

  return (
    <>
      <Form.Item
        name={['fields', keyName, 'name']}
        rules={[{
          required: true,
          message: t('AttributionRow.missingKey')
        }, ({ getFieldsValue }) => ({
          validator(_, value: string) {
            const fields: InputFields = getFieldsValue(true);
            const filtered = Object.entries(fields.fields).filter(([key, val]) => val.name === value);

            if (filtered.length > 1) {
              return Promise.reject(new Error(t('AttributionRow.keyInUse')));
            }

            return Promise.resolve();
          }
        })]}
      >
        <Input
          placeholder={t('AttributionRow.keyPlaceholder')}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item
        name={['fields', keyName, 'value']}
        rules={[{
          required: true,
          message: t('AttributionRow.missingValue')
        }]}
      >
        <Input
          placeholder={t('AttributionRow.valuePlaceholder')}
          onChange={onChange}
        />
      </Form.Item>
    </>
  );
};

export default AttributionRow;
