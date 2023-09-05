import React from 'react';

import {
  Form, Input
} from 'antd';

import './index.less';

export type AttributionRowProps = {
  keyName: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

const AttributionRow: React.FC<AttributionRowProps> = ({
  keyName,
  onChange
}) => {

  return (
    <>
      <Form.Item
        name={['fields', keyName, 'name']}
        rules={[{
          required: true,
          message: 'Missing Key'
        }, ({ getFieldsValue }) => ({
          validator(_, value) {
            const fields = getFieldsValue(true);
            // @ts-ignore
            const filtered = Object.entries(fields.fields).filter(([key, val]) => val.name === value);

            if (filtered.length > 1) {
              return Promise.reject(new Error('key already exists!'));
            }

            return Promise.resolve();
          }
        })]}
      >
        <Input
          placeholder="Key"
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item
        name={['fields', keyName, 'value']}
        rules={[{
          required: true,
          message: 'Missing Value'
        }]}
      >
        <Input
          placeholder="Value"
          onChange={onChange}
        />
      </Form.Item>
    </>
  );
};

export default AttributionRow;
