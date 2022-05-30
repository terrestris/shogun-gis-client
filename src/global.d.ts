declare module '*.png';

declare module 'clientConfig' {
  type ClientConfiguration = {
    appPrefix?: string;
    loginToGeoServer?: boolean;
  };
  const config: ClientConfiguration;

  export default config;
};
