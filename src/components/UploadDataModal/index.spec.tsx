import React from 'react';

import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';

import {
  store
} from '../../store/store';
import {
  show,
  hide
} from '../../store/uploadDataModal';

import {
  createReduxWrapper
} from '../../utils/testUtils';

import UploadDataModal from './index';

describe('<UploadDataModal />', () => {

  beforeEach(() => {
    store.dispatch(show());
  });

  afterEach(() => {
    store.dispatch(hide());
  });

  it('is defined', () => {
    expect(UploadDataModal).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<UploadDataModal />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

  it('can toggle its visibility', () => {
    render(<UploadDataModal />, {
      wrapper: createReduxWrapper()
    });

    const modal = screen.getByRole('dialog');

    expect(modal).not.toHaveStyle('display: none');

    const closeButton = screen.getByLabelText('Close');

    fireEvent.click(closeButton);

    expect(modal).toHaveStyle('display: none');
  });
});
