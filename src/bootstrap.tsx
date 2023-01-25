import React from 'react';

import {
  Alert,
  ConfigProvider
} from 'antd';

import deDE from 'antd/lib/locale/de_DE';
import enGB from 'antd/lib/locale/en_GB';

import ClientConfiguration from 'clientConfig';

import {
  render
} from 'react-dom';

import {
  Provider
} from 'react-redux';

import Logger from '@terrestris/base-util/dist/Logger';

import MapContext from '@terrestris/react-geo/dist/Context/MapContext/MapContext';

import SHOGunAPIClient from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

const App = React.lazy(() => import('./App'));

import Initializer from './appContext/Initializer';

import {
  PluginProvider
} from './context/PluginContext';
import {
  SHOGunAPIClientProvider
} from './context/SHOGunAPIClientContext';

import i18n from './i18n';

import {
  loadPlugins
} from './plugin';

import {
  store
} from './store/store';

import './index.less';

const client = new SHOGunAPIClient({
  url: ClientConfiguration.shogunBase || '/'
});

const initializer = new Initializer({
  client
});

const getConfigLang = (lang: string) => {
  switch (lang) {
    case 'en':
      return enGB;
    case 'de':
      return deDE;
    default:
      return enGB;
  }
};

const renderApp = async () => {
  try {
    const {
      map
    } = await initializer.init();

    const plugins = await loadPlugins(client, map);

    render(
      <React.StrictMode>
        <React.Suspense fallback={<span></span>}>
          <SHOGunAPIClientProvider client={client}>
            <PluginProvider plugins={plugins}>
              <ConfigProvider locale={getConfigLang(i18n.language)}>
                <Provider store={store}>
                  <MapContext.Provider value={map}>
                    <App />
                  </MapContext.Provider>
                </Provider>
              </ConfigProvider>
            </PluginProvider>
          </SHOGunAPIClientProvider>
        </React.Suspense>
      </React.StrictMode>,
      document.getElementById('app')
    );
  } catch (error) {
    const loadingMask = document.querySelectorAll('.loadmask')[0];

    if (loadingMask) {
      loadingMask.classList.add('loadmask-hidden');
    }

    Logger.error(error);

    render(
      <React.StrictMode>
        <Alert
          className="error-boundary"
          message={i18n.t('Index.errorMessage')}
          description={i18n.t('Index.errorDescription')}
          type="error"
          showIcon
        />
      </React.StrictMode>,
      document.getElementById('app')
    );
  }
};

renderApp();
