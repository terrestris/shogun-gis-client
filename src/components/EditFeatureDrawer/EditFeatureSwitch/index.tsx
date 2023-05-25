import React, {
  useEffect,
  useState
} from 'react';

import {
  FeatureCollection
} from 'geojson';

import MapBrowserEvent from 'ol/MapBrowserEvent';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  useTranslation
} from 'react-i18next';

import {
  Logger, ObjectUtil, UrlUtil
} from '@terrestris/base-util';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import SimpleButton, {
  SimpleButtonProps
} from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import ToggleButton from '@terrestris/react-geo/dist/Button/ToggleButton/ToggleButton';
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

import './index.less';

export type EditFeatureSwitchProps = SimpleButtonProps & {};

export const EditFeatureSwitch: React.FC<EditFeatureSwitchProps> = ({
  ...passThroughProps
}) => {
  const [createActive, setCreateActive] = useState<boolean>(true);
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

    const lay = MapUtil.getLayerByOlUid(
      map,
      layerId
    );

    if (!lay || !isWmsLayer(lay)) {
      return;
    }

    setLayer(lay);
  }, [map, layerId]);

  const requestFeature = async (evt: MapBrowserEvent<UIEvent>) => {
    if (!map) {
      return;
    }

    const viewResolution = map.getView().getResolution();
    if (!viewResolution) {
      return;
    }
    const source = layer?.getSource();
    const url = source?.getFeatureInfoUrl(
      evt.coordinate,
      viewResolution,
      map.getView().getProjection(),
      { INFO_FORMAT: 'application/json' }
    );

    if (url) {
      try {
        const response = await fetch(url, {
          headers: {
            ...getBearerTokenHeader(client?.getKeycloak())
          }
        });
        const json: FeatureCollection = await response.json();
        // TODO: Feature is always logged by one additional time when function
        // is disabled/enabled, although `un` is performed...
        console.log(json);
        if (json.features.length) {
          dispatch(setFeature(json.features[0]));
        }
      } catch (error) {
        Logger.error('Error:', error);
      }
    }
  };

  const onSelectClick = async (pressed: boolean) => {
    if (!map) {
      return;
    }

    if (pressed) {
      setCreateActive(false);

      if (layerId) {
        map.on('singleclick', requestFeature);
      }
    } else {
      setCreateActive(true);
      dispatch(setFeature(null));

      map.un('singleclick', requestFeature);
    }
  };

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

  // const onSelectClick = () => {
  //   dispatch(setFeature({
  //     type: 'Feature',
  //     properties: {
  //       id: 1,
  //       created: '2022-01-05T10:23:23.000Z',
  //       modified: '2022-02-05T10:23:23.000Z',
  //       isPublic: true,
  //       isEditable: true,
  //       name: 'Peter',
  //       desc: 'This is a test',
  //       type: 'KFZ',
  //       image: 'https://bvb.de'
  //     },
  //     geometry: {
  //       type: 'Point',
  //       coordinates: [1, 0]
  //     }
  //   }));
  // };

  return (
    <div className="createOrEditFeature">
      <ToggleButton
        {...passThroughProps}
        onToggle={onSelectClick}
      >
        {t('EditFeatureDrawer.selectFeature')}
      </ToggleButton>
      <SimpleButton
        {...passThroughProps}
        loading={loading}
        disabled={!createActive}
        onClick={onCreateClick}
      >
        {t('EditFeatureDrawer.createFeature')}
      </SimpleButton>
    </div>
  );
};

export default EditFeatureSwitch;
