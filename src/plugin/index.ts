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

export type ClientPlugin = {
  key: string;
  integration?: ClientPluginIntegrationToolMenu | ClientPluginIntegrationHeader;
  component: React.FunctionComponent<ClientPluginComponentProps>;
  i18n?: ClientPluginLocale;
  reducers?: {
    [key: string]: Reducer;
  };
};

export type ClientPluginInternal = ClientPlugin & {
  wrappedComponent: React.FunctionComponent;
};
