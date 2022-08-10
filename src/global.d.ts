declare module '*.png';

declare const PROJECT_VERSION: string;
declare const KEYCLOAK_HOST: string;
declare const KEYCLOAK_REALM: string;
declare const KEYCLOAK_CLIENT_ID: string;

declare module 'clientConfig' {
  type PluginConfiguration = {
    name: string;
    resourcePath: string;
    exposedPath: string;
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
    plugins: PluginConfiguration[];
  };
  const config: ClientConfiguration;

  export default config;
};

type Scope = unknown;
type Factory = () => any;
// eslint-disable-next-line @typescript-eslint/naming-convention, camelcase, no-underscore-dangle
declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
// eslint-disable-next-line @typescript-eslint/naming-convention, camelcase, no-underscore-dangle
declare const __webpack_share_scopes__: { default: Scope };
