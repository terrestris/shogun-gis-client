import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import { Alert } from 'antd';
import {
  useForm
} from 'antd/lib/form/Form';

import moment from 'moment';

import BaseLayer from 'ol/layer/Base';
import {
  useTranslation
} from 'react-i18next';

import {
  Logger
} from '@terrestris/base-util';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import {
  PropertyFormItemEditConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import {
  reset
} from '../../store/editFeature';
import {
  hide as hideEditFeatureDrawer
} from '../../store/editFeatureDrawerOpen';

import MapDrawer, {
  MapDrawerProps
} from '../MapDrawer';

import EditFeatureSwitch from './EditFeatureSwitch';
import EditFeatureTabs from './EditFeatureTabs';
import ResetButton from './ResetButton';
import SaveButton from './SaveButton';

export type EditFeatureDrawerProps = MapDrawerProps & {};

export const EditFeatureDrawer: React.FC<EditFeatureDrawerProps> = ({
  ...passThroughProps
}) => {
  const {
    t
  } = useTranslation();

  const [tabConfig, setTabConfig] = useState<PropertyFormTabConfig<PropertyFormItemEditConfig>[]>();
  const [layer, setLayer] = useState<BaseLayer>();
  const [drawerTitle, setDrawerTitle] = useState<string>(t('EditFeatureDrawer.featureEditor'));
  const [initialValues, setInitialValues] = useState<Record<string, any>>();

  const isDrawerOpen = useAppSelector(state => state.editFeatureDrawerOpen);
  const layerId = useAppSelector(state => state.editFeature.layerId);
  const feature = useAppSelector(state => state.editFeature.feature);

  const [form] = useForm();

  const map = useMap();

  const dispatch = useAppDispatch();

  const update = useCallback(() => {
    if (!map || !layerId) {
      return;
    }

    const olLayer = MapUtil.getLayerByOlUid(map, layerId);

    if (!olLayer) {
      Logger.warn(`Could not find layer with id ${layerId}`);
      return;
    }

    const editFormConfig = olLayer.get('editFormConfig') as PropertyFormTabConfig<PropertyFormItemEditConfig>[];

    if (!editFormConfig) {
      Logger.warn(`Layer ${olLayer.get('name')} has no 'editFormConfig' set`);
      return;
    }

    setTabConfig(editFormConfig);
    setDrawerTitle(`${t('EditFeatureDrawer.featureEditor')} - ${olLayer.get('name')}`);
    setLayer(olLayer);

    const properties = { ...feature?.properties };

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

    setInitialValues(properties);
    form.resetFields();
    form.setFieldsValue(properties);
  }, [map, layerId, form, feature, t]);

  useEffect(() => {
    update();
  }, [update]);

  const onDrawerClose = (evt: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
    dispatch(hideEditFeatureDrawer());
    dispatch(reset());
  };

  return (
    <MapDrawer
      className="map-drawer edit-feature-drawer"
      onClose={onDrawerClose}
      open={isDrawerOpen}
      title={drawerTitle}
      {...passThroughProps}
    >
      {
        !layer &&
        <Alert
          message={t('EditFetureDrawer.noLayerFoundError')}
          type="error"
          showIcon
        />
      }
      {
        layer && layerId && !feature &&
        <EditFeatureSwitch />
      }
      {
        layer && layerId && feature &&
        <>
          <ResetButton
            form={form}
          />
          <SaveButton
            form={form}
            layerId={layerId}
          />
          <EditFeatureTabs
            tabConfig={tabConfig}
            initialValues={initialValues}
            form={form}
          />
        </>
      }
    </MapDrawer>
  );
};

export default EditFeatureDrawer;
