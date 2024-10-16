import React from 'react';

import {
  InputProps
} from 'antd/lib/input';

import logger from '@terrestris/base-util/dist/Logger';

import useAppSelector from '../../hooks/useAppSelector';
import BasicNominatimSearch from '../BasicNominatimSearch';
import MultiSearch from '../MultiSearch';

import './index.less';

export type SearchFieldProps = InputProps;

export const SearchField: React.FC<SearchFieldProps> = (): JSX.Element => {

  const useNominatim = useAppSelector((state) => state.searchEngines.includes('nominatim'));
  const useSolr = useAppSelector((state) => state.searchEngines.includes('solr'));

  if (!useNominatim && !useSolr) {
    logger.warn('Neither nominatim nor solr search is configured.');
    return <></>;
  }

  return (
    <div
      className="search"
      aria-label='search-field'
    >
      {
        useSolr ?
          <MultiSearch
            aria-label='search'
            useNominatim={useNominatim}
          /> :
          <BasicNominatimSearch
            aria-label='search'
          />
      }
    </div>
  );
};

export default SearchField;
