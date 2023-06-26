import Map from 'ol/Map';

import { isWmsLayer } from '@terrestris/react-geo/dist/Util/typeUtils';

import {
  SearchConfig
} from '@terrestris/shogun-util/dist/model/Layer';

export interface SolrQueryProps {
  searchValue: string;
  map: Map;
}

/**
 * Generates a solr search query based on the `searchConfiguration` and `searchable` properties of each layer. This
 * currently considers all layers which are part of the layer tree / map.
 */
export const generateSolrQuery = ({
  searchValue,
  map
}: SolrQueryProps): string => {
  // parse searchValue into an array of search terms,
  // removing special characters and white spaces
  let parts = searchValue.trim()
    .replaceAll(/[()\\\-_./\/]/g, ' ')
    .split(' ')
    .map(s => s.trim())
    .filter(s => s !== '');

  const subQueriesPerLayer: string[] = [];
  const layers = map.getAllLayers();
  layers.forEach(layer => {
    if (layer.get('searchable') && isWmsLayer(layer)) {
      const searchConfig = layer.get('searchConfig') as SearchConfig;
      const fullLayerName = layer.getSource()?.getParams().LAYERS;
      if (searchConfig?.attributes) {
        // search only configured attributes
        subQueriesPerLayer.push(`(featureType:"${fullLayerName}" AND (${generateFuzzySearchQuery(parts, searchConfig.attributes)}))`);
      } else {
        // search all attributes of this layer
        subQueriesPerLayer.push(`(featureType:"${fullLayerName}" AND (${generateFuzzySearchQuery(parts, ['search'])}))`);
      }
    }
  });
  return subQueriesPerLayer.join(' OR ');
};

/**
 * Generates a solr (sub)query for multiple search terms which searches over a list of specified search attributes.
 * @param searchParts The search input which may consist of multiple search terms, e.g. ["foo", "bar"]
 * @param searchAttributes The search attributes, e.g. ["name", "street"]
 */
const generateFuzzySearchQuery = (
  searchParts: string[],
  searchAttributes: string[]
): string => {

  let exactPart = searchAttributes
    .map(a => `${a}:\"${searchParts.join(' ')}\"`)
    .join(' OR ');

  const allPartsQuery = searchAttributes.map(a => {
    const innerPartsQuery = searchParts.map(
      (part: string) => `${a}:${part.trim()}*^3 OR ${a}:*${part.trim()}*^2 OR ${a}:${part.trim()}~1`
    );
    return `(${innerPartsQuery.join(' OR ')})`;
  });

  const fuzzyPart = allPartsQuery.join(' OR ');

  return `(${exactPart}) OR (${fuzzyPart})`;

};

export default generateSolrQuery;
