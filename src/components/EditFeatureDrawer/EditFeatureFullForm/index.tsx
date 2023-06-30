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

import OlFeature from 'ol/Feature';
import {
  equalTo
} from 'ol/format/filter';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlGeometry from 'ol/geom/Geometry';

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
  PropertyFormItemEditReferenceTableConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useAppDispatch from '../../../hooks/useAppDispatch';
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
  showEditToolbar?: boolean;
  // additionalAttributes?: string[];
  onSaveSuccess?: (responseText?: string) => void;
  onSaveError?: (error: unknown) => void;
  onDeleteSuccess?: () => void;
  onDeleteError?: (error: unknown) => void;
};

export const EditFeatureFullForm: React.FC<EditFeatureFullFormProps> = ({
  feature,
  layer,
  showEditToolbar = true,
  // additionalAttributes = [],
  onSaveSuccess = () => {},
  onSaveError = () => {},
  onDeleteSuccess = () => {},
  onDeleteError = () => {}
}) => {
  const {
    t
  } = useTranslation();
  // const executeGetFeature = useExecuteGetFeature();

  const [tabConfig, setTabConfig] = useState<PropertyFormTabConfig<PropertyFormItemEditConfig>[]>();
  const [initialValues, setInitialValues] = useState<Record<string, any>>();
  const [errorMsg, setErrorMsg] = useState<string>();
  const [editFeature, setEditFeature] = useState<OlFeature>();

  const [form] = useForm();
  const map = useMap();
  const dispatch = useAppDispatch();
  const client = useSHOGunAPIClient();

  // const reloadFeature = useCallback(async (id: string) => {
  //   if (!layer || !isWmsLayer(layer)) {
  //     return;
  //   }

  //   const updatedFeatures = await executeGetFeature({
  //     layer: layer,
  //     filter: equalTo('id', id)
  //   });

  //   if (updatedFeatures?.features[0]) {
  //     dispatch(setFeature(updatedFeatures?.features[0]));
  //   }
  // }, [dispatch, executeGetFeature, layer]);

  const update = useCallback(async () => {
    if (!map || !client) {
      return;
    }

    const editFormConfig = layer.get('editFormConfig') as PropertyFormTabConfig<PropertyFormItemEditConfig>[];

    if (editFormConfig?.length === 0) {
      Logger.warn(`Layer ${layer.get('name')} has no 'editFormConfig' set`);
      return;
    }

    const properties = cloneDeep(feature?.properties) || {};

    for (const key of Object.keys(properties)) {
      const tabConfigsContainingProperty = editFormConfig
        ?.filter(tabCfg => tabCfg.children?.find(formCfg => formCfg.propertyName === key));

      if (tabConfigsContainingProperty.length > 1) {
        Logger.warn(`Property ${key} is configured in multiple tabs. Is this intended?`);
      }

      console.log(editFormConfig)
      // TODO the layer itself doesn't know about the additional prop, it's configured in the parent
      // const isAdditionalProp = editFormConfig?.filter(tabCfg => tabCfg.children?.find(formCfg => {
      //   return formCfg.component === 'REFERENCE_TABLE';
      // })); //  && (formCfg as PropertyFormItemEditReferenceTableConfig).referencedLayerPropertyName === key

      // console.log(tabConfigsIncludingProperty)
      // console.log('isAdditionalProp ', isAdditionalProp);

      const isAdditionalProp = key.startsWith('_') && key.endsWith('_');

      if (tabConfigsContainingProperty.length > 0 || isAdditionalProp) {
        continue;
      }

      console.log('delete property ', key);

      delete properties[key];

      // if (tabConfigsIncludingProperty.length === 0) {
      //   delete properties[key];
      // }

      // console.log(tabConfigsIncludingProperty)
      // // TODO filter out props in save button?
      // // TODO for referenced features this assumption is not correct
      // // Filter out properties that aren't configured in the form.
      // const isAvailable = tabConfigsIncludingProperty.every(tc => !!tc.children?.find(cfg => cfg.propertyName === key));
      // // const isAdditionalProp = editFormConfig?.filter(tabCfg => tabCfg.children?.find(formCfg => {
      // //   return formCfg.propertyName === key && formCfg.component === 'REFERENCE_TABLE';
      // // }));

      // console.log(key, isAvailable)
      // // console.log(additionalAttributes);

      // // console.log(!isAvailable && !additionalAttributes.includes(key))
      // // if (!isAvailable && !additionalAttributes.includes(key)) {
      // if (isAvailable || isAdditionalProp) {
      //   continue;
      //   // console.log('delete ', key);
      // }

      // delete properties[key];
    }

    // Object.entries(properties).forEach(([key]) => {
    //   const tabConfigs = editFormConfig?.filter(tabCfg => tabCfg.children?.find(formCfg => formCfg.propertyName === key));

    //   if (tabConfigs.length > 1) {
    //     Logger.warn(`Property ${key} is configured in multiple tabs. Is this intended?`);
    //   }

    //   // TODO filter out props in save button?
    //   // TODO for referenced features this assumption is not correct
    //   // Filter out properties that aren't configured in the form.
    //   const isAvailable = tabConfigs.every(tc => !!tc.children?.find(cfg => cfg.propertyName === key));
    //   const isAdditionalProp = editFormConfig?.filter(tabCfg => tabCfg.children?.find(formCfg => {
    //     return formCfg.propertyName === key && formCfg.component === 'REFERENCE_TABLE';
    //   }));

    //   // console.log(additionalAttributes);

    //   // console.log(!isAvailable && !additionalAttributes.includes(key))
    //   // if (!isAvailable && !additionalAttributes.includes(key)) {
    //   if (isAvailable) {
    //     // console.log('delete ', key);

    //     delete properties[key];
    //   }
    // });

    const initFormValues = Object.entries(properties)
      .map(([key, value]) => {
        const tabConfigs = editFormConfig?.filter(tabCfg => tabCfg.children?.find(formCfg => formCfg.propertyName === key));

        if (tabConfigs && tabConfigs.length > 0) {
          const isDate = tabConfigs.every(tc => !!tc.children?.find(cfg => cfg.propertyName === key && cfg.component === 'DATE'));

          if (isDate && value) {
            return [key, moment(value)];
          }

          const isUpload = tabConfigs[0].children?.find(cfg => cfg.propertyName === key && cfg.component === 'UPLOAD');

          if (isUpload && value) {
            return [key, [{
              name: value,
              status: 'done'
            }]];
          }
        }

        return [key, value];
      });

    const format = new OlFormatGeoJSON({
      extractGeometryName: true
    });
    const editFeat = format.readFeature(feature);

    for (const [key, value] of Object.entries(editFeat.getProperties())) {
      if (value instanceof OlGeometry) {
        continue;
      }

      editFeat.unset(key);
    }

    editFeat.setProperties(properties);

    form.resetFields();
    // TODO This breaks some other stuff, right?
    form.setFieldsValue(Object.fromEntries(initFormValues));

    console.log(initFormValues);

    setTabConfig(editFormConfig);
    setInitialValues(Object.fromEntries(initFormValues));
    setEditFeature(editFeat);
  }, [map, client, form, layer, feature]); //additionalAttributes

  useEffect(() => {
    update();
  }, [update]);

  const onSaveSuccessInternal = (responseText?: string) => {
    setErrorMsg(undefined);

    // if (!responseText) {
    //   return;
    // }

    // // Reload only if the feature is in create mode.
    // if (!editFeature || !editFeature.getId()) {
    //   const parser = new DOMParser();
    //   const xmlDoc = parser.parseFromString(responseText, 'text/xml');

    //   // Get feature id from response
    //   const featureId = xmlDoc.getElementsByTagName('ogc:FeatureId');
    //   const idString = featureId.item(0)?.getAttribute('fid');
    //   const id = idString?.split('.')[1];

    //   if (id) {
    //     reloadFeature(id);
    //   }
    // }

    onSaveSuccess(responseText);
  };

  const onSaveErrorInternal = (error: unknown) => {
    setErrorMsg(t('EditFeatureFullForm.saveErrorMsg'));

    onSaveError(error);
  };

  const onDeleteSuccessInternal = () => {
    setErrorMsg(undefined);

    onDeleteSuccess();
  };

  const onDeleteErrorInternal = (error: unknown) => {
    setErrorMsg(t('EditFeatureFullForm.deleteErrorMsg'));

    onDeleteError(error);
  };

  return (
    <>
      {
        (showEditToolbar && editFeature) && (
          <EditFeatureGeometryToolbar
            editFeature={editFeature}
          />
        )
      }
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
      {
        editFeature && (
          <>
            <EditFeatureToolbar
              editFeature={editFeature}
              layer={layer}
              form={form}
              onSaveSuccess={onSaveSuccessInternal}
              onSaveError={onSaveErrorInternal}
              onDeleteSuccess={onDeleteSuccessInternal}
              onDeleteError={onDeleteErrorInternal}
            />
            <EditFeatureTabs
              tabConfig={tabConfig}
              initialValues={initialValues}
              form={form}
              editFeature={editFeature}
              editLayer={layer}
            />
          </>
        )
      }
    </>
  );
};

export default EditFeatureFullForm;
