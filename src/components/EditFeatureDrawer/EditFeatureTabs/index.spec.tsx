import React from 'react';

import { render } from '@testing-library/react';

import { FormInstance } from 'antd';

import {
  PropertyFormItemEditConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureTabs from '.';

let mockTabConfig: PropertyFormTabConfig<PropertyFormItemEditConfig>[] | undefined;
let mockForm: FormInstance<any>;
let mockProperties: Record<string, any>;

describe('<EditFeatureTabs />', () => {

  it('is defined', () => {
    expect(EditFeatureTabs).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } =
      render(
        <EditFeatureTabs
          tabConfig={mockTabConfig}
          form={mockForm}
          initialValues={mockProperties}
        />,
        {
          wrapper: createReduxWrapper()
        });

    expect(container).toBeVisible();
  });
});
