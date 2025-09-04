import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

import type {
  Middleware,
  Reducer
} from '@reduxjs/toolkit';

import { CollapsePanelProps } from 'antd';
import type OlMap from 'ol/Map';

import { SHOGunAPIClient } from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

export type ClientPluginLocale = Record<string, {
  translation: Record<string, any>;
}>;

export type PluginConfig = {
  disabled?: boolean;
};

export type ClientPluginComponentProps<T extends PluginConfig = PluginConfig> = {
  map?: OlMap;
  client?: SHOGunAPIClient;
  config?: T;
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

export type FooterPlacementOrientation = 'left' | 'right';

export type ClientPluginIntegrationFooter = ClientPluginIntegration & {
  placement: 'footer';
  /**
  * The placement orientation for the plugin in the footer.
  */
  placementOrientation: FooterPlacementOrientation;
  /**
  * The insertion index for the plugin in the footer, starting from 0 which is on the left.
  */
  insertionIndex?: number;
};

export type ClientPluginIntegrationCookieConsent = ClientPluginIntegration & {
  placement: 'cookie-banner';
};

export type ClientPluginIntegrations =
  | ClientPluginIntegrationToolMenu
  | ClientPluginIntegrationHeader
  | ClientPluginIntegrationFeatureInfo
  | ClientPluginIntegrationMap
  | ClientPluginIntegrationFooter
  | ClientPluginIntegrationCookieConsent;

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
  reducers?: Record<string, Reducer>;
  /**
   * A set of middlewares that should be added to the store
   * especially useful for usage of redux-rtk
   */
  middlewares?: Middleware[];
};

export type ClientPluginInternal = ClientPlugin & {
  wrappedComponent: React.FunctionComponent<ClientPluginComponentProps>;
};

export function isToolMenuIntegration(
  pluginIntegration: ClientPluginIntegrations
): pluginIntegration is ClientPluginIntegrationToolMenu {
  return pluginIntegration && pluginIntegration.placement === 'tool-menu';
}

export function isHeaderIntegration(
  pluginIntegration: ClientPluginIntegrations
): pluginIntegration is ClientPluginIntegrationHeader {
  return pluginIntegration && pluginIntegration.placement === 'header';
}

export function isFeatureInfoIntegration(
  pluginIntegration: ClientPluginIntegrations
): pluginIntegration is ClientPluginIntegrationFeatureInfo {
  return pluginIntegration && pluginIntegration.placement === 'feature-info';
}

export function isMapIntegration(
  pluginIntegration: ClientPluginIntegrations
): pluginIntegration is ClientPluginIntegrationMap {
  return pluginIntegration && pluginIntegration.placement === 'map';
}

export function isFooterIntegration(pluginIntegration: ClientPluginIntegrations): pluginIntegration is ClientPluginIntegrationFooter {
  return pluginIntegration && pluginIntegration.placement === 'footer';
}

export function isCookieConsentIntegration(
  pluginIntegration: ClientPluginIntegrations
): pluginIntegration is ClientPluginIntegrationCookieConsent {
  return pluginIntegration && pluginIntegration.placement === 'cookie-banner';
}
