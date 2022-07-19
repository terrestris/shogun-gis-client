import * as packageInfoClient from '../../package.json';

export const useClientVersion = () => {
  // @ts-ignore
  return packageInfoClient.default.version;
};
