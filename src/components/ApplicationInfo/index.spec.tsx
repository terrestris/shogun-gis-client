import React from 'react';

import {
  act,
  fireEvent,
  render,
  screen, waitFor
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import ApplicationInfo from './index';

describe('<ApplicationInfo />', () => {
  let modalElem: HTMLElement | null;

  beforeEach(async () => {
    const {
      container
    } = render(
      <ApplicationInfo
        opener={
          <span
            className="info-opener"
            aria-label='info-opener'
          >
            {'UserMenu.infoMenuTitle'}
          </span>
        }
      />,
      {
        wrapper: createReduxWrapper()
      });
    expect(container).toBeVisible();

    const infoButton: Element | null = container.querySelector('.info-opener');
    expect(infoButton).toBeVisible();

    act(() => {
      fireEvent.click(infoButton!);
    });

    modalElem = document.querySelector('.application-info');

    await waitFor(() => expect(modalElem).toBeVisible());
  });

  it('is defined', () => {
    expect(ApplicationInfo).not.toBeUndefined();
  });

  it('logo is visible', async () => {
    const logoElem = document.querySelector('.logo');
    await expect(logoElem).toBeVisible();
  });

  it('version is visible', () => {
    const versionTitleElem = screen.getByText('ApplicationInfo.clientVersionTitle');

    expect(versionTitleElem).toBeVisible();

    const version = global.PROJECT_VERSION;

    const versionElem = screen.getByText(version.toString());

    expect(versionElem).toBeVisible();
  });
});
