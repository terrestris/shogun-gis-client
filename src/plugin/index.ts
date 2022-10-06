import type {
  IconDefinition
} from '@fortawesome/fontawesome-common-types';

import type {
  Reducer
} from '@reduxjs/toolkit';

import type OlMap from 'ol/Map';

import type {
  SubMenuType as RcSubMenuType
} from 'rc-menu/lib/interface';

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
  placement: string;
};

export type ClientPluginIntegrationToolMenu = ClientPluginIntegration &
  Omit<RcSubMenuType, 'children' | 'label' | 'key'> & {
  placement: 'tool-menu';
  label?: string;
  insertionIndex?: number;
  icon?: IconDefinition;
  theme?: 'dark' | 'light';
};

export type HeaderPlacementOrientation = 'left' | 'center' | 'right';

export type ClientPluginIntegrationHeader = ClientPluginIntegration & {
  placement: 'header';
  placementOrientation: HeaderPlacementOrientation;
  insertionIndex?: number;
};

export type ClientPluginIntegrationFeatureInfo = ClientPluginIntegration & {
  placement: 'feature-info';
  // TODO Add option to apply plugin for every layer, e.g. a boolean
  layers: string[];
};

export type ClientPluginIntegrations = ClientPluginIntegrationToolMenu | ClientPluginIntegrationHeader | ClientPluginIntegrationFeatureInfo;

export type ClientPlugin = {
  key: string;
  integration: ClientPluginIntegrations;
  component: React.FunctionComponent<ClientPluginComponentProps>;
  i18n?: ClientPluginLocale;
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
