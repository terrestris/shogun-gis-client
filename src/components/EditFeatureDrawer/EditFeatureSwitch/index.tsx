import React, {
  useEffect,
  useState
} from 'react';

import {
  Button
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import useExecuteWfsDescribeFeatureType, {
  isGeometryType
} from '../../../hooks/useExecuteWfsDescribeFeatureType';
import useExecuteWfsLockFeature from '../../../hooks/useExecuteWfsTransactionLock';
import useGetFeatureInfo from '../../../hooks/useGetFeatureInfo';

import {
  setFeature
} from '../../../store/editFeature';

import './index.less';

export type EditFeatureSwitchProps = {
  onLockSuccess?: (responseText: string) => void;
  onLockError?: (error: unknown) => void;
  onCreate?: () => void;
};

export const EditFeatureSwitch: React.FC<EditFeatureSwitchProps> = ({
  onLockSuccess = () => {},
  onLockError = () => {},
  onCreate = () => {}
}) => {
  const [layer, setLayer] = useState<WmsLayer>();
  const [loading, setLoading] = useState<boolean>(false);

  const executeWfsDescribeFeatureType = useExecuteWfsDescribeFeatureType();
  const executeWfsLockFeature = useExecuteWfsLockFeature();
  const dispatch = useAppDispatch();
  const map = useMap();
  const {
    t
  } = useTranslation();

  const layerId = useAppSelector(state => state.editFeature.layerId);
  const allowedEditMode = useAppSelector(
    state => state.editFeature.userEditMode
  );

  useGetFeatureInfo(layer, async (featureCollection) => {
    if (
      featureCollection.features.length &&
      (allowedEditMode.includes('UPDATE') || allowedEditMode.includes('DELETE'))
    ) {

      const feature = featureCollection.features[0];

      if (!layer || !feature) {
        return;
      }

      try {
        const response = await executeWfsLockFeature(layer, feature);

        if (!response) {
          return;
        }

        dispatch(setFeature(feature));

        onLockSuccess(response);
      } catch (error) {
        onLockError(error);
      }
    }
  });

  useEffect(() => {
    if (!map || !layerId) {
      return;
    }

    const l = MapUtil.getLayerByOlUid(
      map,
      layerId
    );

    if (!l || !isWmsLayer(l)) {
      return;
    }

    setLayer(l);
  }, [map, layerId]);

  const getGeometryType = async () => {
    if (!map || !layer) {
      return;
    }

    try {
      setLoading(true);

      const describeFeatureType = await executeWfsDescribeFeatureType(layer);

      if (!describeFeatureType) {
        return;
      }

      // We expect a single featureType here.
      const geomProperty = describeFeatureType.featureTypes[0]?.properties
        ?.find(property => isGeometryType(property.type));

      switch (geomProperty?.type) {
        case 'gml:MultiPoint':
          return 'MultiPoint';
        case 'gml:Point':
          return 'Point';
        case 'gml:MultiLineString':
          return 'MultiLineString';
        case 'gml:LineString':
          return 'LineString';
        case 'gml:MultiPolygon':
          return 'MultiPolygon';
        case 'gml:Polygon':
          return 'Polygon';
        default:
          break;
      }
    } catch (error) {
      Logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onCreateClick = async () => {
    const geomType = await getGeometryType();

    if (!geomType) {
      return;
    }

    dispatch(setFeature({
      type: 'Feature',
      properties: {},
      geometry: {
        type: geomType,
        coordinates: []
      }
    }));

    onCreate();
  };

  return (
    <div className="edit-feature-switch">
      {allowedEditMode.includes('CREATE') && (
        <>
          {
            allowedEditMode.includes('UPDATE') &&
            <div>{t('EditFeatureSwitch.usageHint')}</div>
          }
          <Button
            loading={loading}
            onClick={onCreateClick}
          >
            {t('EditFeatureSwitch.createFeature')}
          </Button>
        </>
      )}
      {!allowedEditMode.includes('CREATE') &&
        (allowedEditMode.includes('UPDATE') ||
        allowedEditMode.includes('DELETE')) && (
        <div>{t('EditFeatureSwitch.limitedUsageHint')}</div>
      )}
    </div>
  );
};

export default EditFeatureSwitch;
