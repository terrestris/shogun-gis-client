import React from 'react';

import {
  cleanup,
  render
} from '@testing-library/react';

import UserChip from '@terrestris/react-geo/dist/UserChip/UserChip';

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

  it('menu function is called', async () => {
    const mockFunction = jest.fn();
    render(
      <UserMenu >
        <UserChip
          userMenu={mockFunction()}
        />
      </UserMenu>,
      {
        wrapper: createReduxWrapper()
      });

    expect(mockFunction).toHaveBeenCalled();
  });
});
