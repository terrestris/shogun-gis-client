import {
  useCallback
} from 'react';

import _isNil from 'lodash/isNil';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from './useSHOGunAPIClient';

export const useConvertImageUrl = () => {
  const client = useSHOGunAPIClient();

  const imageUrlToBase64 = useCallback(async (url: string) => {
    if (_isNil(url)) {
      return Promise.reject();
    }

    const response = await fetch(url, {
      credentials: 'include',
      headers: {
        ...getBearerTokenHeader(client?.getKeycloak())
      }
    });

    const blob = await response.blob();
    return new Promise<string>((onSuccess, onError) => {
      try {
        const reader = new FileReader() ;
        reader.onload = function () { onSuccess(this.result as string); };
        reader.readAsDataURL(blob);
      } catch (e) {
        onError(e);
      }
    });
  }, [client]);

  return imageUrlToBase64;
};

export default useConvertImageUrl;
