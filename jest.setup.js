import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import {
  TextDecoder,
  TextEncoder
} from 'util';

Object.assign(global, {
  TextDecoder,
  TextEncoder
});

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  }),
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn()
  }
}));

