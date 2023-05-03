import { useContext } from 'react';

import PluginContext from '../context/PluginContext';

import { ClientPluginInternal } from '../plugin';

export const usePlugins = (): ClientPluginInternal[] => {
  return useContext(PluginContext);
};

export default usePlugins;
