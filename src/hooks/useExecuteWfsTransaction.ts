import {
  useCallback
} from 'react';

import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  WmsLayer
} from '@terrestris/react-util/dist/Util/typeUtils';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from './useSHOGunAPIClient';

export type ExecuteWfsTransactionOpts = {
  layer: WmsLayer;
  transaction: Node;
};

export const useExecuteWfsTransaction = () => {
  const client = useSHOGunAPIClient();

  // TODO Make detection more robust
  const isFailed = (xmlDoc: Document) => {
    const errorTagNameCandidates = [
      'wfs:FAILED',
      'ows:ExceptionReport'
    ];

    return errorTagNameCandidates.some(candidate =>
      xmlDoc.getElementsByTagName(candidate).length > 0);
  };

  const executeWfsTransaction = useCallback(async (opts: ExecuteWfsTransactionOpts) => {
    let url;

    const source = opts.layer.getSource();
    if (source instanceof OlSourceImageWMS) {
      url = source.getUrl();
    }
    if (source instanceof OlSourceTileWMS) {
      const urls = source.getUrls();
      url = urls ? urls[0] : undefined;
    }

    if (!url) {
      return;
    }

    if (url.endsWith('?')) {
      url = url.slice(0, -1);
    }

    const defaultHeaders = {
      'Content-Type': 'application/xml'
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: opts.layer?.get('useBearerToken') ? {
        ...defaultHeaders,
        ...getBearerTokenHeader(client?.getKeycloak())
      } : defaultHeaders,
      body: new XMLSerializer().serializeToString(opts.transaction)
    });

    if (!response.ok) {
      throw new Error('No successful response while executing a WFS-Transaction');
    }

    const responseText = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(responseText, 'text/xml');

    if (isFailed(xmlDoc)) {
      throw new Error(`Something failed: ${responseText}`);
    }

    return responseText;
  }, [client]);

  return executeWfsTransaction;
};

export default useExecuteWfsTransaction;
