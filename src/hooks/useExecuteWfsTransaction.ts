import {
  useCallback
} from 'react';

import ClientConfiguration from 'clientConfig';
import OlFeature from 'ol/Feature';
import OlFormatWFS, {
  WriteTransactionOptions as OlWriteTransactionOptions
} from 'ol/format/WFS';
import OlGeometry from 'ol/geom/Geometry';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import {
  WmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import {
  PropertyFormItemEditConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';
import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useExecuteWfsDescribeFeatureType from './useExecuteWfsDescribeFeatureType';
import useSHOGunAPIClient from './useSHOGunAPIClient';

export type ExecuteWfsTransactionOpts = {
  layer: WmsLayer;
  upsertFeatures?: OlFeature[];
  deleteFeatures?: OlFeature[];
};

export type WriteWfsTransactionOpts = {
  layer: WmsLayer;
  upsertFeatures?: OlFeature[];
  deleteFeatures?: OlFeature[];
};

export const useExecuteWfsTransaction = () => {
  const client = useSHOGunAPIClient();
  const map = useMap();
  const executeWfsDescribeFeatureType = useExecuteWfsDescribeFeatureType();

  const writeWfsTransaction = useCallback(async (opts: WriteWfsTransactionOpts) => {
    if (!map) {
      return;
    }

    const inserts: OlFeature[] = [];
    const updates: OlFeature[] = [];
    const deletes: OlFeature[] = [];

    const describeFeatureType = await executeWfsDescribeFeatureType(opts.layer);

    if (!describeFeatureType) {
      return;
    }

    const editFormConfig = opts.layer.get('editFormConfig') as PropertyFormTabConfig<PropertyFormItemEditConfig>[];

    let overallUpdateMode = false;

    if (opts.upsertFeatures) {
      for (const feature of opts.upsertFeatures) {
        const featureClone = feature.clone();
        featureClone.setId(feature.getId());

        const updateMode = !!featureClone.getId();

        // Filter out read only fields
        for (const [key, value] of Object.entries(featureClone.getProperties())) {
          if (value instanceof OlGeometry) {
            continue;
          }

          // const isConfiguredProperty = editFormConfig.every(tabConfig => !!tabConfig.children?.find(cfg => cfg.propertyName === key));
          const tabConfigsContainingProperty = editFormConfig?.filter(tabCfg => tabCfg.children?.find(formCfg => formCfg.propertyName === key));
          const isReadOnly = tabConfigsContainingProperty.every(tabConfig => !!tabConfig.children?.find(cfg => cfg.propertyName === key && cfg.readOnly));

          const isAdditionalProp = key.startsWith('_') && key.endsWith('_');

          if (isReadOnly) {
            featureClone.unset(key);
          }

          if (isAdditionalProp) {
            featureClone.unset(key);
            featureClone.set(key.slice(1, -1), value);
          }
        }

        if (updateMode && !overallUpdateMode) {
          overallUpdateMode = true;
        }

        if (updateMode) {
          updates.push(featureClone);
        } else {
          inserts.push(featureClone);
        }
      };
    }

    if (opts.deleteFeatures) {
      deletes.push(...opts.deleteFeatures);
    }

    const transactionOpts: OlWriteTransactionOptions = {
      featureNS: describeFeatureType.targetNamespace,
      featurePrefix: describeFeatureType.targetPrefix,
      featureType: opts.layer.getSource()?.getParams().LAYERS,
      srsName: map.getView().getProjection().getCode(),
      version: '1.1.0',
      nativeElements: []
    };

    const format = new OlFormatWFS();

    const transaction = format.writeTransaction(inserts, updates, deletes, transactionOpts);

    if (overallUpdateMode && ClientConfiguration.wfsLockFeatureEnabled) {
      const rootNode = transaction.getRootNode() as Element;
      const lockId = document.createElementNS('http://www.opengis.net/wfs', 'LockId');
      const lockIdValue = document.createTextNode('GeoServer');
      lockId.appendChild(lockIdValue);
      rootNode.appendChild(lockId);
    }

    return transaction;
  }, [executeWfsDescribeFeatureType, map]);

  const executeWfsTransaction = useCallback(async (opts: ExecuteWfsTransactionOpts) => {
    let url;

    const source = opts.layer.getSource();
    if (source instanceof OlSourceImageWMS) {
      url = (source as OlSourceImageWMS).getUrl();
    }
    if (source instanceof OlSourceTileWMS) {
      const urls = (source as OlSourceTileWMS).getUrls();
      url = urls ? urls[0] : undefined;
    }

    if (!url) {
      return;
    }

    if (url.endsWith('?')) {
      url = url.slice(0, -1);
    }

    const transaction = await writeWfsTransaction({
      layer: opts.layer,
      deleteFeatures: opts.deleteFeatures,
      upsertFeatures: opts.upsertFeatures
    });

    if (!transaction) {
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
      body: new XMLSerializer().serializeToString(transaction)
    });

    if (!response.ok) {
      throw new Error('No successful response while executing a WFS-Transaction');
    }

    const responseText = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(responseText, 'text/xml');

    // TODO Make detection more robust
    const transactionStatusFailed = xmlDoc.getElementsByTagName('wfs:FAILED').length > 0 ||
      xmlDoc.getElementsByTagName('ows:ExceptionText').length > 0;

    if (transactionStatusFailed) {
      throw new Error(`Something failed: ${responseText}`);
    }

    return responseText;
  }, [client, writeWfsTransaction]);

  return executeWfsTransaction;
};

export default useExecuteWfsTransaction;
