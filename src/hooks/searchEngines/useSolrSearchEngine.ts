import {
  useCallback
} from 'react';

import ClientConfiguration from 'clientConfig';

import _groupBy from 'lodash/groupBy';

import {
  Extent as OlExtent
} from 'ol/extent';
import OlFeature from 'ol/Feature';
import OlFormatWKT from 'ol/format/WKT';
import OlGeometry from 'ol/geom/Geometry';

import Logger from '@terrestris/base-util/dist/Logger';
import {
  MapUtil
} from '@terrestris/ol-util/dist/MapUtil/MapUtil';

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

import generateSolrQuery from '../../utils/generateSolrQuery';

import useExecuteSolrQuery from '../useExecuteSolrQuery';

export type DataSearchResult = Record<string, string | string[] | number[]>;

export type HighlightingResult = Record<string, string>;

export type HighlightingResults = Record<string, HighlightingResult>;

export const isFulfilled = <T, >(p: PromiseSettledResult<T>): p is PromiseFulfilledResult<T> => p.status === 'fulfilled';
export const isRejected = <T, >(p: PromiseSettledResult<T>): p is PromiseRejectedResult => p.status === 'rejected';

export const useSolrSearchEngine = () => {
  const map = useMap();
  const executeSolrQuery = useExecuteSolrQuery();

  const replaceTemplates = useCallback((template: string, data: DataSearchResult): string => {
    const pattern = /{\s*(\w+?)\s*}/g; // regex for template string with values in brackets, e.g. {name}
    return template.replace(pattern, (_, token) => data[token]?.toString() || '');
  }, []);

  const getFeatureTitle = useCallback((value: string, dsResult: DataSearchResult, highlightResult?: HighlightingResult): string => {
    if (!map) {
      return '';
    }

    const layer = MapUtil.getLayerByNameParam(map, dsResult.featureType[0] as string);
    const searchConfig = layer?.get('searchConfig') as SearchConfig;

    const blacklistedAttributes = [
      'category',
      'id',
      'featureType',
      'geometry',
      'search'
    ];

    let title = '';

    if (searchConfig?.displayTemplate) {
      return replaceTemplates(searchConfig.displayTemplate, dsResult);
    }

    if (highlightResult) {
      const filteredHighlightKeys = Object.keys(highlightResult).filter(key => !blacklistedAttributes.includes(key));
      if (filteredHighlightKeys.length > 0) {
        const highlightValue = highlightResult[filteredHighlightKeys[0]];
        return `${highlightValue} [${filteredHighlightKeys[0]}]`;
      }
    }

    Object.keys(dsResult)
      .filter(key => !blacklistedAttributes.includes(key))
      .forEach(propKey => {
        const propValue = dsResult[propKey]?.toString();
        if (!title && propValue.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          // show matched value followed by the attribute name in square brackets (e.g. '53111 Bonn [city]')
          title = `${propValue} [${propKey}]`;
        }
      });

    if (!title) {
      // fallback -> should never happen after adding of the valid layer search config
      title = dsResult.id as string;
    }

    return title;
  }, [map, replaceTemplates]);

  const performSolrSearch = useCallback(async (value: string, viewBox?: OlExtent) => {
    if (!map) {
      return;
    }

    const solrBasePath = ClientConfiguration.search?.solrBasePath ?? '/search/query';
    const queriesPerLayer = generateSolrQuery({
      searchValue: value,
      map
    });

    type SolrQueryResponse = ReturnType<typeof executeSolrQuery>;

    const promises: SolrQueryResponse[] = [];

    for (const queryPerLayer of queriesPerLayer) {
      promises.push(executeSolrQuery({
        searchUrl: solrBasePath,
        query: queryPerLayer.query,
        fieldList: queryPerLayer.fieldList,
        rowsPerQuery: ClientConfiguration.search?.solrQueryConfig?.rowsPerQuery,
        queryParser: ClientConfiguration.search?.solrQueryConfig?.queryParser,
        coreName: ClientConfiguration.search?.coreName,
        useSolrHighlighting: ClientConfiguration.search?.useSolrHighlighting,
        tagPre: ClientConfiguration.search?.solrQueryConfig?.tagPre,
        tagPost: ClientConfiguration.search?.solrQueryConfig?.tagPost,
        requireFieldMatch: ClientConfiguration.search?.solrQueryConfig?.requireFieldMatch,
        viewBox: viewBox
      }));
    }

    const results = (await Promise.allSettled(promises))
      .map((settled) => ({
        value: isFulfilled(settled) ? settled.value : undefined,
        reason: isRejected(settled) ? settled.reason : undefined,
        status: settled.status
      }));

    const fulfilledResponses = results.filter(res => res.status === 'fulfilled');
    const rejectedResponses = results.filter(res => res.status === 'rejected');

    rejectedResponses.forEach(res => {
      Logger.error('Error while fetching the solr results for layer ', res.reason);
    });

    const dataResults = fulfilledResponses.flatMap(sR => sR.value?.response?.docs).filter(r => r);
    const hlResults = Object.assign({}, ...fulfilledResponses.map(sr => sr.value?.highlighting));

    const wktFormat = new OlFormatWKT();

    const solrResults: ResultCategory[] = [];

    // 1. group by category or layer title
    let categories;
    if (ClientConfiguration.search?.groupByCategory) {
      categories = _groupBy(dataResults, res => res?.category?.[0]);
    } else {
      const sarchableLayers = map.getAllLayers().filter(l => l.get('searchable'));
      const resultsWithLayerName = dataResults.map(result => {
        const layerTitle = sarchableLayers.filter(l => isWmsLayer(l))
          .find((l) => (l as WmsLayer).getSource()?.getParams()?.LAYERS === result?.featureType?.[0])
          ?.get('name');

        return {
          layerTitle,
          ...result
        } as DataSearchResult;
      });
      categories = _groupBy(resultsWithLayerName, res => res?.layerTitle);
    }

    // 2. build features
    Object.keys(categories).forEach(category => {
      const features = categories[category].map(dsResult => {
        if (!dsResult?.geometry?.[0]) {
          return;
        }
        const id = dsResult.id as string;

        const geometry = wktFormat.readGeometry(dsResult.geometry[0], {
          dataProjection: 'EPSG:4326',
          featureProjection: map.getView().getProjection()
        });
        const olFeat = new OlFeature({
          geometry
        });
        olFeat.set('title', getFeatureTitle(value, dsResult, hlResults?.[id]));
        let ftName;
        if (dsResult.featureType?.[0]) {
          const layer = MapUtil.getLayerByNameParam(map, dsResult.featureType?.[0] as string);
          if (layer) {
            olFeat.set('layer', layer);
            ftName = layer.get('name');
          }
        } else {
          ftName = id.substring(0, id.lastIndexOf('_'));
        }
        olFeat.set('ftName', ftName);
        return olFeat;
      }).filter(f => f) as OlFeature<OlGeometry>[];
      const resultCategory: ResultCategory = {
        title: category,
        features
      };
      solrResults.push(resultCategory);
    });

    return solrResults;
  }, [executeSolrQuery, getFeatureTitle, map]);

  return performSolrSearch;
};

export default useSolrSearchEngine;
