import {
  useContext
} from 'react';

import PluginContext from '../context/PluginContext';

import {
  ClientPluginInternal
} from '../plugin';

export const usePlugins = (): ClientPluginInternal[] => {
  const context = useContext(PluginContext);

  return context;
};

export default usePlugins;
