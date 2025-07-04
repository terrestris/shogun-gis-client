import React from 'react';

import {
  init,
  loadRemote
} from '@module-federation/enhanced/runtime';

import {
  loader
} from '@monaco-editor/react';

import {
  Alert,
  AlertProps,
  ConfigProvider,
  notification
} from 'antd';

import csCZ from 'antd/lib/locale/cs_CZ';
import deDE from 'antd/lib/locale/de_DE';
import enGB from 'antd/lib/locale/en_GB';
import plPl from 'antd/lib/locale/pl_PL';

import ClientConfiguration, {
  FeatureEditConfiguration
} from 'clientConfig';

import Color from 'color';

import LanguageDetector from 'i18next-browser-languagedetector';

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

import { createRoot } from 'react-dom/client';

import {
  Provider
} from 'react-redux';

import Logger from '@terrestris/base-util/dist/Logger';
import { UrlUtil } from '@terrestris/base-util/dist/UrlUtil/UrlUtil';

import MapContext from '@terrestris/react-util/dist/Context/MapContext/MapContext';

import {
  AppInfo
} from '@terrestris/shogun-util/dist/model/AppInfo';
import Application, {
  DefaultApplicationTheme,
  DefaultApplicationToolConfig
} from '@terrestris/shogun-util/dist/model/Application';
import User from '@terrestris/shogun-util/dist/model/User';
import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';
import { SHOGunAPIClient } from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

const App = React.lazy(() => import('./App'));

import RerouteToLogin from './components/RerouteToLogin';
import {
  PluginProvider
} from './context/PluginContext';
import {
  SHOGunAPIClientProvider
} from './context/SHOGunAPIClientContext';

import i18n, {
  initOpts
} from './i18n';

import {
  ClientPlugin,
  ClientPluginInternal
} from './plugin';

