import React from 'react';

import {
  cleanup,
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import UserChip from '../UserChip';

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
