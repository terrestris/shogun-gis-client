declare module '*.png';

declare module 'clientConfig' {
  type ClientConfiguration = {
    appPrefix?: string;
  };
  const config: ClientConfiguration;

  export default config;
};
