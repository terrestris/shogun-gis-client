
import React from 'react';

import { render } from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import BasicNominatimSearch from './index';

describe('<BasicNominatimSearch />', () => {

  it('is defined', () => {
    expect(BasicNominatimSearch).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(
      <BasicNominatimSearch />,
      {
        wrapper: createReduxWrapper()
      });

    expect(container).toBeVisible();
  });
});
