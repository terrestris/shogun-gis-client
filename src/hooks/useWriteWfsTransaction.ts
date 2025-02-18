import {
  useCallback
} from 'react';

import {
  FormInstance
} from 'antd';

import ClientConfiguration from 'clientConfig';

import _cloneDeep from 'lodash/cloneDeep';

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

import {
  WmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import {
  PropertyFormTabConfig,
  PropertyFormItemEditConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import {
  isFileConfig
} from '../components/EditFeatureDrawer/EditFeatureForm';

import useAppSelector from './useAppSelector';
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

export type FileInfoList = {
  uid: string;
  lastModified: number;
  name: string;
  type: string;
  url: string;
  response: {
    id: number;
    created: string;
    fileName: string;
    fileType: string;
    fileUuid: string;
  };
};

export const useWriteWfsTransaction = () => {
  const map = useMap();
  const executeWfsDescribeFeatureType = useExecuteWfsDescribeFeatureType();
  const client = useSHOGunAPIClient();
  const allowedEditMode = useAppSelector(state => state.editFeature.userEditMode);

  const cleanFormValues = useCallback((formValues: Record<string, any>,
    formConfig: PropertyFormTabConfig<PropertyFormItemEditConfig>[], stringify?: boolean) => {
    for (const [key, value] of Object.entries(formValues)) {
      if (Array.isArray(value)) {
        const cleanedValue = value.map(v => cleanFormValues(v, formConfig));
        formValues[key] = stringify ? JSON.stringify(cleanedValue) : cleanedValue;
      }

      // Transform undefined to null values.
      if (value === undefined) {
        formValues[key] = null;
      }

      // Filter out read-only fields.
      const isReadOnly = formConfig.some(cfg => cfg.children
        ?.some(child => child.propertyName === key && child.readOnly));

      if (isReadOnly) {
        delete formValues[key];
      }

      // Transform moments back to iso string.
      if (isMoment(value)) {
        formValues[key] = value.toISOString();
      }

      if (Array.isArray(value) && value.length > 0 && isFileConfig(value[0])) {
        const filePath = value[0].response?.fileType?.startsWith('image/') ? 'imagefiles/' : 'files/';
        const fileInfoList: FileInfoList[] = value.map((val: FileInfoList) => ({
          uid: val.uid,
          lastModified: val.lastModified,
          name: val.name,
          type: val.type,
          url: `${client?.getBasePath()}${filePath}${val.response.fileUuid}`,
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
  }, [client]);

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

    const formConfig = opts.layer.get('editFormConfig') as PropertyFormTabConfig<PropertyFormItemEditConfig>[];

    const geomProperty = describeFeatureType.featureTypes[0]?.properties
      ?.find(property => isGeometryType(property.type));

    let overallUpdateMode = false;

    if (opts.upsertFeatures) {
      for (const feature of opts.upsertFeatures) {
        const feat = new OlFeature();

        const geometry = feature.getGeometry()?.clone();

        if (geometry && !isEmpty(geometry.getExtent()) && allowedEditMode?.includes('EDIT_GEOMETRY')) {
          const geomPropName = geomProperty?.name ?? 'geom';
          feat.set(geomPropName, geometry);
          feat.setGeometryName(geomPropName);
        }

        if (opts.form) {
          feat.setProperties(cleanFormValues(_cloneDeep(opts.form?.getFieldsValue()), formConfig, true));
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
      }
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
  }, [map, allowedEditMode, executeWfsDescribeFeatureType, cleanFormValues]);

  return writeWfsTransaction;
};

export default useWriteWfsTransaction;
