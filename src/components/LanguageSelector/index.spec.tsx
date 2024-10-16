import React from 'react';

import {
  act,
  screen,
  cleanup,
  fireEvent,
  render
} from '@testing-library/react';

import i18n from '../../i18n';

import { createReduxWrapper } from '../../utils/testUtils';

import LanguageSelect from '.';

jest.mock('../../i18n', () => ({
  changeLanguage: jest.fn(),
  t: (key: string) => key,
  language: 'en',
  on: jest.fn(),
  off: jest.fn(),
  init: jest.fn(),
  use: jest.fn().mockReturnThis(),
  resources: {},
  services: {
    resourceStore: {
      data: {
        en: { translation: {} },
        de: { translation: {} }
      }
    }
  }
}));

describe('<LanguageSelect />', () => {

  afterEach(() => {
    cleanup();
  });
  it('is defined', () => {
    expect(LanguageSelect).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(
      <LanguageSelect />
    );
    expect(container).toBeVisible();
  });

  it('can be rendered', async () => {
    render(
      <LanguageSelect />,
      {
        wrapper: createReduxWrapper()
      });

    const input = await screen.getByRole('combobox');
    act(() => {
      fireEvent.mouseDown(input);
    });

    const languageElem = await screen.getByText('DE');
    act(() => {
      fireEvent.click(languageElem);
    });

    await expect(i18n.changeLanguage).toHaveBeenCalled();
  });
});
