import {
  useCallback
} from 'react';

import {
  FeatureCollection
} from 'geojson';

import {
  Extent as OlExtent
} from 'ol/extent';
import OlFormatFilter from 'ol/format/filter/Filter';
import OlFormatWFS from 'ol/format/WFS';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  WmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useExecuteWfsDescribeFeatureType, {
  isGeometryType
} from './useExecuteWfsDescribeFeatureType';
import useSHOGunAPIClient from './useSHOGunAPIClient';

export type GetFeatureOpts = {
  /**
   * The layer to generate the WFS GetFeature request for.
   */
  layer: WmsLayer;
  /**
   * The filter to apply to the GetFeature request.
   */
  filter?: OlFormatFilter | Element;
  /**
   * The properties to return for each feature.
   */
  propertyNames?: string[];
  /**
   * Maximum number of features to get.
   */
  maxFeatures?: number;
  /**
   * Extent to use for the BBOX filter. The geometryName option must be set.
   */
  bbox?: OlExtent;
};

export const useExecuteGetFeature = () => {
  const client = useSHOGunAPIClient();
  const map = useMap();
  const executeWfsDescribeFeatureType = useExecuteWfsDescribeFeatureType();

  const executeGetFeature = useCallback(async (opts: GetFeatureOpts, version = '1.1.0') => {
    if (!map) {
      return;
    }

    const describeFeatureType = await executeWfsDescribeFeatureType(opts.layer);

    if (!describeFeatureType) {
      return;
    }

    let url;

    const source = opts.layer.getSource();
    if (source instanceof OlSourceImageWMS) {
      url = source.getUrl();
    }
    if (source instanceof OlSourceTileWMS) {
      const urls = source.getUrls();
      url = urls ? urls[0] : undefined;
    }

    if (!url) {
      return;
    }

    if (url.endsWith('?')) {
      url = url.slice(0, -1);
    }

    // We expect a single feature type here since we filter on the feature type
    // in the describe feature type request.
    const geomProperty = describeFeatureType.featureTypes[0]?.properties
      ?.find(property => isGeometryType(property.type));

    const featureRequest = new OlFormatWFS({version: version}).writeGetFeature({
      srsName: map.getView().getProjection().getCode(),
      featureNS: describeFeatureType.targetNamespace,
      featurePrefix: describeFeatureType.targetPrefix,
      featureTypes: [source?.getParams().LAYERS],
      outputFormat: 'application/json',
      maxFeatures: opts.maxFeatures,
      // Ensure the geometry is always returned.
      propertyNames: (opts.propertyNames && geomProperty?.name) ? [...opts.propertyNames, geomProperty?.name] : undefined,
      bbox: opts.bbox,
      filter: opts.filter instanceof OlFormatFilter ? opts.filter : undefined,
      geometryName: geomProperty?.name
    });

    if (featureRequest instanceof Element && opts.filter instanceof Element) {
      featureRequest.getElementsByTagName('Query')[0].appendChild(opts.filter);
    }

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
      throw new Error('No successful response while executing a WFS-GetFeature');
    }

    return await response.json() as FeatureCollection;
  }, [client, executeWfsDescribeFeatureType, map]);

  return executeGetFeature;
};

export default useExecuteGetFeature;
