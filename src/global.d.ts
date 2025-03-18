declare module '*.png';

declare const PROJECT_VERSION: string;
declare const KEYCLOAK_HOST: string;
declare const KEYCLOAK_REALM: string;
declare const KEYCLOAK_CLIENT_ID: string;

declare module 'clientConfig' {
  type PluginConfiguration = {
    name?: string;
    resourcePath?: string;
    exposedPaths?: string[];
  };
  export type FeatureEditConfiguration = {
    authorizedRolesForCreate?: (string | RegExp)[];
    authorizedRolesForUpdate?: (string | RegExp)[];
    authorizedRolesForDelete?: (string | RegExp)[];
    authorizedRolesForEditingGeometries?: (string | RegExp)[];
  };
  export type SolrConfig = {
    queryParser?: 'lucene' | 'dismax' | 'edismax';
    rowsPerQuery?: number;
    tagPre?: string;
    tagPost?: string;
    requireFieldMatch?: boolean;
  };
  type SearchConfiguration = {
    nominatimUrl?: string;
    solrBasePath?: string;
    groupByCategory?: boolean;
    useSolrHighlighting?: boolean;
    defaultUseViewBox?: boolean;
    delay?: number;
    minChars?: number;
    coreName?: string;
    solrQueryConfig?: SolrQueryConfig;
    activateLayerOnClick?: boolean;
    searchResultDrawer?: boolean;
  };
  type ClientConfiguration = {
    shogunBase?: string | false;
    keycloak?: {
      enabled?: boolean;
      host?: string;
      realm?: string;
      clientId?: string;
      onLoadAction?: KeycloakOnLoad;
    };
    print?: {
      url?: string;
    };
    plugins?: PluginConfiguration[];
    geoserver?: {
      base?: string;
      upload?: {
        workspace?: string;
        limit?: number;
        authorizedRoles?: string[];
      };
    };
    search?: SearchConfiguration;
    featureEditRoles?: FeatureEditConfiguration;
    wfsLockFeatureEnabled?: boolean;
    documentationButtonVisible?: boolean;
    enableFallbackConfig?: boolean;
    staticAppConfigUrl?: string;
    layerConfigUrl?: string;
  };
  const config: ClientConfiguration;

  export default config;
}
