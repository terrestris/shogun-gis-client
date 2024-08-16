import React, {
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  Geometry
} from 'geojson';

import {
  Extent as OlExtent
} from 'ol/extent';
import {
  transformExtent
} from 'ol/proj';
import {
  useTranslation
} from 'react-i18next';

import {
  SearchField,
  SearchProps
} from '@terrestris/react-geo/dist/Field/SearchField/SearchField';
import {
  NominatimPlace,
  createNominatimGetExtentFunction,
  createNominatimGetValueFunction,
  createNominatimSearchFunction
} from '@terrestris/react-util/dist/Hooks/search/createNominatimSearchFunction';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

export const BasicNominatimSearch: React.FC<Partial<SearchProps<Geometry, NominatimPlace>>> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const {
    t
  } = useTranslation();
  const [viewBox, setViewBox] = useState<string>();

  const nominatimSearchFunction = useMemo(() => createNominatimSearchFunction({
    countryCodes: '',
    viewBox: viewBox ? viewBox : ''
  }), [viewBox]);
  const nominatimGetValue = useMemo(() => createNominatimGetValueFunction(), []);
  const nominatimGetExtent = useMemo(() => createNominatimGetExtentFunction(), []);

  useEffect(() => {
    const mapViewProjection = map?.getView().getProjection();
    const extent: OlExtent = map?.getView()?.get('extent');
    if (extent) {
      const transformedExtent = transformExtent(extent, mapViewProjection, 'EPSG:4326');
      setViewBox(transformedExtent.toString());
    }
  }, [map]);

  if (!map) {
    return <></>;
  }

  return (
    <SearchField
      searchFunction={nominatimSearchFunction}
      getValue={nominatimGetValue}
      getExtent={nominatimGetExtent}
      allowClear={true}
      placeholder={t('Nominatim.placeholder')}
      {...restProps}
    />
  );
};

export default BasicNominatimSearch;
