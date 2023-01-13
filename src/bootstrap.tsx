import React from 'react';

import {
  Alert,
  ConfigProvider,
  notification
} from 'antd';

import deDE from 'antd/lib/locale/de_DE';
import enGB from 'antd/lib/locale/en_GB';

import ClientConfiguration from 'clientConfig';

import Color from 'color';

import Keycloak from 'keycloak-js';

import {
  defaults as OlControlDefaults
} from 'ol/control';
import OlLayerGroup from 'ol/layer/Group';
import OlLayerTile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import {
  fromLonLat
} from 'ol/proj';
import OlSourceOsm from 'ol/source/OSM';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlView from 'ol/View';

import {
  render
} from 'react-dom';

import {
  Provider
} from 'react-redux';

import Logger from '@terrestris/base-util/dist/Logger';
import UrlUtil from '@terrestris/base-util/dist/UrlUtil/UrlUtil';

import MapContext from '@terrestris/react-geo/dist/Context/MapContext/MapContext';

import {
  AppInfo
} from '@terrestris/shogun-util/dist/model/AppInfo';
import Application, {
  DefaultApplicationTheme,
  DefaultApplicationToolConfig
} from '@terrestris/shogun-util/dist/model/Application';
import User from '@terrestris/shogun-util/dist/model/User';
import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';
import SHOGunAPIClient from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

const App = React.lazy(() => import('./App'));

import {
  PluginProvider
} from './context/PluginContext';
import {
  SHOGunAPIClientProvider
} from './context/SHOGunAPIClientContext';

import i18n from './i18n';

import {
  ClientPluginInternal
} from './plugin';

import {
  setAppInfo
} from './store/appInfo';
import {
  setDescription
} from './store/description';
import {
  setLogoPath
} from './store/logoPath';
import {
  createReducer,
  store
} from './store/store';
import {
  setTitle
} from './store/title';
import {
  setAvailableTools
} from './store/toolMenu';
import {
  setUser
} from './store/user';

import './index.less';

// TODO: extend antd properties too
export interface ThemeProperties extends React.CSSProperties {
  '--primaryColor'?: string;
  '--secondaryColor'?: string;
  '--complementaryColor'?: string;
}

const client = new SHOGunAPIClient({
  url: ClientConfiguration.shogunBase || '/'
});

