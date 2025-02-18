import { useContext } from 'react';

import { SHOGunAPIClient } from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

import SHOGunAPIClientContext from '../context/SHOGunAPIClientContext';

export const useSHOGunAPIClient = (): SHOGunAPIClient | null => {
  return useContext(SHOGunAPIClientContext);
};

export default useSHOGunAPIClient;
