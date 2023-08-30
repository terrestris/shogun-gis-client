import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  Alert
} from 'antd';
import {
  useForm
} from 'antd/lib/form/Form';

import {
  Feature
} from 'geojson';

import _cloneDeep from 'lodash/cloneDeep';
import _isNil from 'lodash/isNil';

import moment from 'moment';

import {
  equalTo
} from 'ol/format/filter';

import {
  useTranslation
} from 'react-i18next';

import {
  Logger
} from '@terrestris/base-util';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import {
  PropertyFormItemEditConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';
import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import useExecuteGetFeature from '../../../hooks/useExecuteGetFeature';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import {
  setFeature
} from '../../../store/editFeature';

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

  const [tabConfig, setTabConfig] = useState<PropertyFormTabConfig<PropertyFormItemEditConfig>[]>();
  const [initialValues, setInitialValues] = useState<Record<string, any>>();
  const [errorMsg, setErrorMsg] = useState<string>();

  const allowedEditMode = useAppSelector(
    state => state.editFeature.userEditMode
  );

  const [form] = useForm();
  const map = useMap();
  const dispatch = useAppDispatch();
  const client = useSHOGunAPIClient();

  const reloadFeature = useCallback(async (id: string) => {
    if (!layer || !isWmsLayer(layer)) {
      return;
    }

    const updatedFeatures = await executeGetFeature({
      layer: layer,
      filter: equalTo('id', id)
    });

    if (
      updatedFeatures?.features[0]
    ) {
      dispatch(setFeature(updatedFeatures?.features[0]));
    }
  }, [dispatch, executeGetFeature, layer]);

  const update = useCallback(async () => {
    const imageUrlToBase64 = async (url: string): Promise<string> => {
      // todo: move to util
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
    };

    if (!map || !client) {
      return;
    }

    let editFormConfig = layer.get('editFormConfig') as PropertyFormTabConfig<PropertyFormItemEditConfig>[];

    if (editFormConfig?.length === 0) {
      Logger.warn(`Layer ${layer.get('name')} has no 'editFormConfig' set`);
      return;
    }

    const properties = _cloneDeep(feature?.properties) || {};

    const setPropertiesPromises = Object.entries(properties).map(async ([key, value]) => {
      const tabConfigs = editFormConfig?.filter(tabCfg => {
        return tabCfg.children?.find(formCfg => formCfg.propertyName === key);
      });

      if (tabConfigs.length > 1) {
        Logger.warn(`Property ${key} is configured in multiple tabs. Is this intended?`);
      }

      if (tabConfigs && tabConfigs[0]) {
        const isDate = tabConfigs[0].children?.some(cfg => {
          return cfg.propertyName === key && cfg.component === 'DATE';
        });

        if (isDate) {
          properties[key] = moment(value);
        }

        const isUpload = tabConfigs[0].children?.some(cfg => {
          return cfg.propertyName === key && cfg.component === 'UPLOAD';
        });

        if (isUpload) {
          if (value) {
            try {
              const fileList = JSON.parse(value);
              properties[key] = fileList;
              const filePath = fileList[0].response?.type?.startsWith('image/') ? '/imagefiles/' : '/files/';
              const fileListWithBlob = fileList.map(async (val: any) => {
                const test = {
                  ...val,
                  url: await imageUrlToBase64(`${filePath}${val?.response?.fileUuid}`)
                };
                return test;
              });

              const result = await Promise.all(fileListWithBlob);
              properties[key] = result;
              form.resetFields();
              form.setFieldsValue(properties);

            } catch (error) {
              properties[key] = [];
            }
          } else {
            properties[key] = [];
          }
        }
      }
    });

    await Promise.all(setPropertiesPromises);

    form.resetFields();
    form.setFieldsValue(properties);

    setTabConfig(editFormConfig);
    setInitialValues(properties);
  }, [map, client, layer, feature?.properties, form]);

  useEffect(() => {
    update();
  }, [update]);

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
    const id = idString?.split('.')[1];
    if (id) {
      reloadFeature(id);
    }
  };

  const onSaveError = () => {
    setErrorMsg(t('EditFeatureFullForm.saveErrorMsg'));
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
