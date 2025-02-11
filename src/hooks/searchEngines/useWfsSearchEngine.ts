import {
  useCallback
} from 'react';

import {
  Extent as OlExtent
} from 'ol/extent';
import OlFeature from 'ol/Feature';
import {
  like,
  or
} from 'ol/format/filter';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import {
  transformExtent
} from 'ol/proj';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  isWmsLayer,
  WmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import type {
  Category as ResultCategory
} from '@terrestris/react-geo/dist/Panel/SearchResultsPanel/SearchResultsPanel';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import {
  SearchConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useExecuteGetFeature from '../useExecuteGetFeature';

export const isFulfilled = <T, >(p: PromiseSettledResult<T>): p is PromiseFulfilledResult<T> => p.status === 'fulfilled';
export const isRejected = <T, >(p: PromiseSettledResult<T>): p is PromiseRejectedResult => p.status === 'rejected';

export const useWfsSearchEngine = () => {
  const map = useMap();
  const executeGetFeature = useExecuteGetFeature();

  const replaceTemplates = useCallback((template: string, feature: OlFeature): string => {
    // regex for template string with values in brackets, e.g. {name}
    const pattern = /{\s*(\w+?)\s*}/g;
    return template.replace(pattern, (_, token) => feature.getProperties()[token] || '');
  }, []);

  const getFeatureTitle = useCallback((searchValue: string, feature: OlFeature, layer: WmsLayer) => {
    const searchConfig = layer?.get('searchConfig') as SearchConfig;

    if (searchConfig?.displayTemplate) {
      return replaceTemplates(searchConfig.displayTemplate, feature);
    }

    const blacklistedAttributes = [
      'category',
      'id',
      'featureType',
      'geometry',
      'search'
    ];

    for (const [key, value] of Object.entries(feature.getProperties())) {
      if (blacklistedAttributes.includes(key)) {
        continue;
      }

      const propValue = value?.toString();

      if (propValue.toLowerCase().indexOf(searchValue?.toLowerCase()) > -1) {
        // Show matched value followed by the attribute name in square brackets (e.g. '53111 Bonn [city]').
        return `${propValue} [${key}]`;
      }
    }

    // Fallback.
    return feature.getId();
  }, [replaceTemplates]);

  const performWfsSearch = useCallback(async (value: string, viewBox?: OlExtent) => {
    if (!map) {
      return;
    }

    const searchableLayers = map.getAllLayers().filter(l => l.get('searchable'));

    if (searchableLayers.length === 0) {
      Logger.warn('No queryable layer found.');
      return;
    }

    type GetFeatureResponse = ReturnType<typeof executeGetFeature>;

    const promises: GetFeatureResponse[] = [];
    const layers: WmsLayer[] = [];

    for (const searchableLayer of searchableLayers) {
      if (!isWmsLayer(searchableLayer)) {
        Logger.warn('Layer type not supported in search: ', searchableLayer);
        continue;
      }

      const searchConfig = searchableLayer?.get('searchConfig') as SearchConfig | null;

      if (!(searchConfig && searchConfig.attributes)) {
        Logger.warn('No search configuration given for layer: ', searchableLayer);
        continue;
      }

      const filter = searchConfig.attributes.map(attr => {
        return like(attr, `*${value}*`, '*', '.', '!', false);
      });

      promises.push(
        executeGetFeature({
          layer: searchableLayer,
          filter: filter.length === 1 ? filter[0] : or(...filter),
          // BBOX must be in map projection.
          bbox: viewBox ? transformExtent(viewBox, 'EPSG:4326', map.getView().getProjection()) : undefined,
          maxFeatures: 10,
          propertyNames: searchConfig.attributes
        })
      );
      layers.push(searchableLayer);
    }

    const results = (await Promise.allSettled(promises))
      .map((settled, i) => ({
        value: isFulfilled(settled) ? settled.value : undefined,
        reason: isRejected(settled) ? settled.reason : undefined,
        status: settled.status,
        layer: layers[i]
      }));

    const fulfilledResponses = results.filter(res => res.status === 'fulfilled');
    const rejectedResponses = results.filter(res => res.status === 'rejected');

    rejectedResponses.map(res => {
      Logger.error(`Error while fetching the layer search results for layer "${res.layer.get('name')}": `, res.reason);
    });

    const OlFormatGeoJson = new OlFormatGeoJSON();

    const wfsResults: ResultCategory[] = [];

    for (const fulfilledResponse of fulfilledResponses) {
      const features = OlFormatGeoJson.readFeatures(fulfilledResponse.value, {
        featureProjection: map.getView().getProjection()
      });

      features.forEach(feature => {
        feature.set('title', getFeatureTitle(value, feature, fulfilledResponse.layer));
        feature.set('layer', fulfilledResponse.layer);
      });

      wfsResults.push({
        title: fulfilledResponse.layer.get('name'),
        features: features
      });
    }

    return wfsResults;
  }, [executeGetFeature, getFeatureTitle, map]);

  return performWfsSearch;
};

export default useWfsSearchEngine;
