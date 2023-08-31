import {
  useCallback
} from 'react';

import {
  FormInstance
} from 'antd';

import ClientConfiguration from 'clientConfig';

import _isObject from 'lodash/isObject';

import {
  isMoment
} from 'moment';

import {
  isEmpty
} from 'ol/extent';
import OlFeature from 'ol/Feature';
import OlFormatWFS, {
  WriteTransactionOptions as OlWriteTransactionOptions
} from 'ol/format/WFS';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import {
  WmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import { isFileConfig } from '../components/EditFeatureDrawer/EditFeatureForm';

import useExecuteWfsDescribeFeatureType, {
  isGeometryType
} from './useExecuteWfsDescribeFeatureType';
import useSHOGunAPIClient from './useSHOGunAPIClient';

export type WriteWfsTransactionOpts = {
  layer: WmsLayer;
  upsertFeatures?: OlFeature[];
  deleteFeatures?: OlFeature[];
  form?: FormInstance;
};

export const useWriteWfsTransaction = () => {
  const map = useMap();
  const executeWfsDescribeFeatureType = useExecuteWfsDescribeFeatureType();
  const client = useSHOGunAPIClient();

  const writeWfsTransaction = useCallback(async (opts: WriteWfsTransactionOpts) => {
    const cleanFormValues = (form: FormInstance) => {
      const formValues = {...form.getFieldsValue()};

      for (const [key, value] of Object.entries(formValues)) {
        // Transform undefined to null values.
        if (value === undefined) {
          formValues[key] = null;
        }

        // Filter out read-only fields (which don't have any field instance associated).
        if (!form.getFieldInstance(key)) {
          delete formValues[key];
        }

        // Transform moments back to iso string.
        if (isMoment(value)) {
          formValues[key] = value.toISOString();
        }

        if (Array.isArray(value) && value.length > 0 && isFileConfig(value[0])) {
          const fileInfoList = value.map(val => ({
            uid: val.uid,
            lastModified: val.lastModified,
            name: val.name,
            type: val.type,
            url: `${client?.getBasePath()}files/${val.response.fileUuid}`,
            response: {
              id: val.response?.id,
              created: val.response?.created,
              fileName: val.response?.fileName,
              fileType: val.response?.fileType,
              fileUuid: val.response?.fileUuid
            }
          }));
          formValues[key] = JSON.stringify(fileInfoList);
        }
      }
      return formValues;
    };

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

    const geomProperty = describeFeatureType.featureTypes[0]?.properties
      ?.find(property => isGeometryType(property.type));

    let overallUpdateMode = false;

    if (opts.upsertFeatures) {
      for (const feature of opts.upsertFeatures) {
        const feat = new OlFeature();

        const geometry = feature.getGeometry()?.clone();

        if (geometry && !isEmpty(geometry.getExtent())) {
          feat.set(geomProperty?.name || 'geom', geometry);
          feat.setGeometryName(geomProperty?.name || 'geom');
        }

        if (opts.form) {
          feat.setProperties(cleanFormValues(opts.form));
        }

        const updateMode = !!feature.getId();

        if (updateMode && !overallUpdateMode) {
          overallUpdateMode = true;
        }

        if (updateMode) {
          feat.setId(feature.getId());
        }

        if (updateMode) {
          updates.push(feat);
        } else {
          inserts.push(feat);
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
  }, [client, executeWfsDescribeFeatureType, map]);

  return writeWfsTransaction;
};

export default useWriteWfsTransaction;
