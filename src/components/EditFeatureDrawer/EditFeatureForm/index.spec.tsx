import React from 'react';

import { render } from '@testing-library/react';

import { Form } from 'antd';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureForm, {
  EditFeatureFormProps
} from '.';

describe('<EditFeatureForm />', () => {
  const EditFeatureFormWrapper = (props: Omit<EditFeatureFormProps, 'form'>) => {
    const [form] = Form.useForm();

    return (
      <EditFeatureForm
        {...props}
        form={form}
      />
    );
  };

  it('is defined', () => {
    expect(EditFeatureForm).toBeDefined();
  });

  it('can be rendered with form', () => {
    const {
      container
    } = render(
      <EditFeatureFormWrapper />,
      {
        wrapper: createReduxWrapper()
      });

    expect(container).toBeVisible();
    const formElem = container.querySelector('.edit-feature-form');
    expect(formElem).toBeVisible();
  });
});