import {
  setAppInfo
} from './store/appInfo';
import {
  setDescription
} from './store/description';
import {
  setUserEditMode,
  EditLevel
} from './store/editFeature';
import { setFeatureInfoActiveCopyTools } from './store/featureInfo';
import {
  setLayerTreeActiveUploadTools,
  setLayerTreeShowLegends,
  setMetadataVisible,
  setLayerIconsVisible
} from './store/layerTree';
import {
  setLegal
} from './store/legal';
import {
  setLogoPath
} from './store/logoPath';
import {
  setMapToolbarVisible
} from './store/mapToolbarVisible';
import { setPrintApp } from './store/print';
import {
  setSearchEngines
} from './store/searchEngines';
import {
  createReducer,
  dynamicMiddleware,
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
import {
  setVisible as setUserMenuVisible
} from './store/userMenu';

import './index.less';

// TODO: extend antd properties too
export interface ThemeProperties extends React.CSSProperties {
  '--primaryColor'?: string;
  '--secondaryColor'?: string;
  '--complementaryColor'?: string;
}

enum LoadingErrorCode {
  APP_ID_NOT_SET = 'APP_ID_NOT_SET',
  APP_CONFIG_NOT_FOUND = 'APP_CONFIG_NOT_FOUND',
  APP_UNAUTHORIZED = 'APP_UNAUTHORIZED',
  APP_CONFIG_STATIC_NOT_FOUND = 'APP_CONFIG_STATIC_NOT_FOUND'
}

const client = ClientConfiguration.shogunBase !== false ? new SHOGunAPIClient({
  url: ClientConfiguration.shogunBase ?? '/'
}) : undefined;

const parser = new SHOGunApplicationUtil({
  client
});

const getConfigLang = (lang: string) => {
  switch (lang) {
    case 'en':
      return enGB;
    case 'de':
      return deDE;
    case 'pl':
      return plPl;
    case 'cz':
      return csCZ;
    default:
      return enGB;
  }
};

export const getApplicationConfiguration = async (shogunClient: SHOGunAPIClient, applicationId: number) => {
  try {
    Logger.info(`Loading application with ID ${applicationId}`);

    const application = await shogunClient.application().findOne(applicationId);

    Logger.info(`Successfully loaded application with ID ${applicationId}`);

    return application;
  } catch (error) {
    if ((error as Error).message.indexOf('401') > -1) {
      throw new Error(LoadingErrorCode.APP_UNAUTHORIZED);
    }
    Logger.error(`Error while loading application with ID ${applicationId}: ${error}`);
  }
};

export const getApplicationConfigurationByName = async (shogunClient: SHOGunAPIClient, applicationName: string) => {
  try {
    Logger.info(`Loading application with name: ${applicationName}`);

    const application = await shogunClient.application().findOneByName(applicationName);

    Logger.info(`Successfully loaded application with name: ${applicationName}`);

    return application;
  } catch (error) {
    if ((error as Error).message.indexOf('401') > -1) {
      throw new Error(LoadingErrorCode.APP_UNAUTHORIZED);
    }
    Logger.error(`Error while loading application with name: ${applicationName}: ${error}`);
  }
};

export const getStaticApplicationConfiguration = async (staticAppContextUrl: string) => {
  try {
    Logger.info('Loading static application');

    const response = await fetch(staticAppContextUrl);

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const application = await response.json();

    Logger.info('Successfully loaded static application');

    return application;
  } catch (error) {
    if ((error as Error).message.indexOf('401') > -1) {
      throw new Error(LoadingErrorCode.APP_UNAUTHORIZED);
    }
    Logger.error(`Error while loading static application: ${error}`);
  }
};

const getApplicationInfo = async (shogunClient: SHOGunAPIClient) => {
  try {
    Logger.info('Loading application info');

    const appInfo = await shogunClient.info().getAppInfo();

    Logger.info('Successfully loaded application info');

    return appInfo;
  } catch (error) {
    Logger.error('Error while loading application info: ', error);
  }
};

export const getUser = async (shogunClient: SHOGunAPIClient, userId?: number) => {
  if (!userId) {
    Logger.info('No user ID given, can\'t load it\'s details.');
    return;
  }

  try {
    Logger.info(`Loading user with ID ${userId}`);

    const user = await shogunClient.user().findOne(userId);

    Logger.info(`Successfully loaded user with ID ${userId}`);

    return user;
  } catch (error) {
    Logger.error(`Error while loading user with ID ${userId}: `, error);
  }
};

export const setApplicationToStore = async (application?: Application) => {
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

  if (application.clientConfig?.legal) {
    store.dispatch(setLegal(application.clientConfig.legal));
  }

  if (application?.clientConfig?.theme?.logoPath) {
    store.dispatch(setLogoPath(application.clientConfig.theme.logoPath));
  }

  // nominatim search is active by default
  store.dispatch(setSearchEngines(['nominatim']));

  if (application.toolConfig?.length) {
    const availableTools: string[] = [];
    const toolActions: Record<string, (config: any) => void> = {
      search: (config) => {
        if (config.engines?.length) {
          store.dispatch(setSearchEngines(config.engines));
        }
      },
      // eslint-disable-next-line camelcase
      feature_info: (config) => {
        if (Array.isArray(config.activeCopyTools)) {
          store.dispatch(setFeatureInfoActiveCopyTools(config.activeCopyTools));
        }
      },
      tree: (config) => {
        if (Array.isArray(config.uploadTools)) {
          store.dispatch(setLayerTreeActiveUploadTools(config.uploadTools));
        }
        if (config.showLegends) {
          store.dispatch(setLayerTreeShowLegends(config.showLegends));
        }
        if (typeof config.metadataVisible !== 'undefined') {
          store.dispatch(setMetadataVisible(config.metadataVisible));
        }
        if (typeof config.layerIconsVisible !== 'undefined') {
          store.dispatch(setLayerIconsVisible(config.layerIconsVisible));
        }
      },
      // eslint-disable-next-line camelcase
      map_toolbar: (config) => {
        store.dispatch(setMapToolbarVisible(config?.visible));
      },
      // eslint-disable-next-line camelcase
      user_menu: (config) => {
        store.dispatch(setUserMenuVisible(config?.visible ?? true));
      }
    };

    application.toolConfig.forEach(({
      name,
      config
    }) => {
      if (config?.visible && !['search', 'user_menu', 'map_toolbar'].includes(name)) {
        availableTools.push(name);
      }
      toolActions[name]?.(config);
    });

    store.dispatch(setAvailableTools(availableTools));
  }
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

const setLoadingImage = (id: number, path = './shogun_spinner.gif') => {
  const loadingImageElement = document.getElementById('loadmask-image') as HTMLImageElement;
  if (!loadingImageElement) {
    return;
  }
  loadingImageElement.src = path;
  localStorage.setItem(`SHOGun_Logo_Path_${id}`, path);
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

  keycloak.onTokenExpired = () => {
    (async () => {
      try {
        await keycloak.updateToken(0);
        Logger.info('Token successfully refreshed.');
      } catch (error) {
        Logger.error('Error while refreshing the access token: ', error);
      }
    })();
  };

  await keycloak.init({
    onLoad: keycloakOnLoad,
    checkLoginIframe: false
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

  let layers;
  if (!ClientConfiguration.layerConfigUrl) {
    layers = await parser.parseLayerTree(application, projection);
  } else {
    const response = await fetch(ClientConfiguration.layerConfigUrl);
    const layersConfig = await response.json();
    layers = await parser.parseLayerTreeNodes(application, layersConfig, projection);
  }

  const interactions = await parser.parseMapInteractions(application);

  return new OlMap({
    view,
    layers,
    controls: OlControlDefaults({
      zoom: false
    }),
    interactions
  });
};

// TODO Make default/fallback app configurable?
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

export const parseTheme = (theme?: DefaultApplicationTheme): ThemeProperties => {
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
  if (theme.complementaryColor) {
    style['--complementaryColor'] = theme.complementaryColor;
  }
  if (theme.faviconPath) {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = theme.faviconPath;
    } else {
      // If no favicon is set, create a new one
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.type = 'image/x-icon';
      newLink.href = theme.faviconPath;
      document.head.appendChild(newLink);
    }
  }

  return style;
};

const loadPluginModules = async (moduleName: string, moduleUrl: string, remoteNames: string[]) => {
  init({
    name: 'SHOGunGISClient',
    remotes: [{
      entry: moduleUrl,
      name: moduleName
    }]
  });

  const modules: ClientPlugin[] = [];

  for (const remoteName of remoteNames) {

    // For backwards compatibility (existing plugin remote are potentially prefixed with './')
    const remote = `${moduleName}/${remoteName.startsWith('./') ? remoteName.substring(2) : remoteName}`;

    const clientPlugin = await loadRemote<any>(remote);

    if (clientPlugin && clientPlugin.default) {
      modules.push(clientPlugin.default);
    }
  }

  return modules;
};

const loadPlugins = async (map: OlMap, toolConfig?: DefaultApplicationToolConfig[]) => {
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

    let clientPluginModules: ClientPlugin[];
    try {
      clientPluginModules = await loadPluginModules(name, resourcePath, exposedPaths);
      Logger.info(`Successfully loaded plugin ${name}`);
    } catch (error) {
      Logger.error(`Could not load plugin ${name}:`, error);
      return clientPlugins;
    }

    for (const module of clientPluginModules) {
      const clientPluginDefault: ClientPluginInternal = module as ClientPluginInternal;
      const PluginComponent = clientPluginDefault.component;

      if (toolConfig) {
        const pluginApplicationConfig = toolConfig.find((tc) => tc.name === clientPluginDefault.key);
        if (pluginApplicationConfig?.config?.disabled) {
          Logger.info(`"${clientPluginDefault.key}" is disabled by the application config`);
          continue;
        }
      }

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

      if (Array.isArray(clientPluginDefault.middlewares)) {
        clientPluginDefault.middlewares?.forEach(mw => dynamicMiddleware.addMiddleware(mw));
      }

      clientPlugins.push(clientPluginDefault);
    }
  }

  return clientPlugins;
};

export const checkRoles = (
  list: string[],
  featureEditRoles: FeatureEditConfiguration
): EditLevel[] => {
  const {
    authorizedRolesForCreate,
    authorizedRolesForUpdate,
    authorizedRolesForDelete,
    authorizedRolesForEditingGeometries
  } = featureEditRoles;

  const result: EditLevel[] = [];

  for (const element of list) {
    if (authorizedRolesForCreate?.some(role => matchRole(role, element))) {
      result.push('CREATE');
    }
    if (authorizedRolesForUpdate?.some(role => matchRole(role, element))) {
      result.push('UPDATE');
    }
    if (authorizedRolesForDelete?.some(role => matchRole(role, element))) {
      result.push('DELETE');
    }
    if (authorizedRolesForEditingGeometries?.some(role => matchRole(role, element))) {
      result.push('EDIT_GEOMETRY');
    }
  }
  return result;
};

export const matchRole = (role: string | RegExp, element: string): boolean => {
  if (typeof role === 'string') {
    return element === role;
  }
  if (role instanceof RegExp) {
    return role.test(element);
  }
  return false;
};

const renderApp = async () => {
  const container = document.getElementById('app');
  const root = createRoot(container!);

  try {
    loader.config({
      paths: {
        vs: './vs'
      }
    });

    const keycloak = await initKeycloak();

    if (keycloak && client) {
      client.setKeycloak(keycloak);
    }

    const applicationIdString = UrlUtil.getQueryParam(window.location.href, 'applicationId');

    const url = new URL(window.location.href);
    const pathSegments = url.pathname.split('/');
    const applicationName = pathSegments[2];

    const applicationId = applicationIdString ? parseInt(applicationIdString, 10) : undefined;

    if (!applicationId && !applicationName && !ClientConfiguration.enableFallbackConfig && !ClientConfiguration.staticAppConfigUrl) {
      throw new Error(LoadingErrorCode.APP_ID_NOT_SET);
    }
    let appConfig;
    if (applicationName && client) {
      appConfig = await getApplicationConfigurationByName(client, applicationName);
      if (appConfig?.id) {
        setLoadingImage(appConfig.id, appConfig?.clientConfig?.theme?.logoPath);
      }
    } else if (applicationId && client) {
      appConfig = await getApplicationConfiguration(client, applicationId);
      setLoadingImage(applicationId, appConfig?.clientConfig?.theme?.logoPath);
    } else if (ClientConfiguration.staticAppConfigUrl) {
      appConfig = await getStaticApplicationConfiguration(ClientConfiguration.staticAppConfigUrl);

      if (!appConfig) {
        throw new Error(LoadingErrorCode.APP_CONFIG_STATIC_NOT_FOUND);
      }
    }

    if (!appConfig && !ClientConfiguration.enableFallbackConfig) {
      throw new Error(LoadingErrorCode.APP_CONFIG_NOT_FOUND);
    }

    const defaultLanguage = appConfig?.clientConfig?.defaultLanguage;

    if (!defaultLanguage) {
      i18n.use(LanguageDetector);
    }

    await i18n.init(initOpts);

    if (defaultLanguage) {
      i18n.changeLanguage(defaultLanguage);
    }

    const printApp = appConfig?.clientConfig?.printApp;
    if (printApp) {
      store.dispatch(setPrintApp(printApp));
    }

    const style = parseTheme(appConfig?.clientConfig?.theme);

    if (Color(style['--secondaryColor'])?.isLight() && Color(style['--primaryColor'])?.isLight()) {
      style['--complementaryColor'] = (Color(style['--complementaryColor']).darken(0.5).hexa());
    } else if (Color(style['--secondaryColor'])?.isDark() && Color(style['--primaryColor'])?.isDark()) {
      style['--complementaryColor'] = (Color(style['--complementaryColor']).lighten(0.5).hexa());
    }

    Object.keys(style).forEach((key: any) => {
      document.body.style.setProperty(key, style[key as keyof ThemeProperties] as string);
    });

    setApplicationToStore(appConfig);

    setApplicationTitle();

    if (client) {
      const appInfo = await getApplicationInfo(client);

      setAppInfoToStore(appInfo);

      const user = await getUser(client, appInfo?.userId);

      setUserToStore(user);
    }

    const userRoles: string[] | undefined =
      client?.getKeycloak()?.tokenParsed?.realm_access?.roles;

    let allowedEditMode: EditLevel[] = ['NONE'];

    if (userRoles && ClientConfiguration.featureEditRoles) {
      allowedEditMode = checkRoles(
        userRoles,
        ClientConfiguration.featureEditRoles
      );
    }

    store.dispatch(setUserEditMode(allowedEditMode));

    const map = await setupMap(appConfig);

    const plugins = await loadPlugins(map, appConfig?.toolConfig);

    if (!appConfig && applicationId) {
      notification.error({
        message: i18n.t('Index.applicationLoadErrorMessage'),
        description: i18n.t('Index.applicationLoadErrorDescription', {
          applicationId: applicationId
        }),
        duration: 0
      });
    } else if (!appConfig && applicationName) {
      notification.error({
        message: i18n.t('Index.applicationLoadErrorMessage'),
        description: i18n.t('Index.applicationLoadByNameErrorDescription', {
          applicationName: applicationName
        }),
        duration: 0
      });
    }

    root.render(
      <React.StrictMode>
        <React.Suspense fallback={<span></span>}>
          <SHOGunAPIClientProvider client={client}>
            <PluginProvider plugins={plugins}>
              <ConfigProvider
                locale={getConfigLang(i18n.language)}
                theme={{
                  cssVar: true,
                  token: {
                    colorPrimary: Color(style['--primaryColor']).isLight() ?
                      Color(style['--primaryColor']).darken(0.5).hex() :
                      style['--primaryColor'],
                    colorLink: style['--complementaryColor'],
                    colorLinkHover: style['--secondaryColor'],
                    borderRadius: 0
                  },
                  components: {
                    Button: {
                      primaryShadow: 'none'
                    },
                    Dropdown: {
                      paddingBlock: 2
                    }
                  }
                }}
              >
                <Provider store={store}>
                  <MapContext.Provider value={map}>
                    <App />
                  </MapContext.Provider>
                </Provider>
              </ConfigProvider>
            </PluginProvider>
          </SHOGunAPIClientProvider>
        </React.Suspense>
      </React.StrictMode>
    );
  } catch (error) {
    Logger.error(error);

    const loadingMask = document.querySelectorAll('.loadmask')[0];

    if (loadingMask) {
      loadingMask.classList.add('loadmask-hidden');
    }

    if (!i18n.isInitialized) {
      i18n.use(LanguageDetector);
      await i18n.init(initOpts);
    }

    let type: AlertProps['type'] = 'warning';
    let errorDescription: string | React.ReactElement = i18n.t('Index.errorDescription');

    if ((error as Error)?.message === LoadingErrorCode.APP_ID_NOT_SET) {
      errorDescription = i18n.t('Index.errorDescriptionAppIdNotSet');
    }

    if ((error as Error)?.message === LoadingErrorCode.APP_UNAUTHORIZED) {
      errorDescription =
        <p>
          {i18n.t('Index.permissionDeniedUnauthorized')}
          <RerouteToLogin
            rerouteMsg={i18n.t('Index.rerouteToLoginPage')}
          />
        </p>;

      type = 'error';
    }

    if ((error as Error)?.message === LoadingErrorCode.APP_CONFIG_NOT_FOUND) {
      const appId = UrlUtil.getQueryParam(window.location.href, 'applicationId');
      const appName = UrlUtil.getQueryParam(window.location.href, 'applicationName');

      if (appId) {
        errorDescription = i18n.t('Index.errorDescriptionAppConfigNotFound', {
          applicationId: appId
        });
      } else if (appName) {
        errorDescription = i18n.t('Index.errorDescriptionAppConfigByNameNotFound', {
          applicationName: appName
        });
      }
    }

    if ((error as Error)?.message === LoadingErrorCode.APP_CONFIG_STATIC_NOT_FOUND) {
      errorDescription = i18n.t('Index.errorDescriptionAppConfigStaticNotFound');
    }

    root.render(
      <React.StrictMode>
        <SHOGunAPIClientProvider client={client}>
          <Alert
            className="error-boundary"
            message={i18n.t('Index.errorMessage')}
            description={errorDescription}
            type={type}
            showIcon
          />
        </SHOGunAPIClientProvider>
      </React.StrictMode>
    );
  }
};

renderApp();
