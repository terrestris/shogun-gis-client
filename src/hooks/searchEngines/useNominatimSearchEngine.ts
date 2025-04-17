import {
  useCallback
} from 'react';

import ClientConfiguration from 'clientConfig';

import _isNil from 'lodash/isNil';

import {
  Extent as OlExtent
} from 'ol/extent';
import OlFormatGeoJSON from 'ol/format/GeoJSON';

import {
  useTranslation
} from 'react-i18next';

import type {
  Category as ResultCategory
} from '@terrestris/react-geo/dist/Panel/SearchResultsPanel/SearchResultsPanel';

import {
  createNominatimSearchFunction
} from '@terrestris/react-util/dist/Hooks/search/createNominatimSearchFunction';
import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

export const useNominatimSearchEngine = () => {
  const map = useMap();

  const {
    t
  } = useTranslation();

  const performNominatimSearch = useCallback(async (value: string, viewBox?: OlExtent) => {
    if (!map) {
      return;
    }

    const executeNominatimSearch = createNominatimSearchFunction({
      bounded: viewBox ? 1 : undefined,
      viewBox: viewBox ? viewBox?.toString() : undefined,
      countryCodes: '',
      nominatimBaseUrl: ClientConfiguration.search?.nominatimUrl ?? 'https://nominatim.openstreetmap.org/search?'
    });

    const response = await executeNominatimSearch(value);

    const geoJsonFormat = new OlFormatGeoJSON();
    const nFeats = response?.features
      .filter(f => !_isNil(f?.properties.geojson))
      .map(f => {
        const olFeat = geoJsonFormat.readFeature(f.geometry, {
          dataProjection: 'EPSG:4326',
          featureProjection: map.getView().getProjection()
        });

        if (Array.isArray(olFeat)) {
          return;
        }

        olFeat.setProperties(f.properties);

        olFeat.set('title', f.properties.display_name);

        return olFeat;
      })
      .filter(f => f !== undefined);

    const nResults: ResultCategory[] = [{
      title: t('useNominatimSearchEngine.title'),
      features: nFeats ?? []
    }];

    return nResults;
  }, [map, t]);

  return performNominatimSearch;
};

export default useNominatimSearchEngine;
