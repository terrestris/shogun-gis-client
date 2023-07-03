import Map from 'ol/Map';

import { isWmsLayer } from '@terrestris/react-geo/dist/Util/typeUtils';

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
  let parts = searchValue.trim()
    .replaceAll(/[()\\\-_./\/]/g, ' ')
    .split(' ')
    .map(s => s.trim())
    .filter(s => s !== '');

  const subQueriesPerLayer: SolrQuery[] = [];
  const layers = map.getAllLayers();
  layers.forEach(layer => {
    if (layer.get('searchable') && isWmsLayer(layer)) {
      const searchConfig = layer.get('searchConfig') as SearchConfig;
      const fullLayerName = layer.getSource()?.getParams().LAYERS;
      if (searchConfig?.attributes) {
        // search only configured attributes
        subQueriesPerLayer.push({
          query: `(featureType:"${fullLayerName}" AND (${generateFuzzySearchQuery(parts)}))`,
          fieldList: searchConfig.attributes.join(' ')
        });
      } else {
        // search all attributes of this layer
        subQueriesPerLayer.push({
          query: `(featureType:"${fullLayerName}" AND (${generateFuzzySearchQuery(parts)}))`
        });
      }
    }
  });
  return subQueriesPerLayer;
};

/**
 * Applies operators for wildcard and fuzzy search to a solr (sub)query for multiple search terms.
 * @param searchParts The search input which may consist of multiple search terms, e.g. ["foo", "bar"]
 */
const generateFuzzySearchQuery = (
  searchParts: string[]
): string => {
  const subQueries = searchParts.map(part => {
    return `(${part.trim()}*^3 OR *${part.trim()}*^2 OR ${part.trim()}~1)`;
  });
  return subQueries.join(' AND ');
};

export default generateSolrQuery;
