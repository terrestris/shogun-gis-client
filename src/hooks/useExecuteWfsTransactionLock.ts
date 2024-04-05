import {
  useCallback
} from 'react';

import {
  Feature
} from 'geojson';

import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  WmsLayer
} from '@terrestris/react-util/dist/Util/typeUtils';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from './useSHOGunAPIClient';

export type ExecuteWfsLockOpts = {
  layer: WmsLayer;
  feature: Feature;
};

export const useExecuteWfsLockFeature = () => {
  const client = useSHOGunAPIClient();

  const writeWfsLockFeature = (opts: ExecuteWfsLockOpts) => {
    const featureId = opts.feature.id;
    const featureProperties = opts.feature.properties;

    if (!featureId || !featureProperties) {
      Logger.warn('Either the id of the feature or its properties (or even both) aren\'t available');
      return;
    }

    let id: number;
    if (typeof featureId === 'number') {
      id = featureId;
    } else {
      id = parseInt(featureId.split('.')[1], 10);
    }

    const match = Object.entries(featureProperties).find(([, value]) => (value === id || value === id.toString()));

    if (!match) {
      Logger.warn('Count not detect the id property');
      return;
    }

    const idProperty = match[0];

    const typeName = opts.layer.getSource()?.getParams().LAYERS;

    const lockFeatureDoc = document.createElementNS('http://www.opengis.net/wfs/2.0', 'LockFeature');

    lockFeatureDoc.setAttribute('service', 'WFS');
    lockFeatureDoc.setAttribute('version', '2.0.0');
    // Expiry in seconds.
    lockFeatureDoc.setAttribute('expiry', '300');
    lockFeatureDoc.setAttribute('lockAction', 'SOME');

    const queryElement = document.createElementNS('http://www.opengis.net/wfs/2.0', 'Query');
    queryElement.setAttribute('typeNames', typeName);

    const filterElement = document.createElementNS('http://www.opengis.net/fes/2.0', 'Filter');
    const isEqualToElement = document.createElementNS('http://www.opengis.net/fes/2.0', 'PropertyIsEqualTo');

    const valueReferenceElement = document.createElementNS('http://www.opengis.net/fes/2.0', 'ValueReference');
    const valueReferenceValue = document.createTextNode(idProperty);
    valueReferenceElement.appendChild(valueReferenceValue);

    const literalElement = document.createElementNS('http://www.opengis.net/fes/2.0', 'Literal');
    const literalValue = document.createTextNode(id.toString());
    literalElement.appendChild(literalValue);

    isEqualToElement.appendChild(valueReferenceElement);
    isEqualToElement.appendChild(literalElement);

    filterElement.appendChild(isEqualToElement);

    queryElement.appendChild(filterElement);

    lockFeatureDoc.appendChild(queryElement);

    return lockFeatureDoc;
  };

  const executeWfsLockFeature = useCallback(async (opts: ExecuteWfsLockOpts) => {
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

    const lockFeatureDoc = writeWfsLockFeature({
      layer: opts.layer,
      feature: opts.feature
    });

    if (!lockFeatureDoc) {
      return;
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
      body: new XMLSerializer().serializeToString(lockFeatureDoc)
    });

    if (!response.ok) {
      throw new Error('No successful response while executing a WFS-LockFeature');
    }

    const responseText = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(responseText, 'text/xml');

    // TODO Make detection more robust
    const transactionLockFailed = xmlDoc.getElementsByTagName('wfs:FeaturesNotLocked');

    if (transactionLockFailed.length > 0) {
      throw new Error(`Error while locking a feature: ${responseText}`);
    }

    return responseText;
  }, [client]);

  return executeWfsLockFeature;
};

export default useExecuteWfsLockFeature;
