import React from 'react';

import {
  Tabs
} from 'antd';

import { t } from 'i18next';
import {
  Tab
} from 'rc-tabs/lib/interface';

import { Logger } from '@terrestris/base-util';

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

import EditFeatureForm from './EditFeatureForm';

import { EditFeatureSwitch } from './EditFeatureSwitch';

export type EditFeatureDrawerProps = MapDrawerProps & {};

export const EditFeatureDrawer: React.FC<EditFeatureDrawerProps> = ({
  ...passThroughProps
}) => {

  const isDrawerOpen = useAppSelector(state => state.editFeatureDrawerOpen);
  const layerId = useAppSelector(state => state.editFeature.layerId);
  const feature = useAppSelector(state => state.editFeature.feature);

  const map = useMap();

  const dispatch = useAppDispatch();

  if (!map || !layerId) {
    return <></>;
  }

  const layer = MapUtil.getLayerByOlUid(map, layerId);

  if (!layer) {
    Logger.warn(`Could not find layer with id ${layerId}`);
    return <></>;
  }

  const editFormConfig = layer.get('editFormConfig') as PropertyFormTabConfig<PropertyFormItemEditConfig>[];

  if (!editFormConfig) {
    Logger.warn(`Layer ${layer.get('name')} has no 'editFormConfig' set`);
    return <></>;
  }

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
        <Tabs
          items={editFormConfig.map((config, idx) => {
            return {
              label: config.title,
              key: `${idx}`,
              children: (
                <EditFeatureForm
                  formConfig={config.children}
                  feature={feature}
                />
              )
            } as Tab;
          })}
        />
      }
    </MapDrawer>
  );
};

export default EditFeatureDrawer;
