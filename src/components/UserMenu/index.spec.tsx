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

  afterEach(() => {
    cleanup();
  });

  it('can be rendered', async () => {
    const {
      container
    } = render(
      <UserMenu />,
      {
        wrapper: createReduxWrapper()
      });
    expect(container).toBeVisible();
  });

  it('is defined', () => {
    expect(UserMenu).not.toBeUndefined();
  });

  it('avatar is visible', async () => {
    const {
      container
    } = render(
      <UserMenu />,
      {
        wrapper: createReduxWrapper()
      });

    const avatarElem: HTMLElement | null = container.querySelector('.userimage');
    expect(avatarElem).toBeVisible();
  });

  it('menu opens', async () => {
    render(
      <UserMenu />,
      {
        wrapper: createReduxWrapper()
      });

    const triggerElem: HTMLElement | null = document.querySelector('.react-geo-userchip');

    act(() => {
      fireEvent.click(triggerElem!);
    });
    await waitFor(() => expect(triggerElem).toHaveClass('ant-dropdown-open'));

    const dropdownElem: HTMLElement | null = await waitFor(() => screen.getByRole('menu'));
    expect(dropdownElem).not.toBeUndefined();

    const menuItemElem: HTMLElement | null = await waitFor(() => screen.getByRole('menuitem'));
    expect(menuItemElem).not.toBeUndefined();
  });

  it('menu closes', async () => {
    render(
      <UserMenu />,
      {
        wrapper: createReduxWrapper()
      });

    const triggerElem: HTMLElement | null = document.querySelector('.react-geo-userchip');

    act(() => {
      fireEvent.doubleClick(triggerElem!);
    });

    await waitFor(() => expect(triggerElem).not.toHaveClass('ant-dropdown-open'));
  });
});
