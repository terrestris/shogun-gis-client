import React, {
  useCallback,
  useEffect, useMemo, useRef, useState
} from 'react';

import {
  EditOutlined,
  SearchOutlined,
  SettingOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Dropdown,
  Empty,
  Input,
  InputProps,
  Tag,
  Tooltip
} from 'antd';

import _debounce from 'lodash/debounce';
import _groupBy from 'lodash/groupBy';
import _isArray from 'lodash/isArray';

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
import { NominatimPlace } from '@terrestris/react-geo/dist/Field/NominatimSearch/NominatimSearch';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import SearchResultsPanel, {
  Category as ResultCategory
} from '@terrestris/react-geo/dist/Panel/SearchResultsPanel/SearchResultsPanel';

import useAppDispatch from '../../hooks/useAppDispatch';
import './index.less';

import useAppSelector from '../../hooks/useAppSelector';

import {
  setLayerId
} from '../../store/editFeature';

import {
  show as showEditFeatureDrawer
} from '../../store/editFeatureDrawerOpen';

interface MultiSearchProps extends InputProps {
  useNominatim: boolean;
  delay?: number;
  minChars?: number;
  solrSearchBasePath?: string;
};

export type DataSearchResult = {
  [key: string]: string | string[] | number[];
};

export const MultiSearch: React.FC<MultiSearchProps> = ({
  useNominatim,
  delay = 1000,
  minChars = 3,
  solrSearchBasePath = '/search/query'
}): JSX.Element => {

  const map = useMap();
  const {
    t
  } = useTranslation();
  const dispatch = useAppDispatch();

  const clickAwayRef = useRef<HTMLDivElement>(null);

  const [searchNominatim, setSearchNominatim] = useState<boolean>(useNominatim);
  const [searchData, setSearchData] = useState<boolean>(true);
  const [useViewBox, setUseViewBox] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [resultsVisible, setResultsVisible] = useState<boolean>(false);
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const [dataSearchResults, setDataSearchResults] = useState<DataSearchResult[]>([]);
  const [nominatimResults, setNominatimResults] = useState<NominatimPlace[]>([]);
  const [searchResults, setSearchResults] = useState<ResultCategory[]>([]);

  const allowedEditMode = useAppSelector(
    state => state.editFeature.userEditMode
  );

  useEffect(() => {
    window.addEventListener('mousedown', handleClickAway);

    return () => {
      window.removeEventListener('mousedown', handleClickAway);
    };
  }, []);

  const handleClickAway = (e: Event) => {
    const parents = [];
    let target = e.target;
    while (target) {
      parents.unshift(target);
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

    let response;
    let viewBox: OlExtent | null = null;

    if (useViewBox) {
      const mapViewProjection = map?.getView().getProjection();
      const extent = map?.getView()?.calculateExtent();
      if (extent) {
        viewBox = transformExtent(extent, mapViewProjection, 'EPSG:4326');
      }
    }

    if (searchData) {
      try {
        let parts = searchValue.trim()
          .replaceAll(/[()\\\-_./\/]/g, ' ').split(' ')
          .filter(s => s.trim() !== '');

        const partsQuery = parts.map(
          (part: string) => `(search:${part.trim()}*^3 OR search:*${part.trim()}*^2 OR search:${part.trim()}~1)`
        );
        const searchUrl = new URL(`${window.location.origin}${solrSearchBasePath}`);

        const query = `search:\"${searchValue.trim()}\" OR (${partsQuery.join(' AND ')})`;

        if (useViewBox && viewBox) {
          const bboxFilter = `geometry:[${viewBox[1]},${viewBox[0]} TO ${viewBox[3]},${viewBox[2]}]`;
          searchUrl.searchParams.set('fq', bboxFilter);
        }

        searchUrl.searchParams.set('q', query);
        response = await fetch(searchUrl.href);

        const dataJson = await response.json();
        setDataSearchResults(dataJson?.response?.docs);
      } catch (error) {
        setDataSearchResults([]);
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
  }, [searchValue, minChars, useViewBox, searchData, searchNominatim, map, solrSearchBasePath]);

  const getFeatureTitle = useCallback((dsResult: DataSearchResult): string => {

    const blacklistedAttributes = [
      'category',
      'id',
      'featureType',
      'geometry',
      'search'
    ];

    let title: string = '';

    // for now, we will use the first attribute that matches the search term.
    // perspectively we will switch to the search configuration config which will
    // provide a display template for the feature title among other things
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

  }, [searchValue]);

  useEffect(() => {

    if (!map) {
      return;
    }

    let updatedResults: ResultCategory[] = [];

    if (nominatimResults.length > 0) {

      const geoJsonFormat = new OlFormatGeoJSON();
      const nFeats = nominatimResults.map(f => {
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

    if (dataSearchResults.length > 0) {

      const wktFormat = new OlFormatWKT();
      // 1. group by category
      const categories = _groupBy(dataSearchResults, res => res.category[0]);
      // 2. build features
      Object.keys(categories).forEach(category => {
        const features = categories[category].map(dsResult => {
          if (!dsResult.geometry?.[0]) {
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
          olFeat.set('title', getFeatureTitle(dsResult));
          let ftName;
          if (dsResult.featureType?.[0]) {
            const layer = MapUtil.getLayerByNameParam(map, dsResult.featureType[0] as string);
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

  }, [dataSearchResults, getFeatureTitle, map, nominatimResults, t]);

  useEffect(() => {

    const timeout = setTimeout(() => {
      performSearch();
    }, delay);

    return () => clearTimeout(timeout);

  }, [performSearch, delay]);

  const resetSearch = () => {
    setDataSearchResults([]);
    setNominatimResults([]);
  };

  const listPrefixRenderer = (item: any) => {
    const {
      feature
    } = item;

    const ftName = feature.get('ftName');

    if (!ftName) {
      return <></>;
    }

    return <Tag>{ftName}</Tag>;
  };

  const actionsCreator = (item: any) => {
    const feat = item.feature;
    const layer = feat.get('layer');

    if (!layer?.get('editable')) {
      return;
    }

    const onEditFeatureBtnClick = () => {
      dispatch(setLayerId(getUid(layer)));
      dispatch(showEditFeatureDrawer());
      setResultsVisible(false);
    };

    if (
      allowedEditMode.includes('CREATE') ||
      allowedEditMode.includes('DELETE') ||
      allowedEditMode.includes('UPDATE')
    ) {
      return [
        <Tooltip
          key="edit"
          title={t('EditFeatureButton.title')}
          placement="bottom"
        >
          <Button
            onClick={onEditFeatureBtnClick}
            icon={<EditOutlined />}
          />
        </Tooltip>
      ];
    } else {
      return [<></>];
    }

  };

  const resultRenderer = () => {

    if (searchValue.length < 2 || !resultsVisible || loading) {
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

    return (
      <SearchResultsPanel
        searchResults={searchResults}
        numTotal={numTotal}
        accordion
        searchTerms={searchValue.split(' ')}
        listPrefixRenderer={listPrefixRenderer}
        actionsCreator={actionsCreator}
        layerStyle={
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
        }
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
