import React from 'react';

import {
  render
} from '@testing-library/react';

import ImportDataModal from './index';

describe('<ImportDataModal />', () => {

  it('can be rendered', () => {
    const {
      container
    } = render(<ImportDataModal />);

    expect(container).toBeVisible();
  });

});
