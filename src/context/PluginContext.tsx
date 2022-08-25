import React from 'react';

import {
  ClientPluginInternal
} from '../plugin';

export type PluginProviderProps = {
  plugins: ClientPluginInternal[];
  children: JSX.Element;
};

export const PluginContext = React.createContext<(ClientPluginInternal[])>([]);

export const PluginProvider: React.FC<PluginProviderProps> = ({
  plugins,
  children
}): JSX.Element => {
  return (
    <PluginContext.Provider
      value={plugins}
    >
      {children}
    </PluginContext.Provider>
  );
};

export default PluginContext;
