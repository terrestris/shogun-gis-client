import {
  useCallback
} from 'react';

import {
  FeatureCollection
} from 'geojson';

import {
  equalTo
} from 'ol/format/filter';

import OlFormatWFS from 'ol/format/WFS';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import {
  WmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useExecuteWfsDescribeFeatureType from './useExecuteWfsDescribeFeatureType';
import useSHOGunAPIClient from './useSHOGunAPIClient';

export type GetFeatureOpts = {
  layer: WmsLayer;
  // TODO Pass filter instead of featureId
  featureId: string;
};

export const useExecuteGetFeature = () => {
  const client = useSHOGunAPIClient();
  const map = useMap();
  const executeWfsDescribeFeatureType = useExecuteWfsDescribeFeatureType();

  const executeGetFeature = useCallback(async (opts: GetFeatureOpts) => {
    if (!map) {
      return;
    }

    if (!opts.featureId) {
      return;
    }

    const describeFeatureType = await executeWfsDescribeFeatureType(opts.layer);

    if (!describeFeatureType) {
      return;
    }

    let url;

    const source = opts.layer.getSource();
    if (source instanceof OlSourceImageWMS) {
      url = (source as OlSourceImageWMS).getUrl();
    }
    if (source instanceof OlSourceTileWMS) {
      const urls = (source as OlSourceTileWMS).getUrls();
      url = urls ? urls[0] : undefined;
    }

    if (!url) {
      return;
    }

    if (url.endsWith('?')) {
      url = url.slice(0, -1);
    }

    const featureRequest = new OlFormatWFS().writeGetFeature({
      srsName: map.getView().getProjection().getCode(),
      featureNS: describeFeatureType.targetNamespace,
      featurePrefix: describeFeatureType.targetPrefix,
      featureTypes: [source?.getParams().LAYERS],
      outputFormat: 'application/json',
      filter: equalTo('id', opts.featureId)
    });

    const defaultHeaders = {
      'Content-Type': 'application/json'
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: opts.layer?.get('useBearerToken') ? {
        ...defaultHeaders,
        ...getBearerTokenHeader(client?.getKeycloak())
      } : defaultHeaders,
      body: new XMLSerializer().serializeToString(featureRequest)
    });

    if (!response.ok) {
      throw new Error('No successful response');
    }

    return await response.json() as FeatureCollection;
  }, [client, executeWfsDescribeFeatureType, map]);

  return executeGetFeature;
};

export default useExecuteGetFeature;
