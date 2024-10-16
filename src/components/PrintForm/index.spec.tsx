import React from 'react';

import {
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import PrintForm from './index';

describe('<PrintForm />', () => {

  it('is defined', () => {
    expect(PrintForm).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(
      <PrintForm
        active={false}
      />,
      {
        wrapper: createReduxWrapper()
      }
    );
    expect(container).toBeVisible();
  });

});
