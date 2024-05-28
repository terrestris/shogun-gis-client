import React from 'react';

import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import UserMenu from './index';

describe('<UserMenu />', () => {
  let menuElem: HTMLElement | null;

  afterEach(cleanup);

  beforeEach(async () => {
    const {
      container
    } = render(
      <UserMenu />,
      {
        wrapper: createReduxWrapper()
      });
    expect(container).toBeVisible();

    menuElem = container.querySelector('.react-geo-userchip');
  });

  it('is defined', () => {
    expect(UserMenu).not.toBeUndefined();
  });

  it('can be rendered', () => {
    expect(menuElem).toBeVisible();
  });

  it('avatar is visible', () => {
    const avatarElem = document.querySelector('.ant-avatar');
    expect(avatarElem).toBeVisible();
  });

  it('menu opens', async () => {
    const triggerElem = document.querySelector('.ant-dropdown-trigger');
    expect(triggerElem).toBeVisible();

    act(() => {
      fireEvent.click(triggerElem!);
    });

    await waitFor(() => expect(triggerElem).toHaveClass('ant-dropdown-open'));

    const dropdownElem = await waitFor(() => screen.getByRole('menu'));
    expect(dropdownElem).not.toBeUndefined();

    const menuItemElem = await waitFor(() => screen.getByRole('menuitem'));
    expect(menuItemElem).not.toBeUndefined();
  });

  it('menu closes', async () => {
    const triggerElem = document.querySelector('.ant-dropdown-trigger');
    expect(triggerElem).toBeVisible();

    act(() => {
      fireEvent.doubleClick(triggerElem!);
    });

    await waitFor(() => expect(triggerElem).not.toHaveClass('ant-dropdown-open'));
  });
});
