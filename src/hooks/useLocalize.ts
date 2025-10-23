import {
  useCallback
} from 'react';

import {
  useTranslation
} from 'react-i18next';

import {
  getLocalizedString
} from '@terrestris/shogun-util/dist/util/getLocalizedString';

export const useLocalize = () => {
  const {
    i18n
  } = useTranslation();

  const language = i18n.language;

  const localizeString = useCallback((value: string) => {
    return getLocalizedString(value, language);
  }, [language]);

  return localizeString;
};

export default useLocalize;
