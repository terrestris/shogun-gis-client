import type {
  IconDefinition
} from '@fortawesome/fontawesome-common-types';

import type {
  Reducer
} from '@reduxjs/toolkit';

import { CollapsePanelProps } from 'antd';
import type OlMap from 'ol/Map';

import type SHOGunAPIClient from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

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

export type ClientPluginIntegrations = ClientPluginIntegrationToolMenu | ClientPluginIntegrationHeader | ClientPluginIntegrationFeatureInfo;

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
