import React from 'react';

import { render } from '@testing-library/react';

import { Form } from 'antd';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureTabs, { EditFeatureTabsProps } from '.';

describe('<EditFeatureTabs />', () => {
  const EditFeatureTabsWrapper = (props: Omit<EditFeatureTabsProps, 'form'>) => {
    const [form] = Form.useForm();

    return (
      <EditFeatureTabs
        {...props}
        form={form}
      />
    );
  };

  it('is defined', () => {
    expect(EditFeatureTabs).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } =
      render(
        <EditFeatureTabsWrapper />,
        {
          wrapper: createReduxWrapper()
        });

    expect(container).toBeVisible();
  });
});
