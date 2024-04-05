import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react';

import {
  show,
  hide
} from '../../store/addLayerModal';

import {
  store
} from '../../store/store';

import { createReduxWrapper } from '../../utils/testUtils';

import AddLayerModal from './index';

describe('<AddLayerModal />', () => {

  beforeEach(() => {
    store.dispatch(show());
  });

  afterEach(() => {
    store.dispatch(hide());
  });

  it('is defined', () => {
    expect(AddLayerModal).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<AddLayerModal />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

  it('can toggle its visibility', () => {
    render(<AddLayerModal />, {
      wrapper: createReduxWrapper()
    });

    const modal = screen.getByRole('dialog');

    expect(modal).not.toHaveStyle('display: none');

    const closeButton = screen.getByLabelText('Close');

    fireEvent.click(closeButton);

    expect(modal).toHaveStyle('display: none');
  });
});
