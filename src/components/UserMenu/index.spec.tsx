import React from 'react';

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import UserMenu from './index';

describe('<UserMenu />', () => {
  let menuElem: HTMLElement | null;

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
    render(
      <UserMenu />,
      {
        wrapper: createReduxWrapper()
      });

    const avatarElem = document.querySelector('.ant-avatar');
    expect(avatarElem).toBeVisible();
  });

  it('menu opens', async () => {
    render(
      <UserMenu />,
      {
        wrapper: createReduxWrapper()
      });

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
    render(
      <UserMenu />,
      {
        wrapper: createReduxWrapper()
      });

    const triggerElem = document.querySelector('.ant-dropdown-trigger');
    expect(triggerElem).toBeVisible();

    act(() => {
      fireEvent.doubleClick(triggerElem!);
    });

    await waitFor(() => expect(triggerElem).not.toHaveClass('ant-dropdown-open'));
  });
});
