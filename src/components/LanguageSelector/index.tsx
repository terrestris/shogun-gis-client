import React from 'react';

import {
  Select
} from 'antd';

const {
  Option
} = Select;

import i18n from '../../i18n';

export const LanguageSelect = () => {
  const supportedLanguages = Object.keys(i18n.services.resourceStore.data);

  const onLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="languageSelect">
      <Select
        defaultValue={i18n.language || 'en'}
        onChange={onLanguageChange}
      >
        {
          supportedLanguages.map(supportedLanguage => {
            return (
              <Option
                key={supportedLanguage}
                value={supportedLanguage}
              >
                {supportedLanguage.toUpperCase()}
              </Option>
            );
          })
        }
      </Select>
    </div>
  );
};

export default LanguageSelect;
