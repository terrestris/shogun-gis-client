
import React from 'react';

import { render } from '@testing-library/react';

import { NominatimSearch } from '@terrestris/react-geo';

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
      <BasicNominatimSearch >
        <NominatimSearch
          countryCodes={''}
          allowClear={true}
          nominatimBaseUrl={'https://nominatim.terrestris.de/search.php?'}
          placeholder={'Nominatim.placeholder'}
          viewBox={''}
        />
      </BasicNominatimSearch>,
      {
        wrapper: createReduxWrapper()
      });

    expect(container).toBeVisible();
  });
});
