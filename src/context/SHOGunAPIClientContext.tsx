import React from 'react';

import { SHOGunAPIClient } from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

export type SHOGunAPIClientProviderProps = {
  client?: SHOGunAPIClient;
  children: JSX.Element;
};

export const SHOGunAPIClientContext = React.createContext<(SHOGunAPIClient | null)>(null);

export const SHOGunAPIClientProvider: React.FC<SHOGunAPIClientProviderProps> = ({
  client,
  children
}): JSX.Element => {
  return (
    <SHOGunAPIClientContext.Provider
      value={client ?? null}
    >
      {children}
    </SHOGunAPIClientContext.Provider>
  );
};

export default SHOGunAPIClientContext;
