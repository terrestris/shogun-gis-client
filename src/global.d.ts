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
    solrBasePath?: string;
    useNominatim?: boolean;
    groupByCategory?: boolean;
    useSolrHighlighting?: boolean;
    defaultUseViewBox?: boolean;
    delay?: number;
    minChars?: number;
    coreName?: string;
    solrQueryConfig?: SolrQueryConfig;
    activateLayerOnClick?: boolean;
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

// todo: remove when react-geo test util types are exported properly
declare module '@terrestris/react-util/dist/Util/rtlTestUtils';
declare module '@terrestris/react-geo/dist/Util/antdTestQueries';

type Scope = unknown;
type Factory = () => any;
// eslint-disable-next-line @typescript-eslint/naming-convention, camelcase, no-underscore-dangle
declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
// eslint-disable-next-line @typescript-eslint/naming-convention, camelcase, no-underscore-dangle
declare const __webpack_share_scopes__: { default: Scope };
