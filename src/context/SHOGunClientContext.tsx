import React from 'react';

import SHOGunClient from '@terrestris/shogun-util/dist/service/SHOGunClient';

export type SHOGunClientProviderProps = {
  client: SHOGunClient;
  children: JSX.Element;
};

export const SHOGunClientContext = React.createContext<(SHOGunClient | null)>(null);

export const SHOGunClientProvider: React.FC<SHOGunClientProviderProps> = ({
  client,
  children
}): JSX.Element => {
  return (
    <SHOGunClientContext.Provider
      value={client}
    >
      {children}
    </SHOGunClientContext.Provider>
  );
};

export default SHOGunClientContext;
