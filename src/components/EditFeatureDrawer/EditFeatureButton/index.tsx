import React, {
  useCallback, useEffect, useState
} from 'react';

import {
  Button,
  ButtonProps
} from 'antd';
import {
  FeatureCollection
} from 'geojson';
import { Coordinate as OlCoordinate } from 'ol/coordinate';
import { getCenter } from 'ol/extent';
import OlFeature from 'ol/Feature';
import MapBrowserEvent from 'ol/MapBrowserEvent';

import {
  useTranslation
} from 'react-i18next';

import {
  Logger
} from '@terrestris/base-util';

import {
  MapUtil
} from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import { getBearerTokenHeader } from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppDispatch from '../../../hooks/useAppDispatch';

import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';
import {
  setFeature
} from '../../../store/editFeature';

export type EditFeatureButtonProps = Omit<ButtonProps, 'onClick'> & {
  layerId: string;
  feature?: OlFeature;
  requestOnMapClick?: boolean;
  onClick?: () => void;
  title?: string;
};

export const EditFeatureButton: React.FC<EditFeatureButtonProps> = ({
  layerId,
  feature,
  requestOnMapClick = true,
  onClick,
  title,
  ...passThroughProps
}) => {

  const map = useMap();
  const client = useSHOGunAPIClient();

  const [layer, setLayer] = useState<WmsLayer>();

  const {
    t
  } = useTranslation();

  const dispatch = useAppDispatch();

  const requestFeature = useCallback(async (evt: MapBrowserEvent<UIEvent> | OlCoordinate) => {

    if (!map) {
      return;
    }

    let coords;
    if (requestOnMapClick) {
      coords = (evt as MapBrowserEvent<UIEvent>).coordinate;
    } else {
      coords = evt as OlCoordinate;
    }

    const viewResolution = map.getView().getResolution();
    if (!viewResolution) {
      return;
    }
    const source = layer?.getSource();
    const url = source?.getFeatureInfoUrl(
      coords,
      viewResolution,
      map.getView().getProjection(),
      {
        INFO_FORMAT: 'application/json',
        BUFFER: 1000
      }
    );

    const defaultHeaders = {
      'Content-Type': 'application/json'
    };

    if (url) {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: layer?.get('useBearerToken') ? {
            ...defaultHeaders,
            ...getBearerTokenHeader(client?.getKeycloak())
          } : defaultHeaders
        });

        const json: FeatureCollection = await response.json();
        if (json.features.length) {
          dispatch(setFeature(json.features[0]));
        }
      } catch (error) {
        Logger.error('Error:', error);
      }
    }
  }, [client, dispatch, layer, map, requestOnMapClick]);

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

  useEffect(() => {
    if (requestOnMapClick) {
      map?.on('singleclick', requestFeature);
    }

    return () => {
      if (requestOnMapClick) {
        map?.un('singleclick', requestFeature);
      }
    };
  }, [map, requestFeature, requestOnMapClick]);

  const onBtnClick = () => {

    if (!map) {
      return;
    }

    if (onClick) {
      onClick();
    }

    if (!requestOnMapClick) {
      const extent = feature?.getGeometry()?.getExtent();
      if (extent) {
        requestFeature(getCenter(extent));
      }
    }
  };

  return (
    <Button
      type="primary"
      onClick={onBtnClick}
      {...passThroughProps}
    >
      {title ?? t('EditFeatureButton.title')}
    </Button>
  );
};

export default EditFeatureButton;
