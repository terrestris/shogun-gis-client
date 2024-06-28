import {
  useCallback,
  useEffect
} from 'react';

import {
  FeatureCollection
} from 'geojson';

import MapBrowserEvent from 'ol/MapBrowserEvent';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  WmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from './useSHOGunAPIClient';

export const useGetFeatureInfo = (layer?: WmsLayer, onSuccess?: (featureCollection: FeatureCollection) => void, onFailure?: () => void) => {
  const map = useMap();
  const client = useSHOGunAPIClient();

  const onSingleClick = useCallback(async (evt: MapBrowserEvent<MouseEvent>) => {
    if (!map || !layer) {
      return;
    }

    const coords = evt.coordinate;

    const viewResolution = map.getView().getResolution();

    if (!viewResolution) {
      return;
    }

    const source = layer.getSource();
    const url = source?.getFeatureInfoUrl(
      coords,
      viewResolution,
      map.getView().getProjection(),
      {
        INFO_FORMAT: 'application/json',
        BUFFER: 10
      }
    );

    const defaultHeaders = {
      'Content-Type': 'application/json'
    };

    if (!url) {
      return;
    }

    try {
      map.getTargetElement().style.cursor = 'wait';

      const response = await fetch(url, {
        method: 'GET',
        headers: layer.get('useBearerToken') ? {
          ...defaultHeaders,
          ...getBearerTokenHeader(client?.getKeycloak())
        } : defaultHeaders
      });

      if (!response.ok) {
        throw new Error('No successful response');
      }

      const featureCollection: FeatureCollection = await response.json();

      if (onSuccess) {
        onSuccess(featureCollection);
      }
    } catch (error) {
      Logger.error('Error: ', error);

      if (onFailure) {
        onFailure();
      }
    } finally {
      map.getTargetElement().style.cursor = '';
    }
  }, [client, layer, map, onSuccess, onFailure]);

  const onPointerMove = useCallback((evt: MapBrowserEvent<MouseEvent>) => {
    if (!map || !layer) {
      return;
    }

    if (evt.dragging) {
      return;
    }

    const data = layer.getData(evt.pixel);

    if (!(data instanceof Uint8ClampedArray)) {
      return;
    }

    const hit = data && data[3] > 0;

    map.getTargetElement().style.cursor = hit ? 'pointer' : '';
  }, [layer, map]);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.on('pointermove', onPointerMove);
    map.on('singleclick', onSingleClick);

    return () => {
      map.un('pointermove', onPointerMove);
      map.un('singleclick', onSingleClick);
    };
  }, [map, onPointerMove, onSingleClick]);
};

export default useGetFeatureInfo;
