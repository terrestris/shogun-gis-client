/*
 * Copyright (c) 2022-present terrestris GmbH & Co. KG.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';

import {
  Select
} from 'antd';

import i18n from '../../i18n';

export const LanguageSelect = () => {
  const {
    Option
  } = Select;

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
          supportedLanguages.map((supportedLanguage) => {
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
