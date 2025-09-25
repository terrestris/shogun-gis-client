import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import {
  TextDecoder,
  TextEncoder
} from 'node:util';
import {
  DecompressionStream
} from 'node:stream/web';

Object.assign(global, {
  TextDecoder,
  TextEncoder,
  DecompressionStream
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
