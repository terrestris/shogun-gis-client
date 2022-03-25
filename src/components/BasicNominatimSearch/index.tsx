import React from 'react';

import NominatimSearch, {
  NominatimSearchProps
} from '@terrestris/react-geo/dist/Field/NominatimSearch/NominatimSearch';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';

export const BasicNominatimSearch: React.FC<Partial<NominatimSearchProps>> = (
  props
): JSX.Element => {
  const map = useMap();

  if (!map) {
    return <></>;
  }

  return <NominatimSearch key="search" map={map} {...props} />;
};

export default BasicNominatimSearch;
