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
import useGetFeatureInfo from '../../../hooks/useGetFeatureInfo';

import {
  setFeature
} from '../../../store/editFeature';

import './index.less';

export type EditFeatureSwitchProps = React.HTMLProps<HTMLDivElement> & {};

export const EditFeatureSwitch: React.FC<EditFeatureSwitchProps> = () => {

  const [layer, setLayer] = useState<WmsLayer>();
  const [loading, setLoading] = useState<boolean>(false);

  const executeWfsDescribeFeatureType = useExecuteWfsDescribeFeatureType();
  const dispatch = useAppDispatch();
  const map = useMap();
  const {
    t
  } = useTranslation();

  const layerId = useAppSelector(state => state.editFeature.layerId);
  const allowedEditMode = useAppSelector(
    state => state.editFeature.userEditMode
  );

  useGetFeatureInfo(layer, (featureCollection) => {
    if (featureCollection.features.length) {
      dispatch(setFeature(featureCollection.features[0]));
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
  };

  return (
    <div className="edit-feature-switch">
      {allowedEditMode === 'FULL' && (
        <>
          <div>{t('EditFeatureSwitch.usageHint')}</div>
          <Button
            loading={loading}
            onClick={onCreateClick}
          >
            {t('EditFeatureSwitch.createFeature')}
          </Button>
        </>
      )}
      {allowedEditMode === 'LIMITED' && (
        <div>{t('EditFeatureSwitch.limitedUsageHint')}</div>
      )}
    </div>
  );
};

export default EditFeatureSwitch;
