import React from 'react';

import {
  InputProps
} from 'antd/lib/input';

import Logger from '@terrestris/base-util/dist/Logger';

import useNominatimSearchEngine from '../../hooks/searchEngines/useNominatimSearchEngine';
import useSolrSearchEngine from '../../hooks/searchEngines/useSolrSearchEngine';
import useWfsSearchEngine from '../../hooks/searchEngines/useWfsSearchEngine';
import useAppSelector from '../../hooks/useAppSelector';

import MultiSearch from '../MultiSearch';

export type SearchFieldProps = InputProps;

export const SearchField: React.FC<SearchFieldProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const useNominatim = useAppSelector((state) => state.searchEngines.includes('nominatim'));
  const useSolr = useAppSelector((state) => state.searchEngines.includes('solr'));
  const useWfs = useAppSelector((state) => state.searchEngines.includes('wfs'));

  const wfsSearchEngine = useWfsSearchEngine();
  const solrSearchEngine = useSolrSearchEngine();
  const nominatimSearchEngine = useNominatimSearchEngine();

  const getGeocoderSearchEngine = () => {
    if (useNominatim) {
      return nominatimSearchEngine;
    }
  };

  const getDataSearchEngine = () => {
    // Only allow solr or wfs simultaneously.
    if (useSolr && useWfs) {
      Logger.warn('Both solr and wfs search are configured. Only one of them ' +
        'can be used at the same time.');
      return;
    }

    if (useSolr) {
      return solrSearchEngine;
    }

    if (useWfs) {
      return wfsSearchEngine;
    }
  };

  // At least a single search engine should be configured.
  if (!useNominatim && !useSolr && !useWfs ) {
    Logger.warn('Neither nominatim, solr nor wfs search is configured.');
    return <></>;
  }

  return (
    <div
      className="search"
      aria-label="search-field"
    >
      <MultiSearch
        aria-label="search"
        geocoderSearchEngine={getGeocoderSearchEngine()}
        dataSearchEngine={getDataSearchEngine()}
        {...passThroughProps}
      />
    </div>
  );
};

export default SearchField;
