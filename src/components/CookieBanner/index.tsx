import React from 'react';

import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

import './index.less';

export const CookieBanner = () => {

  const {
    t
  } = useTranslation();

  return (
    <CookieConsent
      location="bottom"
      buttonText={t('CookieBanner.button')}
      cookieName="SHOGun-Session-Cookie"
      buttonClasses='cookie-button'
      containerClasses='cookie-container'
      contentClasses='cookie-content'
      expires={150}
    >
      {t('CookieBanner.info')}
    </CookieConsent>
  );
};

export default CookieBanner;