const parser = new SHOGunApplicationUtil({
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

const getApplicationConfiguration = async () => {
  const applicationId = UrlUtil.getQueryParam(window.location.href, 'applicationId');

  if (!applicationId) {
    Logger.info('No application ID given, can\'t load any configuration.');
    return;
  }

  try {
    Logger.info(`Loading application with ID ${applicationId}`);

    const application = await client.application().findOne(applicationId);

    Logger.info(`Successfully loaded application with ID ${applicationId}`);

    return application;
  } catch (error) {
    Logger.error(`Error while loading application with ID ${applicationId}: ${error}`);

    notification.error({
      message: i18n.t('Index.applicationLoadErrorMessage'),
      description: i18n.t('Index.applicationLoadErrorDescription', {
        applicationId: applicationId
      }),
      duration: 0
    });
  }
};

const getApplicationInfo = async () => {
  try {
    Logger.info('Loading application info');

    const appInfo = await client.info().getAppInfo();

    Logger.info('Successfully loaded application info');

    return appInfo;
  } catch (error) {
    Logger.error('Error while loading application info: ', error);
  }
};

const getUser = async (userId?: number) => {
  if (!userId) {
    Logger.info('No user ID given, can\'t load it\'s details.');
    return;
  }

  try {
    Logger.info(`Loading user with ID ${userId}`);

    const user = await client.user().findOne(userId);

    Logger.info(`Successfully loaded user with ID ${userId}`);

    return user;
  } catch (error) {
    Logger.error(`Error while loading user with ID ${userId}: `, error);
  }
};

const setApplicationToStore = async (application?: Application) => {
  if (!application) {
    Logger.info('No application configuration provided, the default store will be loaded');

    return;
  }

  if (application.name) {
    store.dispatch(setTitle(application.name));
  }

  if (application.clientConfig?.description) {
    store.dispatch(setDescription(application.clientConfig?.description));
  }

  if (application?.clientConfig?.theme?.logoPath) {
    store.dispatch(setLogoPath(application.clientConfig.theme.logoPath));
  }

  if (application.toolConfig && application.toolConfig.length > 0) {
    const availableTools: string[] = [];
    application.toolConfig
      .map((tool: DefaultApplicationToolConfig) => {
        if (tool.config.visible) {
          availableTools.push(tool.name);
        };
      });

    store.dispatch(setAvailableTools(availableTools));
  };
};

const setAppInfoToStore = async (appInfo?: AppInfo) => {
  if (!appInfo) {
    return;
  }

  store.dispatch(setAppInfo(appInfo));
};

const setUserToStore = async (user?: User) => {
  if (!user) {
    return;
  }

  store.dispatch(setUser(user));
};

const initKeycloak = async () => {
  const keycloakEnabled = ClientConfiguration.keycloak?.enabled;
  const keycloakOnLoad = ClientConfiguration.keycloak?.onLoadAction;
  const keycloakHost = ClientConfiguration.keycloak?.host;
  const keycloakRealm = ClientConfiguration.keycloak?.realm;
  const keycloakClientId = ClientConfiguration.keycloak?.clientId;

  if (!keycloakEnabled) {
    return undefined;
  }

  if (!keycloakHost) {
    throw new Error('Neither config key keycloak.host nor environment KEYCLOAK_HOST is set');
  }

  if (!keycloakRealm) {
    throw new Error('Neither config key keycloak.realm nor environment KEYCLOAK_REALM is set');
  }

  if (!keycloakClientId) {
    throw new Error('Neither config key keycloak.clientId nor environment KEYCLOAK_CLIENT_ID is set');
  }

  const keycloak = new Keycloak({
    url: `${keycloakHost}`,
    realm: keycloakRealm,
    clientId: keycloakClientId
  });

  keycloak.onTokenExpired = async () => {
    try {
      await keycloak.updateToken(0);
    } catch (error) {
      Logger.error('Error while refreshing the access token: ', error);
    }
  };

  await keycloak.init({
    onLoad: keycloakOnLoad
  });

  return keycloak;
};

const setApplicationTitle = () => {
  store.subscribe(() => {
    document.title = store.getState().title;
  });
};

const setupMap = async (application?: Application) => {
  if (application) {
    return await setupSHOGunMap(application);
  }

  Logger.info('No application configuration provided, the default map will be loaded');

  return setupDefaultMap();
};

const setupSHOGunMap = async (application: Application) => {
  const view = await parser.parseMapView(application, {
    constrainOnlyCenter: true
  });

  let extent;
  const projection = application.clientConfig?.mapView.projection;
  const mapView = application.clientConfig?.mapView;
  if (projection && mapView?.extent && mapView.extent.length === 4) {
    const ll = fromLonLat([mapView.extent[0], mapView.extent[1]], projection);
    const ur = fromLonLat([mapView.extent[2], mapView.extent[3]], projection);
    extent = [
      ll[0],
      ll[1],
      ur[0],
      ur[1]
    ];
  }
  if (extent) {
    view.set('extent', extent);
  }

  view.setConstrainResolution(true);

  const layers = await parser.parseLayerTree(application, projection);

  return new OlMap({
    view,
    layers,
    controls: OlControlDefaults({
      zoom: false
    })
  });
};

const setupDefaultMap = () => {
  const osmLayer = new OlLayerTile({
    source: new OlSourceOsm()
  });
  osmLayer.set('name', 'OpenStreetMap');

  const temperatureLayer = new OlLayerTile({
    opacity: 0.5,
    visible: true,
    source: new OlSourceTileWMS({
      url: 'https://gibs.earthdata.nasa.gov/wms/epsg3857/best/wms.cgi',
      projection: 'EPSG:3857',
      params: {
        LAYERS: 'MERRA2_2m_Air_Temperature_Assimilated_Monthly'
      }
    })
  });
  temperatureLayer.setProperties({
    name: '2-meter Air Temperature, Assimilated (Monthly, MERRA2)',
    hoverable: true
  });

  const eoLayerGroup = new OlLayerGroup({
    layers: [temperatureLayer]
  });
  eoLayerGroup.set('name', 'NASA Earth Observations');

  const backgroundLayerGroup = new OlLayerGroup({
    layers: [osmLayer]
  });
  backgroundLayerGroup.set('name', 'Background');

  const center = fromLonLat([0, 40], 'EPSG:3857');

  return new OlMap({
    view: new OlView({
      center: center,
      zoom: 0
    }),
    layers: [backgroundLayerGroup, eoLayerGroup],
    controls: OlControlDefaults({
      zoom: false
    })
  });
};

const parseTheme = (theme?: DefaultApplicationTheme): ThemeProperties => {
  const style: ThemeProperties = {
    '--primaryColor': '#59666C',
    '--secondaryColor': '#70B3BE',
    '--complementaryColor': '#FFFFFF'
  };
  if (!theme) {
    return style;
  }
  if (theme.primaryColor) {
    style['--primaryColor'] = theme.primaryColor;
  }
  if (theme.secondaryColor) {
    style['--secondaryColor'] = theme.secondaryColor;
  }
  if (theme.secondaryColor) {
    style['--complementaryColor'] = theme.complementaryColor;
  }
  return style;
};

// ExamplePlugin: 'ExamplePlugin@/client-plugin/remoteEntry.js'
const loadPluginModules = async (moduleName: string, moduleUrl: string, remoteNames: string[]) => {
  await __webpack_init_sharing__('default');

  await new Promise<void>((resolve, reject) => {
    const element = document.createElement('script');

    element.src = moduleUrl;
    element.type = 'text/javascript';
    element.async = true;

    element.onload = () => {
      element.parentElement?.removeChild(element);
      resolve();
    };

    element.onerror = (err) => {
      element.parentElement?.removeChild(element);
      reject(err);
    };

    document.head.appendChild(element);
  });

  // @ts-ignore
  const container = window[moduleName];

  // eslint-disable-next-line camelcase
  await container.init(__webpack_share_scopes__.default);

  const modules = [];
  for (const remoteName of remoteNames) {
    const factory = await container.get(remoteName);
    const module = factory();
    modules.push(module);
  }

  return modules;
};

const loadPlugins = async (map: OlMap) => {
  if (!ClientConfiguration.plugins || ClientConfiguration.plugins.length === 0) {
    Logger.info('No plugins found');
    return [];
  }

  Logger.info('Loading plugins');

  const clientPlugins: ClientPluginInternal[] = [];

  for (const plugin of ClientConfiguration.plugins) {
    const name = plugin.name;
    const resourcePath = plugin.resourcePath;
    const exposedPaths = plugin.exposedPaths;

    if (!name) {
      Logger.error('Required plugin configuration \'name\' is not set');
      return clientPlugins;
    }

    if (!resourcePath) {
      Logger.error('Required plugin configuration \'resourcePath\' is not set');
      return clientPlugins;
    }

    if (!exposedPaths) {
      Logger.error('Required plugin configuration \'exposedPaths\' is not set');
      return clientPlugins;
    }

    Logger.info(`Loading plugin ${name} (with exposed paths ${exposedPaths.join(' and ')}) from ${resourcePath}`);

    let clientPluginModules: any[];
    try {
      clientPluginModules = await loadPluginModules(name, resourcePath, exposedPaths);
      Logger.info(`Successfully loaded plugin ${name}`);
    } catch (error) {
      Logger.error(`Could not load plugin ${name}:`, error);
      return clientPlugins;
    }

    clientPluginModules.forEach(module => {
      const clientPluginDefault: ClientPluginInternal = module.default;
      const PluginComponent = clientPluginDefault.component;

      const WrappedPluginComponent = () => (
        <PluginComponent
          map={map}
          client={client}
        />
      );

      clientPluginDefault.wrappedComponent = WrappedPluginComponent;

      if (clientPluginDefault.i18n) {
        Object.entries(clientPluginDefault.i18n).forEach(locale => {
          const lng = locale[0];
          const resources = locale[1].translation;
          i18n.addResourceBundle(lng, 'translation', resources, true, true);
        });
      }

      if (clientPluginDefault.reducers) {
        const reducers = createReducer(clientPluginDefault.reducers);
        store.replaceReducer(reducers);
      }

      clientPlugins.push(clientPluginDefault);
    });
  }

  return clientPlugins;
};

const renderApp = async () => {
  try {
    const keycloak = await initKeycloak();

    if (keycloak) {
      client.setKeycloak(keycloak);
    }

    const appConfig = await getApplicationConfiguration();

    const style = parseTheme(appConfig?.clientConfig?.theme);

    ConfigProvider.config({
      theme: {
        primaryColor: Color(style['--primaryColor']).isLight() ?
          Color(style['--primaryColor']).darken(0.5).hexa() :
          style['--primaryColor']
      }
    });

    Object.keys(style).forEach((key: any) => {
      document.body.style.setProperty(key, style[key as keyof ThemeProperties] as string);
    });

    setApplicationTitle();

    setApplicationToStore(appConfig);

    const appInfo = await getApplicationInfo();

    setAppInfoToStore(appInfo);

    const user = await getUser(appInfo?.userId);

    setUserToStore(user);

    const map = await setupMap(appConfig);

    const plugins = await loadPlugins(map);

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
