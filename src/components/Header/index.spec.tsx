import React from 'react';

import {
  render,
  screen
} from '@testing-library/react';

import { setLogoPath } from '../../store/logoPath';
import { store } from '../../store/store';
import { setTitle } from '../../store/title';
import { createReduxWrapper } from '../../utils/testUtils';

import Header from './index';

jest.mock('clientConfig', () => ({
  keycloak: {
    enabled: true
  }
}));

describe('<Header />', () => {

  it('is defined', () => {
    expect(Header).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<Header />, {
      wrapper: createReduxWrapper()
    });
    expect(container).toBeVisible();
  });

  it('logo is rendered', () => {
    store.dispatch(setLogoPath('test-path'));

    render(<Header />, {
      wrapper: createReduxWrapper()
    });

    const logoElem = screen.getByLabelText('logo');

    expect(logoElem).toBeVisible();
    expect(logoElem).toHaveAttribute('src', 'test-path');
  });

  it('title is visible', () => {
    store.dispatch(setTitle('test-title'));

    const {
      container
    } = render(<Header />, {
      wrapper: createReduxWrapper()
    });
    expect(container).toBeVisible();

    const titleElem = container.querySelector('.title');

    expect(titleElem).toHaveTextContent('test-title');
  });

  it('search field is rendered', () => {
    render(<Header />, {
      wrapper: createReduxWrapper()
    });

    const searchElem = screen.getByLabelText('search-field');

    expect(searchElem).toBeVisible();
  });

  it('user menu is rendered', () => {
    render(<Header />, {
      wrapper: createReduxWrapper()
    });

    const menuElem = screen.getByLabelText('user-menu');

    expect(menuElem).toBeVisible();
  });
});
