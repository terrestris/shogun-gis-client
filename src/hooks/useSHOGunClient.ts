import {
  useContext
} from 'react';

import SHOGunClient from '@terrestris/shogun-util/dist/service/SHOGunClient';

import SHOGunClientContext from '../context/SHOGunClientContext';

export const useSHOGunClient = (): SHOGunClient | null => {
  const context = useContext(SHOGunClientContext);

  return context;
};

export default useSHOGunClient;
