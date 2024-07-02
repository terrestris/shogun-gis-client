import React from 'react';

import {
  cleanup,
  render,
  screen
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import CookieBanner from '.';

describe('<CookieBanner />', () => {
  let bannerElem: HTMLInputElement | null;

  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    const {
      container
    } = render(
      <CookieBanner />, {
        wrapper: createReduxWrapper()
      });

    bannerElem = container.querySelector('.cookie-container');
  });

  it('is defined', () => {
    expect(CookieBanner).toBeDefined();
  });

  it('can be rendered', () => {
    expect(bannerElem).toBeVisible();
    expect(screen.getByText('CookieBanner.info')).toBeInTheDocument();
  });

  it('is displayed at botton', () => {
    expect(bannerElem).toHaveStyle('bottom: 0px;');
  });
});
