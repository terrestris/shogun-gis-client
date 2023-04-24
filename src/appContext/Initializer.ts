import {
  notification,
  ConfigProvider
} from 'antd';

import ClientConfiguration from 'clientConfig';

import Color from 'color';

import Keycloak from 'keycloak-js';

import _cloneDeep from 'lodash/cloneDeep';

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

import Logger from '@terrestris/base-util/dist/Logger';
import UrlUtil from '@terrestris/base-util/dist/UrlUtil/UrlUtil';

import {
  AppInfo
} from '@terrestris/shogun-util/dist/model/AppInfo';
import Application, {
  DefaultApplicationTheme
} from '@terrestris/shogun-util/dist/model/Application';
import Layer from '@terrestris/shogun-util/dist/model/Layer';
import User from '@terrestris/shogun-util/dist/model/User';
import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';
import SHOGunAPIClient from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

import i18n from '../i18n';

import {
  setAppInfo
} from '../store/appInfo';
import {
  setDescription
} from '../store/description';
import {
  setId
} from '../store/id';
import {
  setLegal
} from '../store/legal';
import {
  setLogoPath
} from '../store/logoPath';
import {
  setStateOnly
} from '../store/stateOnly';
import {
  store
} from '../store/store';
import {
  setTitle
} from '../store/title';
import {
  ApplicationToolConfig,
  setToolConfig
} from '../store/toolConfig';
import {
  setUser
} from '../store/user';

// TODO: extend antd properties too
export type ThemeProperties = React.CSSProperties & {
  '--primaryColor'?: string;
  '--secondaryColor'?: string;
  '--complementaryColor'?: string;
};

export type InitializerOpts = {
  client: SHOGunAPIClient;
};

export class Initializer {
  private client: SHOGunAPIClient;

  private parser: SHOGunApplicationUtil<Application, Layer>;

  constructor(opts: InitializerOpts) {
    this.client = opts.client;

    this.parser = new SHOGunApplicationUtil({
      client: this.client
    });
  }

  async init() {
    const keycloak = await this.initKeycloak();

    if (keycloak) {
      this.client.setKeycloak(keycloak);
    }

    this.setApplicationTitle();

    const application = await this.getApplicationConfiguration();

    this.setApplicationToStore(application);

    const appInfo = await this.getApplicationInfo();

    this.setAppInfoToStore(appInfo);

    const user = await this.getUser(appInfo?.userId);

    this.setUserToStore(user);

    const theme = this.parseTheme(application?.clientConfig?.theme);

    this.setTheme(theme);

    const map = await this.setupMap(application);

    return {
      application,
      appInfo,
      user,
      map
    };
  }

  getApplicationConfiguration = async () => {
    const applicationId = UrlUtil.getQueryParam(window.location.href, 'applicationId');

    if (!applicationId) {
      Logger.info('No application ID given, can\'t load any configuration.');
      return;
    }

    try {
      Logger.info(`Loading application with ID ${applicationId}`);

      const application = await this.client.application().findOne(applicationId);

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

  getApplicationInfo = async () => {
    try {
      Logger.info('Loading application info');

      const appInfo = await this.client.info().getAppInfo();

      Logger.info('Successfully loaded application info');

      return appInfo;
    } catch (error) {
      Logger.error('Error while loading application info: ', error);
    }
  };

  getUser = async (userId?: number) => {
    if (!userId) {
      Logger.info('No user ID given, can\'t load it\'s details.');
      return;
    }

    try {
      Logger.info(`Loading user with ID ${userId}`);

      const user = await this.client.user().findOne(userId);

      Logger.info(`Successfully loaded user with ID ${userId}`);

      return user;
    } catch (error) {
      Logger.error(`Error while loading user with ID ${userId}: `, error);
    }
  };

  initKeycloak = async () => {
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

  setupMap = async (application?: Application) => {
    if (application) {
      return await this.setupSHOGunMap(application);
    }

    Logger.info('No application configuration provided, the default map will be loaded');

    return this.setupDefaultMap();
  };

  setupSHOGunMap = async (application: Application) => {
    const view = await this.parser.parseMapView(application, {
      constrainOnlyCenter: true,
      constrainResolution: true
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

    const layers = await this.parser.parseLayerTree(application, projection);

    const mapLayers = layers?.getLayersArray();
    mapLayers?.forEach(layer => {
      const appSettings = application.layerConfig
        ?.find(layerConfig => layerConfig.layerId === layer.get('shogunId'));
      // TODO Rename key
      layer.set('appSettings', appSettings);
    });

    return new OlMap({
      view,
      layers,
      controls: OlControlDefaults({
        zoom: false
      })
    });
  };

  // TODO Make default map configurable?
  setupDefaultMap = () => {
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

  setApplicationToStore = (application?: Application) => {
    if (!application) {
      Logger.info('No application configuration provided, the default store will be loaded');

      return;
    }

    if (application.id) {
      store.dispatch(setId(application.id));
    }

    if (application.stateOnly) {
      store.dispatch(setStateOnly(application.stateOnly));
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

    if (application.toolConfig && application.toolConfig.length > 0) {
      store.dispatch(setToolConfig(application.toolConfig as ApplicationToolConfig));
    };
  };

  setAppInfoToStore = (appInfo?: AppInfo) => {
    if (!appInfo) {
      return;
    }

    store.dispatch(setAppInfo(appInfo));
  };

  setUserToStore = (user?: User) => {
    if (!user) {
      return;
    }

    store.dispatch(setUser(user));
  };

  setApplicationTitle = () => {
    store.subscribe(() => {
      document.title = store.getState().title;
    });
  };

  parseTheme = (theme?: DefaultApplicationTheme): ThemeProperties => {
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

  setTheme = (theme: ThemeProperties) => {
    ConfigProvider.config({
      theme: {
        primaryColor: Color(theme['--primaryColor']).isLight() ?
          Color(theme['--primaryColor']).darken(0.5).hexa() :
          theme['--primaryColor']
      }
    });

    Object.entries(theme).forEach(([key, value]) => {
      document.body.style.setProperty(key, value);
    });
  };
};

export default Initializer;
