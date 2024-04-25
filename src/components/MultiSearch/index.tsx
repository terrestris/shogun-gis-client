import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import {
  LoadingOutlined,
  SearchOutlined,
  SettingOutlined
} from '@ant-design/icons';
import {
  Checkbox,
  Dropdown,
  Empty,
  Input,
  InputProps
} from 'antd';

import ClientConfiguration from 'clientConfig';

import _groupBy from 'lodash/groupBy';
import _isNil from 'lodash/isNil';

import { getUid } from 'ol';
import {
  Extent as OlExtent
} from 'ol/extent';
import OlFeature from 'ol/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlFormatWKT from 'ol/format/WKT';
import OlGeometry from 'ol/geom/Geometry';
import { transformExtent } from 'ol/proj';
import OlStyleCircle from 'ol/style/Circle';
import OlStyleFill from 'ol/style/Fill';
import OlStyleStroke from 'ol/style/Stroke';
import OlStyle from 'ol/style/Style';

import {
  useTranslation
} from 'react-i18next';

import logger from '@terrestris/base-util/dist/Logger';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';
import SearchResultsPanel, {
  Category as ResultCategory
} from '@terrestris/react-geo/dist/Panel/SearchResultsPanel/SearchResultsPanel';
import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import { NominatimPlace } from '@terrestris/react-util/dist/Hooks/useNominatim/useNominatim';

