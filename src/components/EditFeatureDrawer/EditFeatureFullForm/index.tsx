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

import cloneDeep from 'lodash/cloneDeep';

import moment from 'moment';

import {
  useTranslation
} from 'react-i18next';

import {
  Logger
} from '@terrestris/base-util';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import {
  PropertyFormItemEditConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

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
      featureId: id
    });

    if (
      updatedFeatures?.features[0] &&
      (allowedEditMode.includes('UPDATE') ||
      allowedEditMode.includes('DELETE'))
    ) {
      dispatch(setFeature(updatedFeatures?.features[0]));
    }
    return;
  }, [allowedEditMode, dispatch, executeGetFeature, layer]);

  const update = useCallback(async () => {
    if (!map || !client) {
      return;
    }

    let editFormConfig = layer.get('editFormConfig') as PropertyFormTabConfig<PropertyFormItemEditConfig>[];

    if (editFormConfig.length === 0) {
      Logger.warn(`Layer ${layer.get('name')} has no 'editFormConfig' set`);
      return;
    }

    const properties = cloneDeep(feature?.properties) || {};

    Object.entries(properties).forEach(([key, value]) => {
      const tabConfigs = editFormConfig?.filter(tabCfg => {
        return tabCfg.children?.find(formCfg => formCfg.propertyName === key);
      });

      if (tabConfigs.length > 1) {
        Logger.warn(`Property ${key} is configured in multiple tabs. Is this intended?`);
      }

      if (tabConfigs && tabConfigs[0]) {
        const isDate = tabConfigs[0].children?.find(cfg => {
          return cfg.propertyName === key && cfg.component === 'DATE';
        });

        if (isDate) {
          properties[key] = moment(value);
        }

        const isUpload = tabConfigs[0].children?.find(cfg => {
          return cfg.propertyName === key && cfg.component === 'UPLOAD';
        });

        if (isUpload) {
          properties[key] = [{
            name: value,
            status: 'done'
          }];
        }
      }
    });

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
