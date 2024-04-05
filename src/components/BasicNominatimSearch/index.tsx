import React, {
  useEffect, useState
} from 'react';

import {
  Extent as OlExtent
} from 'ol/extent';
import {
  transformExtent
} from 'ol/proj';
import {
  useTranslation
} from 'react-i18next';

import NominatimSearch, {
  NominatimSearchProps
} from '@terrestris/react-geo/dist/Field/NominatimSearch/NominatimSearch';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

export const BasicNominatimSearch: React.FC<Partial<NominatimSearchProps>> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const {
    t
  } = useTranslation();
  const [viewBox, setViewBox] = useState<string>();

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
    <NominatimSearch
      countryCodes={''}
      allowClear={true}
      nominatimBaseUrl={'https://nominatim.terrestris.de/search.php?'}
      placeholder={t('Nominatim.placeholder')}
      viewBox={viewBox ? viewBox : ''}
      {...restProps}
    />
  );
};

export default BasicNominatimSearch;
