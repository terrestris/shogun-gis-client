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
      onLoadAction?: KeycloakOnLoad;
    };
    toolMenu?: {
      measure?: {
        distance?: boolean;
        area?: boolean;
      };
      draw?: {
        point?: boolean;
        line?: boolean;
        polygon?: boolean;
        circle?: boolean;
        rectangle?: boolean;
        annotation?: boolean;
        modify?: boolean;
        download?: boolean;
        upload?: boolean;
        delete?: boolean;
      };
      feature_info?: boolean;
      print?: boolean;
      tree?: boolean;
      permalink?: boolean;
    };
  };
  const config: ClientConfiguration;

  export default config;
};
