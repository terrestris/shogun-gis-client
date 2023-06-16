import i18n, {
  InitOptions
} from 'i18next';
import {
  initReactI18next
} from 'react-i18next';

import resources from './translations';

export const initOpts: InitOptions = {
  resources,
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false
  },
  returnNull: false
};

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next);

i18n.options = initOpts;

export default i18n;
