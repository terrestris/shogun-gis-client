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
  InputProps,
  Button,
  Space,
  Tooltip
} from 'antd';

import ClientConfiguration from 'clientConfig';

import {
  getUid
} from 'ol';
import {
  Extent as OlExtent
} from 'ol/extent';
import OlFeature from 'ol/Feature';
import {
  transformExtent
} from 'ol/proj';
import OlStyleCircle from 'ol/style/Circle';
import OlStyleFill from 'ol/style/Fill';
import OlStyleStroke from 'ol/style/Stroke';
import OlStyle from 'ol/style/Style';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  PermalinkUtil
} from '@terrestris/ol-util/dist/PermalinkUtil/PermalinkUtil';
import SearchResultsPanel, {
  Category as ResultCategory
} from '@terrestris/react-geo/dist/Panel/SearchResultsPanel/SearchResultsPanel';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import './index.less';

export type SearchEngineFunction = (value: string, viewBox?: OlExtent) => Promise<ResultCategory[] | undefined>;

export type Item = {
  feature: OlFeature;
};

export type MultiSearchProps = InputProps & {
  /**
   * The geocoder search engine to use.
   */
  geocoderSearchEngine?: SearchEngineFunction;

  /**
   * The data search engine to use.
   */
  dataSearchEngine?: SearchEngineFunction;
};

export const MultiSearch: React.FC<MultiSearchProps> = ({
  geocoderSearchEngine,
  dataSearchEngine
}): JSX.Element => {

  const map = useMap();
  const {
    t
  } = useTranslation();
  const clickAwayRef = useRef<HTMLDivElement>(null);

  const [isGeocoderEnabled, setIsGeocoderEnabled] = useState<boolean>(!!geocoderSearchEngine);
  const [isDataSearchEnabled, setIsDataSearchEnabled] = useState<boolean>(!!dataSearchEngine);
  const [useViewBox, setUseViewBox] = useState<boolean>(ClientConfiguration.search?.defaultUseViewBox ?? true);
  const [searchValue, setSearchValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [resultsVisible, setResultsVisible] = useState<boolean>(false);
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
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
    const menu = {
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
      }]
    };

    if (geocoderSearchEngine) {
      menu.items.push({
        label: (
          <Checkbox
            checked={isGeocoderEnabled}
            onChange={e => setIsGeocoderEnabled(e.target.checked)}
          >
            {t('MultiSearch.searchGeocoder')}
          </Checkbox>
        ),
        key: 'geocoder'
      });
    }

    if (dataSearchEngine) {
      menu.items.push({
        label: (
          <Checkbox
            checked={isDataSearchEnabled}
            onChange={e => setIsDataSearchEnabled(e.target.checked)}
          >
            {t('MultiSearch.searchData')}
          </Checkbox>
        ),
        key: 'data'
      });
    }

    return menu;
  }, [useViewBox, t, geocoderSearchEngine, dataSearchEngine, isGeocoderEnabled, isDataSearchEnabled]);

  const performSearch = useCallback(async () => {
    if (!map) {
      return;
    }

    if (!isGeocoderEnabled && !isDataSearchEnabled) {
      return;
    }

    const minChars = ClientConfiguration.search?.minChars ?? 3;
    if (searchValue.length < minChars) {
      resetSearch();
      return;
    }

    setLoading(true);

    let viewBox: OlExtent | undefined;

    if (useViewBox) {
      const mapViewProjection = map?.getView().getProjection();
      const extent = map?.getView()?.calculateExtent();
      if (extent) {
        viewBox = transformExtent(extent, mapViewProjection, 'EPSG:4326');
      }
    }

    const updatedResults: ResultCategory[] = [];

    if (isDataSearchEnabled && dataSearchEngine) {
      try {
        const results = await dataSearchEngine(searchValue, viewBox);

        if (!results) {
          throw new Error('No response from data search engine.');
        }

        updatedResults.push(...results);
      } catch (error) {
        Logger.error('Error while data search: \n', error);
      } finally {
        if (!isGeocoderEnabled) {
          setLoading(false);
        }
      }
    }

    if (isGeocoderEnabled && geocoderSearchEngine) {
      try {
        const results = await geocoderSearchEngine(searchValue, viewBox);

        if (!results) {
          throw new Error('No response from geocoder search engine.');
        }

        updatedResults.push(...results);
      } catch (error) {
        Logger.error('Error while geocoder search: \n', error);
      } finally {
        setLoading(false);
      }
    }

    const allEmpty = updatedResults.every(result => result.features.length === 0);

    setSearchResults(allEmpty ? [] : updatedResults);
    setResultsVisible(true);
  }, [map, isGeocoderEnabled, isDataSearchEnabled, searchValue, useViewBox, dataSearchEngine, geocoderSearchEngine]);

  useEffect(() => {
    const delay = ClientConfiguration.search?.delay ?? 1000;
    const timeout = setTimeout(() => {
      performSearch();
    }, delay);

    return () => clearTimeout(timeout);
  }, [performSearch]);

  const resetSearch = () => {
    setSearchResults([]);
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
    if (searchValue.length < 2 || !resultsVisible || loading || !searchResults) {
      return null;
    }

    const numTotal = searchResults.length;

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
      const padding = [0, 0, 0, toolMenuWidth];

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

  const getPlaceholder = () => {
    if (isGeocoderEnabled && isDataSearchEnabled) {
      return t('MultiSearch.searchPlaceholder');
    }

    if (!isGeocoderEnabled && isDataSearchEnabled) {
      return t('MultiSearch.searchPlaceholderDataOnly');
    }

    if (isGeocoderEnabled && !isDataSearchEnabled) {
      return t('MultiSearch.searchPlaceholderGeocoderOnly');
    }
  };

  return (
    <div
      className="multi-search"
      ref={clickAwayRef}
    >
      <Space.Compact>
        <Input
          value={searchValue}
          disabled={!isGeocoderEnabled && !isDataSearchEnabled}
          onChange={event => {
            setLoading(event.target.value !== '');
            setSearchValue(event.target.value);
          }}
          allowClear
          onFocus={() => setResultsVisible(true)}
          placeholder={getPlaceholder()}
          prefix={<SearchOutlined />}
          suffix={loading ? <LoadingOutlined /> : null}
        />
        <Dropdown
          menu={settingsMenu}
          trigger={['click']}
          onOpenChange={setSettingsVisible}
          open={settingsVisible}
        >
          <Tooltip
            title={t('MultiSearch.settingsTooltip')}
            placement="right"
          >
            <Button
              icon={<SettingOutlined />}
            />
          </Tooltip>
        </Dropdown>
      </Space.Compact>
      {resultRenderer()}
    </div>
  );
};

export default MultiSearch;
