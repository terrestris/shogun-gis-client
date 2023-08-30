import React from 'react';

import {
  render
} from '@testing-library/react';

import { PropertyFormItemEditConfig } from '@terrestris/shogun-util/dist/model/Layer';

import { createReduxWrapper } from '../../utils/testUtils';

import ImageUpload from '.';

describe('<ImageUpload />', () => {

  it('is defined', () => {
    expect(ImageUpload).toBeDefined();
  });

  it('can be rendered', () => {
    const fieldConfig = {
      component: 'UPLOAD',
      propertyName: 'documents',
      fieldProps: {
        type: 'IMAGE'
      }
    } as PropertyFormItemEditConfig;
    const {
      container
    } = render(<ImageUpload fieldConfig={fieldConfig} />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });
});
