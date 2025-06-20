import React, {
  useCallback,
  useEffect,
  useMemo
} from 'react';

import {
  DrawerProps
} from 'antd';
import { ColumnType } from 'antd/es/table';

import OlFeature from 'ol/Feature';
import GeoJSONParser from 'ol/format/GeoJSON';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';
import OlStyleCircle from 'ol/style/Circle';
import OlStyleFill from 'ol/style/Fill';
import OlStyleStroke from 'ol/style/Stroke';
import OlStyle from 'ol/style/Style';

import {
  useTranslation
} from 'react-i18next';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import PropertyGrid from '@terrestris/react-geo/dist/Grid/PropertyGrid/PropertyGrid';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import { useOlLayer } from '@terrestris/react-util/dist/Hooks/useOlLayer/useOlLayer';

import {
  PropertyFormItemReadConfig,
  PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {
  setSearchResultState
} from '../../store/searchResult';
import MapDrawer from '../MapDrawer';

import { AttributeValueCell } from './AttributeValueCell';

export type SearchResultDrawerProps = DrawerProps;

type AttributeRecord = {
  key: string;
  attributeName: string;
  attributeValue: string | number | string[] | number[];
};

export const SearchResultDrawer: React.FC<SearchResultDrawerProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const dispatch = useAppDispatch();
  const map = useMap();
  const isSearchResultDrawerVisible = useAppSelector(state => state.searchResult.drawerVisibility);
  const geoJSONFeature = useAppSelector(state => state.searchResult.geoJSONFeature);
  const targetLayerId = useAppSelector(state => state.searchResult.layerId);
  const olFeature: OlFeature | null = useMemo(() => {
    if (!geoJSONFeature) {
      return null;
    }
    return new GeoJSONParser().readFeature(geoJSONFeature) as OlFeature;
  }, [geoJSONFeature]);
  const targetLayer = useMemo(() => {
    if (!targetLayerId || !map) {
      return null;
    }
    return MapUtil.getLayerByOlUid(map, targetLayerId);
  }, [targetLayerId, map]);

  const highlightLayer = useOlLayer(() => {
    return new OlLayerVector({
      source: new OlSourceVector(),
      style: new OlStyle({
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
    });
  }, []);

  const highlightFeature = useCallback((feature?: OlFeature) => {
    if (!highlightLayer || !highlightLayer.getSource() || !feature) {
      return;
    }
    highlightLayer.getSource()!.clear();
    highlightLayer.getSource()!.addFeature(feature);
  }, [highlightLayer]);

  useEffect(() => {
    if (olFeature && map) {
      highlightFeature(olFeature);
    }
  }, [olFeature, map, highlightFeature]);

  const {
    t
  } = useTranslation();

  const onClose = () => {
    dispatch(setSearchResultState({
      drawerVisibility: false,
      layerId: null,
      geoJSONFeature: null
    }));
    highlightLayer?.getSource()!.clear();
  };

  const normalizeFeatureProperties = (feature: OlFeature, keys: string[]) => {
    keys.forEach(key => {
      const val = feature.get(key);

      if (
        Array.isArray(val) &&
        val.length === 1 &&
        typeof val[0] === 'string'
      ) {
        feature.set(key, val[0]);
      }
    });
  };

  const resolveTitle = (
    feature: OlFeature | null,
    configTitle?: string
  ): string => {
    if (!feature) {
      return '';
    }

    if (!configTitle) {
      return feature.get('title') ?? '';
    }

    const match = configTitle.match(/^{(.+)}$/);
    if (match) {
      const key = match[1];
      return feature.get(key) ?? '';
    }

    return configTitle;
  };

  const resultDrawerConfig: PropertyFormTabConfig<PropertyFormItemReadConfig> | null =
    targetLayer?.get('searchConfig')?.resultDrawerConfig ?? null;

  useEffect(() => {
    if (olFeature && resultDrawerConfig?.children) {
      const keysToNormalize = resultDrawerConfig.children.map(
        c => c.propertyName
      );
      normalizeFeatureProperties(olFeature, keysToNormalize);
    }
  }, [olFeature, resultDrawerConfig?.children]);

  const attributeFilter = useMemo(() => {
    return resultDrawerConfig?.children
      ? resultDrawerConfig.children.map(c => c.propertyName)
      : undefined;
  }, [resultDrawerConfig]);

  const attributeNames = useMemo(() => {
    return resultDrawerConfig?.children
      ? Object.fromEntries(
        resultDrawerConfig.children.map(c => [
          c.propertyName,
          c.displayName ?? ''
        ])
      )
      : undefined;
  }, [resultDrawerConfig]);

  const columns: ColumnType<AttributeRecord>[] = [{
    title: t('FeaturePropertyGrid.key'),
    dataIndex: 'attributeName',
    key: 'attributeName',
    width: '50%',
    ellipsis: true,
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.key.localeCompare(b.key)
  }, {
    title: t('FeaturePropertyGrid.value'),
    dataIndex: 'attributeValue',
    key: 'attributeValue',
    width: '50%',
    ellipsis: true,
    render: (value, record) => (
      <AttributeValueCell
        value={value}
        attributeName={record.attributeName}
        resultDrawerConfig={resultDrawerConfig}
      />
    )
  }];

  return (
    <MapDrawer
      title={t('SearchResultDrawer.title')}
      placement="right"
      onClose={onClose}
      open={isSearchResultDrawerVisible}
      maskClosable={false}
      mask={false}
      {...passThroughProps}
    >
      <div>
        {olFeature && (
          <h3>{resolveTitle(olFeature, resultDrawerConfig?.title)}</h3>
        )}
        {
          olFeature && Object.keys(olFeature.getProperties()).length > 1 &&
          <PropertyGrid
            className="property-grid"
            feature={olFeature}
            attributeFilter={attributeFilter}
            size="small"
            sticky={true}
            attributeNames={attributeNames}
            columns={columns}
            scroll={{
              scrollToFirstRowOnChange: true,
              y: 'calc(100% - 90px)'
            }}
          />
        }
      </div>
    </MapDrawer>
  );
};

export default SearchResultDrawer;
