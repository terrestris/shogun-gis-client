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
  };
  type ClientConfiguration = {
    shogunBase?: string;
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
    featureEditRoles?: FeatureEditConfiguration;
    wfsLockFeatureEnabled?: boolean;
  };
  const config: ClientConfiguration;

  export default config;
};

// todo: remove when react-geo test util types are exported properly
declare module '@terrestris/react-geo/dist/Util/rtlTestUtils';
declare module '@terrestris/react-geo/dist/Util/antdTestQueries';

type Scope = unknown;
type Factory = () => any;
// eslint-disable-next-line @typescript-eslint/naming-convention, camelcase, no-underscore-dangle
declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
// eslint-disable-next-line @typescript-eslint/naming-convention, camelcase, no-underscore-dangle
declare const __webpack_share_scopes__: { default: Scope };
