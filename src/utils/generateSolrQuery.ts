import _groupBy from 'lodash/groupBy';
import Map from 'ol/Map';

import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  SearchConfig
} from '@terrestris/shogun-util/dist/model/Layer';

export interface SolrQueryProps {
  searchValue: string;
  map: Map;
}

type SolrQuery = {
  query: string;
  fieldList?: string;
};

/**
 * Generates a solr search query based on the `searchConfiguration` and `searchable` properties of each layer. This
 * currently considers all layers which are part of the layer tree / map.
 */
export const generateSolrQuery = ({
  searchValue,
  map
}: SolrQueryProps): SolrQuery[] => {
  // parse searchValue into an array of search terms,
  // removing special characters and white spaces
  const parts = searchValue.trim()
    .replaceAll(/[()\\\-_.//]/g, ' ')
    .split(' ')
    .map(s => s.trim())
    .filter(s => s !== '');

  const searchQueries: SolrQuery[] = [];
  const layers = map.getAllLayers().filter(l => l.get('searchable'));
  const groupedLayers = _groupBy(layers, (l) => (l.get('searchConfig') as SearchConfig)?.attributes);

  Object.entries(groupedLayers).forEach(([key, layerList]) => {
    const layerNames = layerList
      .filter(l => isWmsLayer(l))
      .map(l => (l as WmsLayer).getSource()?.getParams()?.LAYERS);

    const featureTypeParts = layerNames.map(layerName => `featureType:"${layerName}"`);
    const featureTypeQuery = featureTypeParts.join(' OR ');

    const query = `(${featureTypeQuery}) AND (${generateSearchQuery(parts)})`;
    searchQueries.push({
      query: query,
      fieldList: key !== 'undefined' ? key.split(',').join(' ') : undefined
    });
  });

  return searchQueries;
};

/**
 * Applies operators for wildcard and fuzzy search to a solr (sub)query for multiple search terms.
 * Also includes exact matches to allow searching for numeric values.
 * @param searchParts The search input which may consist of multiple search terms, e.g. ["foo", "bar"]
 */
const generateSearchQuery = (
  searchParts: string[]
): string => {
  const subQueries = searchParts.map(part => {
    return `(${part.trim()}^4 OR *${part.trim()}*^2 OR ${part.trim()}~1)`;
  });
  return subQueries.join(' AND ');
};

export default generateSolrQuery;
