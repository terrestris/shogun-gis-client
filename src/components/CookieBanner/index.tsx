import React from 'react';

import { CookieConsent } from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

import usePlugins from '../../hooks/usePlugins';
import { isCookieConsentIntegration } from '../../plugin';

import './index.less';

export const CookieBanner = () => {
  const plugins = usePlugins();

  const { t } = useTranslation();

  const getPlugin = () => {
    let cookiePlugin: React.ReactElement | null = null;

    plugins.forEach(plugin => {
      if (isCookieConsentIntegration(plugin.integration)) {
        const {
          key, wrappedComponent: WrappedPluginComponent
        } = plugin;

        cookiePlugin = <WrappedPluginComponent key={key} />;
      }
    });

    return cookiePlugin;
  };

  return (
    <div className="CookieBanner">
      <CookieConsent
        disableStyles={true}
        key="default-cookie-consent"
        location="bottom"
        buttonText={t('CookieBanner.button')}
        cookieName="SHOGun-Session-Cookie"
        buttonClasses="cookie-button"
        containerClasses="cookie-container"
        contentClasses="cookie-content"
        expires={150}
      >
        {getPlugin() ? getPlugin() : t('CookieBanner.info')}
      </CookieConsent>
      ;
    </div>
  );
};

export default CookieBanner;
