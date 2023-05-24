import React, {
  useEffect,
  useState
} from 'react';

import {
  useForm
} from 'antd/lib/form/Form';

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
  PropertyFormItemEditConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import {
  hide as hideEditFeatureDrawer
} from '../../store/editFeatureDrawerOpen';

import MapDrawer, {
  MapDrawerProps
} from '../MapDrawer';

import EditFeatureSwitch from './EditFeatureSwitch';
import EditFeatureTabs from './EditFeatureTabs';

export type EditFeatureDrawerProps = MapDrawerProps & {};

export const EditFeatureDrawer: React.FC<EditFeatureDrawerProps> = ({
  ...passThroughProps
}) => {
  const [tabConfig, setTabConfig] = useState<PropertyFormTabConfig<PropertyFormItemEditConfig>[]>();

  const isDrawerOpen = useAppSelector(state => state.editFeatureDrawerOpen);
  const layerId = useAppSelector(state => state.editFeature.layerId);
  const feature = useAppSelector(state => state.editFeature.feature);

  const [form] = useForm();

  const map = useMap();

  const {
    t
  } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!map || !layerId) {
      return;
    }

    const layer = MapUtil.getLayerByOlUid(map, layerId);

    if (!layer) {
      Logger.warn(`Could not find layer with id ${layerId}`);
      return;
    }

    const editFormConfig = layer.get('editFormConfig') as PropertyFormTabConfig<PropertyFormItemEditConfig>[];

    if (!editFormConfig) {
      Logger.warn(`Layer ${layer.get('name')} has no 'editFormConfig' set`);
      return;
    }

    setTabConfig(editFormConfig);

    const properties = {...feature?.properties};

    Object.entries(properties).forEach(([key, value]) => {
      const tabConfigs = editFormConfig?.filter(tabCfg => {
        return tabCfg.children?.find(formCfg => formCfg.propertyName === key);
      });

      if (tabConfigs.length > 1) {
        Logger.warn(`Property ${key} is configured in multiple tabs. Is this intended?`);
      }

      const isDate = tabConfigs[0].children?.find(cfg => {
        return cfg.propertyName === key && cfg.component === 'DATE';
      });

      if (isDate) {
        properties[key] = moment(value);
      }
    });

    form.setFieldsValue(properties);
  }, [map, layerId, form, feature]);

  const onDrawerClose = (evt: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
    dispatch(hideEditFeatureDrawer());
  };

  return (
    <MapDrawer
      className="map-drawer edit-feature-drawer"
      onClose={onDrawerClose}
      open={isDrawerOpen}
      {...passThroughProps}
      title={t('EditFeatureDrawer.featureEditor')}
    >
      {layerId && !feature &&
        <EditFeatureSwitch />
      }
      {layerId && feature &&
        <EditFeatureTabs
          tabConfig={tabConfig}
          form={form}
        />
      }
    </MapDrawer>
  );
};

export default EditFeatureDrawer;
