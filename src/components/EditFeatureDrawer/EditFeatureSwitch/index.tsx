import React, {
  useEffect,
  useState
} from 'react';

import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  useTranslation
} from 'react-i18next';

import {
  Logger,
  UrlUtil
} from '@terrestris/base-util';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import SimpleButton from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import { getBearerTokenHeader } from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import {
  setFeature
} from '../../../store/editFeature';
import EditFeatureButton from '../EditFeatureButton';

import './index.less';

export type EditFeatureSwitchProps = React.HTMLProps<HTMLDivElement> & {};

export const EditFeatureSwitch: React.FC<EditFeatureSwitchProps> = () => {

  const [layer, setLayer] = useState<WmsLayer>();
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const map = useMap();
  const client = useSHOGunAPIClient();
  const {
    t
  } = useTranslation();

  const layerId = useAppSelector(state => state.editFeature.layerId);

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

      let url;
      if (layer.getSource() instanceof OlSourceImageWMS) {
        url = (layer.getSource() as OlSourceImageWMS).getUrl();
      }
      if (layer.getSource() instanceof OlSourceTileWMS) {
        const urls = (layer.getSource() as OlSourceTileWMS).getUrls();
        url = urls ? urls[0] : undefined;
      }

      if (!url) {
        return;
      }

      if (url.endsWith('?')) {
        url = url.slice(0, -1);
      }

      const params = {
        SERVICE: 'WFS',
        REQUEST: 'DescribeFeatureType',
        VERSION: '2.0.0',
        OUTPUTFORMAT: 'application/json',
        TYPENAMES: layer.getSource()?.getParams().LAYERS
      };

      const defaultHeaders = {
        'Content-Type': 'application/json'
      };

      const response = await fetch(`${url}?${UrlUtil.objectToRequestString(params)}`, {
        method: 'GET',
        headers: layer.get('useBearerToken') ? {
          ...defaultHeaders,
          ...getBearerTokenHeader(client?.getKeycloak())
        } : defaultHeaders
      });

      if (!response.ok) {
        throw new Error('No successful response');
      }

      const responseJson = await response.json();

      const g = responseJson.featureTypes[0]?.properties?.find((property: any) => property.name === 'geom');

      switch (g.type) {
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
    <div className="btn-container">
      {
        layerId &&
        <EditFeatureButton
          layerId={layerId}
        />
      }
      <SimpleButton
        loading={loading}
        onClick={onCreateClick}
      >
        {t('EditFeatureDrawer.createFeature')}
      </SimpleButton>
    </div>
  );
};

export default EditFeatureSwitch;
