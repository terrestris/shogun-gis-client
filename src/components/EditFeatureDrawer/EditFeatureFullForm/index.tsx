import React, {
  ReactNode, useCallback, useEffect, useState
} from 'react';

import {
  Alert, UploadFile
} from 'antd';
import { useForm } from 'antd/lib/form/Form';

import dayjs from 'dayjs';
import { Feature } from 'geojson';

import { ValidateErrorEntity } from 'rc-field-form/es/interface';

import { useTranslation } from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  isWmsLayer, WmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import ShogunFile from '@terrestris/shogun-util/dist/model/File';
import {
  PropertyFormItemEditConfig, PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useConvertImageUrl from '../../../hooks/useConvertImageUrl';
import useExecuteGetFeature from '../../../hooks/useExecuteGetFeature';
import useLocalize from '../../../hooks/useLocalize';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import { setFeature } from '../../../store/editFeature';

import { isFileConfig } from '../EditFeatureForm';
import EditFeatureGeometryToolbar from '../EditFeatureGeometryToolbar';
import EditFeatureTabs from '../EditFeatureTabs';
import EditFeatureToolbar from '../EditFeatureToolbar';

export type EditFeatureFullFormProps = {
  feature: Feature;
  layer: WmsLayer;
};

export const EditFeatureFullForm: React.FC<EditFeatureFullFormProps> = ({
  feature,
  layer
}) => {
  const {
    t
  } = useTranslation();
  const executeGetFeature = useExecuteGetFeature();
  const imageUrlToBase64 = useConvertImageUrl();

  const [tabConfig, setTabConfig] = useState<PropertyFormTabConfig<PropertyFormItemEditConfig>[]>();
  const [initialValues, setInitialValues] = useState<Record<string, any>>();
  const [errorMsg, setErrorMsg] = useState<string | ReactNode>();

  const [form] = useForm();
  const map = useMap();
  const dispatch = useAppDispatch();
  const client = useSHOGunAPIClient();
  const localize = useLocalize();

  const reloadFeature = useCallback(async (id: string) => {
    if (!layer || !isWmsLayer(layer)) {
      return;
    }

    const root = document.implementation.createDocument(null, 'root');
    const filter = root.createElement('Filter');
    const resourceId = root.createElement('ResourceId');
    resourceId.setAttribute('rid', id);
    filter.appendChild(resourceId);
    root.documentElement.appendChild(filter);

    const updatedFeatures = await executeGetFeature({
      layer: layer,
      filter: filter
    },
    '2.0.0');

    if (
      updatedFeatures?.features[0]
    ) {
      dispatch(setFeature(updatedFeatures?.features[0]));
    }
  }, [dispatch, executeGetFeature, layer]);

  const update = useCallback(async () => {
    if (!map || !client) {
      return;
    }

    const editFormConfig = layer.get('editFormConfig') as PropertyFormTabConfig<PropertyFormItemEditConfig>[];

    if (editFormConfig?.length === 0) {
      Logger.warn(`Layer ${localize(layer.get('name'))} has no 'editFormConfig' set`);
      return;
    }

    const properties = structuredClone(feature?.properties) || {};

    const setPropertiesPromises = Object.entries(properties).map(async ([key, value]) => {
      const tabConfigs = editFormConfig?.filter(tabCfg => {
        return tabCfg.children?.find(formCfg => formCfg.propertyName === key);
      });

      if (tabConfigs?.length > 1) {
        Logger.warn(`Property ${key} is configured in multiple tabs. Is this intended?`);
      }

      if (tabConfigs && tabConfigs[0]) {
        const isDate = tabConfigs[0].children?.some(cfg => {
          return cfg.propertyName === key && cfg.component === 'DATE';
        });

        if (isDate) {
          const parsedDate = dayjs(value);

          if (parsedDate.isValid()) {
            properties[key] = parsedDate;
          } else {
            Logger.warn('Could not parse date');
            properties[key] = null;
          }
        }

        const isUpload = tabConfigs[0].children?.some(cfg => {
          return cfg.propertyName === key && cfg.component === 'UPLOAD';
        });

        if (isUpload) {
          if (value) {
            try {
              const parsedJson = JSON.parse(value);
              if (!isFileConfig(parsedJson[0])) {
                throw new Error('File config is no valid SHOGun file.');
              }
              const fileList = parsedJson as UploadFile<ShogunFile>[];
              properties[key] = fileList;
              const fileListWithBlob = fileList.map(async (val: any) => {
                const isImageFile = fileList[0].response?.fileType?.startsWith('image/');
                const thumbUrl = isImageFile ?
                  await imageUrlToBase64(`${client.getBasePath()}imagefiles/${val?.response?.fileUuid}/thumbnail`) : undefined;
                return {
                  ...val,
                  thumbUrl,
                  url: isImageFile ? undefined : val.url
                };
              });

              properties[key] = await Promise.all(fileListWithBlob);
            } catch (error) {
              Logger.error('Could not parse file list from JSON config: ', error);
              properties[key] = [];
            }
          } else {
            properties[key] = [];
          }
        }

        const isReference = tabConfigs[0].children?.some(cfg =>
          cfg.propertyName === key && cfg.component === 'REFERENCE_TABLE');

        if (isReference) {
          try {
            properties[key] = JSON.parse(properties[key]);
          } catch (error) {
            Logger.warn('Could not parse the input for the REFERENCE_TABLE', error);
          }
        }
      }
    });

    await Promise.all(setPropertiesPromises);

    setInitialValues(properties);
    form.resetFields();
    form.setFieldsValue(properties);

    setTabConfig(editFormConfig);
  }, [map, client, layer, feature?.properties, form, imageUrlToBase64, localize]);

  useEffect(() => {
    update();
  }, [update]);

  const formatErrorMessage = (error: ValidateErrorEntity): React.ReactNode => {
    const collectedFieldErrors: string[] = [];
    const errorFields = error.errorFields || [];

    errorFields.forEach((field) => {
      if (Array.isArray(field.errors)) {
        collectedFieldErrors.push(...field.errors);
      }
    });

    return collectedFieldErrors.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index !== collectedFieldErrors.length - 1 && <br/>}
      </React.Fragment>
    ));
  };

  const onSaveSuccess = (responseText?: string) => {
    if (!responseText) {
      return;
    }
    setErrorMsg(undefined);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(responseText, 'text/xml');

    // get feature id from response
    const featureId = xmlDoc.getElementsByTagName('ogc:FeatureId');
    const idString = featureId.item(0)?.getAttribute('fid');
    if (idString === 'none') {
      const featId = feature.id;
      if (!featId) {
        return;
      }
      reloadFeature((featId as string));
    } else if (idString) {
      reloadFeature(idString);
    }
  };

  const onSaveError = (error?: unknown) => {
    if (typeof error === 'object' && error !== null && 'errorFields' in error) {
      const formattedErrorMessage = formatErrorMessage(
        error as ValidateErrorEntity
      );
      setErrorMsg(formattedErrorMessage);
    } else if (typeof error === 'string') {
      setErrorMsg(error);
    } else {
      setErrorMsg(t('EditFeatureFullForm.saveErrorMsg'));
    }
  };

  const onDeleteSuccess = () => {
    setErrorMsg(undefined);
    dispatch(setFeature(null));
  };

  const onDeleteError = () => {
    setErrorMsg(t('EditFeatureFullForm.deleteErrorMsg'));
  };

  return (
    <>
      <EditFeatureGeometryToolbar
        feature={feature}
      />
      {
        errorMsg && (
          <Alert
            className="error-alert"
            message={errorMsg}
            type="error"
            showIcon
          />
        )
      }
      <EditFeatureToolbar
        feature={feature}
        layer={layer}
        form={form}
        onSaveSuccess={onSaveSuccess}
        onSaveError={onSaveError}
        onDeleteSuccess={onDeleteSuccess}
        onDeleteError={onDeleteError}
      />
      <EditFeatureTabs
        tabConfig={tabConfig}
        initialValues={initialValues}
        form={form}
      />
    </>
  );
};

export default EditFeatureFullForm;