import {
  SearchConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import './index.less';

import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';
import generateSolrQuery from '../../utils/generateSolrQuery';

interface MultiSearchProps extends InputProps {
  useNominatim: boolean;
}

export type DataSearchResult = {
  [key: string]: string | string[] | number[];
};

export type HighlightingResult = {
  [key: string]: string;
};

export type HighlightingResults = {
  [key: string]: HighlightingResult;
};

const isFulfilled = <T, >(p: PromiseSettledResult<T>): p is PromiseFulfilledResult<T> => p.status === 'fulfilled';

export type SolrQueryConfig = {
  q: string;
  fq?: string;
  defType?: 'lucene' | 'dismax' | 'edismax';
  qf?: string;
  rows?: number;
  hl?: boolean;
  'hl.fl'?: string;
  'hl.tag.pre'?: string;
  'hl.tag.post'?: string;
  'hl.requireFieldMatch'?: boolean;
};

export type Item = {
  feature: OlFeature;
};

export const MultiSearch: React.FC<MultiSearchProps> = ({
  useNominatim
}): JSX.Element => {

  const client = useSHOGunAPIClient();
  const map = useMap();
  const {
    t
  } = useTranslation();
  const clickAwayRef = useRef<HTMLDivElement>(null);

  const [searchNominatim, setSearchNominatim] = useState<boolean>(useNominatim);
  const [searchData, setSearchData] = useState<boolean>(true);
  const [useViewBox, setUseViewBox] = useState<boolean>(ClientConfiguration.search?.defaultUseViewBox ?? true);
  const [searchValue, setSearchValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [resultsVisible, setResultsVisible] = useState<boolean>(false);
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const [dataSearchResults, setDataSearchResults] = useState<DataSearchResult[]>([]);
  const [highlightingResults, setHighlightingResults] = useState<HighlightingResults>({});
  const [nominatimResults, setNominatimResults] = useState<NominatimPlace[]>([]);
  const [searchResults, setSearchResults] = useState<ResultCategory[]>([]);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickAway);

    return () => {
      window.removeEventListener('mousedown', handleClickAway);
    };
  }, []);

  const handleClickAway = (e: Event) => {
    let target = e.target;
    while (target) {
      target = (target as Node).parentNode;
    }

    if ((clickAwayRef.current && ((clickAwayRef.current as Element).contains(e.target as Node)))) {
      return;
    }

    setResultsVisible(false);
  };

  const settingsMenu = useMemo(() => {
    return {
      items: [{
        label: (
          <Checkbox
            checked={useViewBox}
            onChange={e => setUseViewBox(e.target.checked)}
          >
            {t('MultiSearch.searchInViewBox')}
          </Checkbox>
        ),
        key: 'viewbox'
      }, {
        label: (
          <Checkbox
            checked={searchData}
            onChange={e => setSearchData(e.target.checked)}
          >
            {t('MultiSearch.searchData')}
          </Checkbox>
        ),
        key: 'data'
      }, {
        label: (
          <Checkbox
            checked={searchNominatim}
            onChange={e => setSearchNominatim(e.target.checked)}
          >
            {t('MultiSearch.searchNominatim')}
          </Checkbox>
        ),
        key: 'nominatim'
      }]
    };
  }, [searchData, searchNominatim, useViewBox, t]);

  const performSearch = useCallback(async () => {
    const minChars = ClientConfiguration.search?.minChars ?? 3;
    if (searchValue.length < minChars) {
      resetSearch();
      return;
    }

    if (!searchData && !searchNominatim) {
      return;
    }

    setLoading(true);
    setNominatimResults([]);
    setDataSearchResults([]);
    setHighlightingResults({});

    let response;
    let viewBox: OlExtent | null = null;

    if (useViewBox) {
      const mapViewProjection = map?.getView().getProjection();
      const extent = map?.getView()?.calculateExtent();
      if (extent) {
        viewBox = transformExtent(extent, mapViewProjection, 'EPSG:4326');
      }
    }

    if (searchData && map) {
      try {
        const solrBasePath = ClientConfiguration.search?.solrBasePath ?? '/search/query';
        const searchUrl = new URL(`${window.location.origin}${solrBasePath}`);
        const queriesPerLayer = generateSolrQuery({
          searchValue,
          map
        });

        const promises = queriesPerLayer.map(q => {
          const solrQueryConfig: SolrQueryConfig = {
            q: q.query,
            rows: ClientConfiguration.search?.solrQueryConfig?.rowsPerQuery ?? 100,
            defType: ClientConfiguration.search?.solrQueryConfig?.queryParser ?? 'edismax'
          };

          if (q.fieldList) {
            solrQueryConfig.qf = q.fieldList;
          } else {
            solrQueryConfig.qf = ClientConfiguration.search?.coreName ?? 'search';
          }

          if (useViewBox && viewBox) {
            const bboxFilter = `geometry:[${viewBox[1]},${viewBox[0]} TO ${viewBox[3]},${viewBox[2]}]`;
            solrQueryConfig.fq = bboxFilter;
          }

          if (ClientConfiguration.search?.useSolrHighlighting) {
            solrQueryConfig.hl = true;
            solrQueryConfig['hl.fl'] = '*';
            solrQueryConfig['hl.tag.pre'] = ClientConfiguration.search?.solrQueryConfig?.tagPre ?? '<b>';
            solrQueryConfig['hl.tag.post'] = ClientConfiguration.search?.solrQueryConfig?.tagPost ?? '</b>';
            solrQueryConfig['hl.requireFieldMatch'] = ClientConfiguration.search?.solrQueryConfig?.requireFieldMatch ?? true;
          }

          const defaultHeaders = {
            'Content-Type': 'application/json'
          };

          return fetch(searchUrl.href, {
            method: 'POST',
            headers: {
              ...defaultHeaders,
              ...getBearerTokenHeader(client?.getKeycloak())
            },
            body: JSON.stringify(solrQueryConfig)
          });
        });

        const results = await Promise.allSettled(promises.map(async pr => {
          const res = await pr;
          return res.json();
        }));

        const successfulResults = results.filter(isFulfilled);
        const dataResults = successfulResults.flatMap(sR => sR.value?.response?.docs).filter(r => r);
        const hlResults = Object.assign({}, ...successfulResults.map(sr => sr.value?.highlighting));

        setDataSearchResults(dataResults);
        setHighlightingResults(hlResults);
      } catch (error) {
        setDataSearchResults([]);
        setHighlightingResults({});
        logger.error('Error while fetching the layer search results: ', error);
      } finally {
        if (!searchNominatim) {
          setLoading(false);
        }
      }
    }

    if (searchNominatim) {
      try {
        const nominatimUrl = new URL('https://nominatim.terrestris.de/search');
        nominatimUrl.searchParams.set('q', searchValue);
        nominatimUrl.searchParams.set('format', 'json');
        nominatimUrl.searchParams.set('polygon_geojson', '1');

        if (useViewBox && viewBox) {
          nominatimUrl.searchParams.set('viewbox', viewBox.toString());
          nominatimUrl.searchParams.set('bounded', '1');
        }
        response = await fetch(nominatimUrl.href);
        setNominatimResults(await response.json());
      }
      catch (error) {
        setNominatimResults([]);
        logger.error('Error while fetching the nominatim results: ', error);
      } finally {
        setLoading(false);
      }
    }
  }, [searchValue, searchData, searchNominatim, useViewBox, map, client]);

  const replaceTemplates = (template: string, data: DataSearchResult): string => {
    const pattern = /{\s*(\w+?)\s*}/g; // regex for template string with values in brackets, e.g. {name}
    return template.replace(pattern, (_, token) => data[token]?.toString() || '');
  };

  const getFeatureTitle = useCallback((dsResult: DataSearchResult, highlightResult?: HighlightingResult): string => {
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

    let title: string = '';

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
        let propValue = dsResult[propKey]?.toString();
        if (!title && propValue.toLowerCase().indexOf(searchValue?.toLowerCase()) > -1) {
          // show matched value followed by the attribute name in square brackets (e.g. '53111 Bonn [city]')
          title = `${propValue} [${propKey}]`;
        }
      });

    if (!title) {
      // fallback -> should never happen after adding of the valid layer search config
      title = dsResult.id as string;
    }

    return title;
  }, [searchValue, map]);

  useEffect(() => {
    if (!map) {
      return;
    }

    let updatedResults: ResultCategory[] = [];

    if (nominatimResults.length > 0) {

      const geoJsonFormat = new OlFormatGeoJSON();
      const nFeats = nominatimResults.filter(f => !_isNil(f?.geojson)).map(f => {
        const olFeat = geoJsonFormat.readFeature(f.geojson, {
          dataProjection: 'EPSG:4326',
          featureProjection: map.getView().getProjection()
        });
        olFeat.set('title', f.display_name);
        return olFeat;
      });

      const nResults: ResultCategory = {
        title: t('MultiSearch.nominatimTitle'),
        features: nFeats
      };
      updatedResults.push(nResults);
    }

    if (dataSearchResults?.length > 0) {

      const wktFormat = new OlFormatWKT();

      // 1. group by category or layer title
      let categories;
      if (ClientConfiguration.search?.groupByCategory) {
        categories = _groupBy(dataSearchResults, res => res?.category[0]);
      } else {
        const layers = map.getAllLayers().filter(l => l.get('searchable'));
        const resultsWithLayerName = dataSearchResults.map(result => {
          const layerTitle = layers.filter(l => isWmsLayer(l))
            .find((l) => (l as WmsLayer).getSource()?.getParams()?.LAYERS === result.featureType[0])
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
          olFeat.set('title', getFeatureTitle(dsResult, highlightingResults?.[id]));
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
        updatedResults.push(resultCategory);
      });
    }

    setResultsVisible(true);
    setSearchResults(updatedResults);

  }, [dataSearchResults, highlightingResults, nominatimResults, map, getFeatureTitle, t]);

  useEffect(() => {
    const delay = ClientConfiguration.search?.delay ?? 1000;
    const timeout = setTimeout(() => {
      performSearch();
    }, delay);

    return () => clearTimeout(timeout);

  }, [performSearch]);

  const resetSearch = () => {
    setDataSearchResults([]);
    setNominatimResults([]);
  };

  const actionsCreator = (item: any) => {
    const feat = item.feature;
    const layer = feat.get('layer');

    if (!layer?.get('editable')) {
      return;
    }

    // button is temporarily disabled
    return [<></>];
  };

  const layerStyle = useMemo(() => (
    new OlStyle({
      stroke: new OlStyleStroke({
        color: 'rgb(255,0,0)',
        width: 2
      }),
      fill: new OlStyleFill({
        color: 'rgba(255,255,255, 0.5)'
      }),
      image: new OlStyleCircle({
        radius: 10,
        fill: new OlStyleFill({
          color: 'rgba(255,255,255, 0.5)'
        }),
        stroke: new OlStyleStroke({
          color: 'rgb(255,0,0)',
          width: 3
        })
      })
    })
  ), []);

  const resultRenderer = () => {
    if (searchValue.length < 2 || !resultsVisible || loading || !dataSearchResults) {
      return null;
    }

    const numTotal = nominatimResults.length + dataSearchResults.length;

    if (numTotal === 0) {
      return (
        <div
          className='no-search-result-div'
        >
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </div>
      );
    }

    const onSearchResultClick = (item: Item) => {
      setResultsVisible(false);
      zoomOffsetOnClick(item);
      if (ClientConfiguration.search?.activateLayerOnClick) {
        activateLayer(item);
      }
    };

    const activateLayer = (item: Item) => {
      const layer = item?.feature?.get('layer');
      if (layer && map && !layer.getVisible()) {
        layer.setVisible(true);
        // also make all parent folders / groups visible so
        // that the layer becomes visible in map
        PermalinkUtil.setParentsVisible(
          map,
          map.getLayerGroup().getLayers(),
          getUid(layer)
        );
      }
    };

    const zoomOffsetOnClick = (item: Item) => {
      const extent = item.feature.getGeometry()?.getExtent();
      const toolMenuElement = document.getElementsByClassName('tool-menu');
      const toolMenuWidth = toolMenuElement[0]?.clientWidth ?? 0;
      let padding = [0, 0, 0, toolMenuWidth];

      if (extent) {
        map?.getView().fit(extent, {
          size: map.getSize(),
          padding
        });
      }
    };

    return (
      <SearchResultsPanel
        searchResults={searchResults}
        numTotal={numTotal}
        accordion
        searchTerms={searchValue.split(' ')}
        actionsCreator={actionsCreator}
        layerStyle={layerStyle}
        onClick={onSearchResultClick}
      />
    );
  };

  if (!map) {
    return <></>;
  }

  return (
    <div ref={clickAwayRef}>
      <Input
        value={searchValue}
        disabled={!searchData && !searchNominatim}
        onChange={event => {
          setLoading(event.target.value !== '');
          setSearchValue(event.target.value);
        }}
        allowClear
        addonAfter={
          <Dropdown
            placement="bottomRight"
            menu={settingsMenu}
            trigger={['click']}
            onOpenChange={setSettingsVisible}
            open={settingsVisible}
          >
            <SettingOutlined />
          </Dropdown >
        }
        onFocus={() => setResultsVisible(true)}
        placeholder={t('MultiSearch.searchPlaceholder')}
        prefix={<SearchOutlined />}
        suffix={loading ? <LoadingOutlined /> : null}
      />
      {resultRenderer()}
    </div>
  );
};

export default MultiSearch;
