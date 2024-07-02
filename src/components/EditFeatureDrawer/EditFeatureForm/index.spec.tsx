import React from 'react';

import { render } from '@testing-library/react';

import { FormInstance } from 'antd';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureForm from '.';

describe('<EditFeatureForm />', () => {
  let mockedForm: FormInstance<any>;

  it('is defined', () => {
    expect(EditFeatureForm).toBeDefined();
  });

  it('can be rendered with form', () => {
    const {
      container
    } = render(
      <EditFeatureForm
        form={mockedForm}
      />,
      {
        wrapper: createReduxWrapper()
      });

    expect(container).toBeVisible();
    const formElem = container.querySelector('.edit-feature-form');
    expect(formElem).toBeVisible();
  });
});
