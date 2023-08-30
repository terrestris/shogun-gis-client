import React from 'react';

import {
  render
} from '@testing-library/react';

import { PropertyFormItemEditConfig } from '@terrestris/shogun-util/dist/model/Layer';

import { createReduxWrapper } from '../../utils/testUtils';

import FileUpload from '.';

describe('<FileUpload />', () => {

  it('is defined', () => {
    expect(FileUpload).toBeDefined();
  });

  it('can be rendered', () => {
    const fieldConfig = {
      component: 'UPLOAD',
      propertyName: 'documents',
      fieldProps: {
        type: 'DOCUMENT'
      }
    } as PropertyFormItemEditConfig;
    const {
      container
    } = render(<FileUpload fieldConfig={fieldConfig} />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });
});
