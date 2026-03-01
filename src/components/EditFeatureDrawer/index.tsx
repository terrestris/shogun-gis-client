import React, {
  useEffect,
  useState
} from 'react';

import {
  Alert, Modal
} from 'antd';

import ClientConfiguration from 'clientConfig';

import OlFeature from 'ol/Feature';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useExecuteWfsTransaction from '../../hooks/useExecuteWfsTransaction';
import useLocalize from '../../hooks/useLocalize';
import useWriteWfsTransaction from '../../hooks/useWriteWfsTransaction';

import {
  reset,
  setFormDirty
} from '../../store/editFeature';
import {
  hide as hideEditFeatureDrawer
} from '../../store/editFeatureDrawerOpen';

import MapDrawer, {
  MapDrawerProps
} from '../MapDrawer';

import EditFeatureFullForm from './EditFeatureFullForm';
import EditFeatureSwitch from './EditFeatureSwitch';

import './index.less';

export type EditFeatureDrawerProps = MapDrawerProps;

export const EditFeatureDrawer: React.FC<EditFeatureDrawerProps> = ({
  ...passThroughProps
}) => {
  const {
    t
  } = useTranslation();

  const [layer, setLayer] = useState<WmsLayer>();
  const [isFeatureLocked, setIsFeatureLocked] = useState<boolean>(false);
  const [drawerTitle, setDrawerTitle] = useState<string>(t('EditFeatureDrawer.featureEditor'));

  const isDrawerOpen = useAppSelector(state => state.editFeatureDrawerOpen);
  const layerId = useAppSelector(state => state.editFeature.layerId);
  const feature = useAppSelector(state => state.editFeature.feature);
  const formDirty = useAppSelector(state => state.editFeature.formDirty);

  const map = useMap();
  const dispatch = useAppDispatch();
  const writeWfsTransaction = useWriteWfsTransaction();
  const executeWfsTransaction = useExecuteWfsTransaction();
  const localize = useLocalize();

  useEffect(() => {
    if (!map || !layerId) {
      return;
    }

    const olLayer = MapUtil.getLayerByOlUid(map, layerId);

    if (!olLayer || !isWmsLayer(olLayer)) {
      Logger.warn(`Could not find layer with id ${layerId}`);
      return;
    }

    setDrawerTitle(`${t('EditFeatureDrawer.featureEditor')} - ${localize(olLayer.get('name'))}`);
    setLayer(olLayer);
  }, [map, layerId, t, localize]);

  const releaseLock = async () => {
    if (!layer || !feature || !feature.id || !ClientConfiguration.wfsLockFeatureEnabled) {
      return;
    }

    try {
      const feat = new OlFeature();
      feat.setId(feature.id);

      const transaction = await writeWfsTransaction({
        layer: layer,
        deleteFeatures: [],
        upsertFeatures: [feat]
      });

      if (!transaction) {
        return;
      }

      await executeWfsTransaction({
        layer: layer,
        transaction: transaction
      });
    } catch (error) {
      Logger.error('Error while releasing the lock on the feature: ', error);
    }
  };

  const closeDrawer = async () => {
    await releaseLock();

    dispatch(hideEditFeatureDrawer());
    dispatch(setFormDirty(false));
    dispatch(reset());
    setIsFeatureLocked(false);
  };

  const onDrawerClose = () => {
    if (layer && feature && formDirty) {
      Modal.confirm({
        maskClosable: false,
        title: t('EditFeatureDrawer.closeDrawerWarnTitle'),
        content: t('EditFeatureDrawer.closeDrawerWarnContent'),
        okType: 'danger',
        onOk: closeDrawer
      });
    } else {
      closeDrawer();
    }
  };

  const onLockSuccess = () => {
    setIsFeatureLocked(false);
  };

  const onLockError = () => {
    setIsFeatureLocked(true);
  };

  const onCreate = () => {
    setIsFeatureLocked(false);
  };

  return (
    <MapDrawer
      className="map-drawer edit-feature-drawer"
      onClose={onDrawerClose}
      open={isDrawerOpen}
      shrinkMapOnOpen={false}
      title={drawerTitle}
      {...passThroughProps}
    >
      {
        !layer && (
          <Alert
            title={t('EditFeatureDrawer.noLayerFoundError')}
            type="error"
            showIcon
          />
        )
      }
      {
        isFeatureLocked && (
          <Alert
            title={t('EditFeatureDrawer.isFeatureLockedErrorMsg')}
            type="error"
            showIcon
          />
        )
      }
      {
        layer && layerId && !feature &&
        <EditFeatureSwitch
          layer={layer}
          onLockSuccess={onLockSuccess}
          onLockError={onLockError}
          onCreate={onCreate}
        />
      }
      {
        layer && feature &&
        <EditFeatureFullForm
          feature={feature}
          layer={layer}
        />
      }
    </MapDrawer>
  );
};

export default EditFeatureDrawer;
