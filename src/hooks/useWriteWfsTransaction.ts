import {
  useCallback
} from 'react';

import {
  FormInstance
} from 'antd';

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

import useExecuteWfsDescribeFeatureType, {
  isGeometryType
} from './useExecuteWfsDescribeFeatureType';

export type WriteWfsTransactionOpts = {
  layer: WmsLayer;
  upsertFeatures?: OlFeature[];
  deleteFeatures?: OlFeature[];
  form?: FormInstance;
};

export const useWriteWfsTransaction = () => {
  const map = useMap();
  const executeWfsDescribeFeatureType = useExecuteWfsDescribeFeatureType();

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
    }

    return formValues;
  };

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

    const geomProperty = describeFeatureType.featureTypes[0]?.properties
      ?.find(property => isGeometryType(property.type));

    let overallUpdateMode = false;

    if (opts.upsertFeatures) {
      for (const feature of opts.upsertFeatures) {
        const feat = new OlFeature();

        const geometry = feature.getGeometry();

        if (geometry && !isEmpty(geometry.getExtent())) {
          feat.setGeometry(geometry);
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

    const rootNode = transaction.getRootNode() as Element;

    if (overallUpdateMode) {
      const lockId = document.createElementNS('http://www.opengis.net/wfs', 'LockId');
      const lockIdValue = document.createTextNode('GeoServer');
      lockId.appendChild(lockIdValue);
      rootNode.appendChild(lockId);
    }

    return transaction;
  }, [executeWfsDescribeFeatureType, map]);

  return writeWfsTransaction;
};

export default useWriteWfsTransaction;
