import React from 'react';

import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';

import {
  show,
  hide
} from '../../store/layerDetailsModal';

import {
  store
} from '../../store/store';

import { createReduxWrapper } from '../../utils/testUtils';

import LayerDetailsModal from './index';

describe('<LayerDetailsModal />', () => {

  beforeEach(() => {
    store.dispatch(show());
  });

  afterEach(() => {
    store.dispatch(hide());
  });

  it('is defined', () => {
    expect(LayerDetailsModal).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<LayerDetailsModal />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

  it('can toggle its visibility', () => {
    render(<LayerDetailsModal />, {
      wrapper: createReduxWrapper()
    });

    const modal = screen.getByRole('dialog');

    expect(modal).not.toHaveStyle('display: none');

    const closeButton = screen.getByLabelText('Close', {
      selector: 'button'
    });

    fireEvent.click(closeButton);

    expect(modal).toHaveStyle('display: none');
  });
});
