import React from 'react';

import type {
  IconDefinition
} from '@fortawesome/fontawesome-common-types';

import type {
  Reducer
} from '@reduxjs/toolkit';

import type {
  CollapsePanelProps
} from 'antd';

import ClientConfiguration from 'clientConfig';

import type OlMap from 'ol/Map';

import Logger from '@terrestris/base-util/dist/Logger';

import type SHOGunAPIClient from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

import i18n from '../i18n';

import {
  createReducer,
  store
} from '../store/store';

export type ClientPluginLocale = {
  [Property in keyof {
    de: string;
    en: string;
  }]: {
    translation: {
      [key: string]: any;
    };
  };
};

export type ClientPluginComponentProps = {
  map?: OlMap;
  client?: SHOGunAPIClient;
};

export type ClientPluginIntegration = {
  /**
   * The main identifier of the integration point of the plugin.
   */
  placement: string;
};

export type ClientPluginIntegrationToolMenu = ClientPluginIntegration &
  Omit<CollapsePanelProps, 'key' | 'header'> & {
  placement: 'tool-menu';
  /**
   * The label for the plugin in the tool menu.
   */
  label?: string;
  /**
   * The insertion index for the plugin in the tool menu, starting from 0 which is on top.
   */
  insertionIndex?: number;
  /**
   * The icon for the plugin in the tool menu.
   */
  icon?: IconDefinition;
};

export type HeaderPlacementOrientation = 'left' | 'center' | 'right';

export type ClientPluginIntegrationHeader = ClientPluginIntegration & {
  placement: 'header';
  /**
   * The placement orientation for the plugin in the header.
   */
  placementOrientation: HeaderPlacementOrientation;
  /**
   * The insertion index for the plugin in the header, starting from 0 which is on the left.
   */
  insertionIndex?: number;
};

export type ClientPluginIntegrationFeatureInfo = ClientPluginIntegration & {
  placement: 'feature-info';
  /**
   * The list of layer names the plugin component should be rendered for. If not
   * specified, the component will be rendered for all layers.
   */
  layers?: string[];
};

export type ClientPluginIntegrationMap = ClientPluginIntegration & {
  placement: 'map';
};

export type ClientPluginIntegrations = ClientPluginIntegrationToolMenu | ClientPluginIntegrationHeader |
  ClientPluginIntegrationFeatureInfo | ClientPluginIntegrationMap;

export type ClientPlugin = {
  /**
   * The key of the plugin, usually used for internal references (e.g. element class names) only.
   */
  key: string;
  /**
   * The definition of the integration point.
   */
  integration: ClientPluginIntegrations;
  /**
   * The actual component of the plugin.
   */
  component: React.FunctionComponent<ClientPluginComponentProps>;
  /**
   * The i18n definition to be used in the plugin.
   */
  i18n?: ClientPluginLocale;
  /**
   * A set of redux reducers to be used in the plugin.
   */
  reducers?: {
    [key: string]: Reducer;
  };
};

export type ClientPluginInternal = ClientPlugin & {
  wrappedComponent: React.FunctionComponent<ClientPluginComponentProps>;
};

export function isToolMenuIntegration(pluginIntegration: ClientPluginIntegrations): pluginIntegration is ClientPluginIntegrationToolMenu {
  return pluginIntegration && pluginIntegration.placement === 'tool-menu';
}

export function isHeaderIntegration(pluginIntegration: ClientPluginIntegrations): pluginIntegration is ClientPluginIntegrationHeader {
  return pluginIntegration && pluginIntegration.placement === 'header';
}

export function isFeatureInfoIntegration(pluginIntegration: ClientPluginIntegrations): pluginIntegration is ClientPluginIntegrationFeatureInfo {
  return pluginIntegration && pluginIntegration.placement === 'feature-info';
}

export function isMapIntegration(pluginIntegration: ClientPluginIntegrations): pluginIntegration is ClientPluginIntegrationMap {
  return pluginIntegration && pluginIntegration.placement === 'map';
}

export const loadPlugins = async (client: SHOGunAPIClient, map: OlMap) => {
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

    // TODO Check any
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
