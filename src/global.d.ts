declare module '*.png';

declare const KEYCLOAK_HOST: string;
declare const KEYCLOAK_REALM: string;
declare const KEYCLOAK_CLIENT_ID: string;

declare module 'clientConfig' {
  type ClientConfiguration = {
    shogunBase?: string;
    keycloak?: {
      enabled?: boolean;
      host?: string;
      realm?: string;
      clientId?: string;
    };
  };
  const config: ClientConfiguration;

  export default config;
};
