import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  DrawerProps
} from 'antd';

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

import PropertyGrid from '@terrestris/react-geo/dist/Grid/PropertyGrid/PropertyGrid';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import {
  PropertyFormItemReadConfig, PropertyFormTabConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {
  setSearchResultState
} from '../../store/searchResult';
import MapDrawer from '../MapDrawer';

export type SearchResultDrawerProps = DrawerProps;

export const SearchResultDrawer: React.FC<SearchResultDrawerProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const dispatch = useAppDispatch();
  const map = useMap();
  const isSearchResultDrawerVisible = useAppSelector(state => state.searchResult.drawerVisibility);
  const geoJSONFeature = useAppSelector(state => state.searchResult.geoJSONFeature);
  const [highlightLayer, setHighlightLayer] = useState<OlLayerVector<OlSourceVector> | null>(null);
  const olFeature: OlFeature | null = useMemo(() => {
    if (!geoJSONFeature) {
      return null;
    }
    return new GeoJSONParser().readFeature(geoJSONFeature) as OlFeature;
  }, [geoJSONFeature]);

  useEffect(() => {
    if (!map) {
      return;
    }

    const layer = new OlLayerVector({
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

    setHighlightLayer(layer);
    map.addLayer(layer);
  }, [map]);

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

  const isUrl = (value: string) => {
    return /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/.test(value);
  };

  const searchFeatureConfig: PropertyFormTabConfig<PropertyFormItemReadConfig> | null =
    olFeature?.get('layer')?.get('searchFeatureConfig') ?? null;

  useEffect(() => {
    if (olFeature && searchFeatureConfig?.children) {
      const keysToNormalize = searchFeatureConfig.children.map(
        c => c.propertyName
      );
      normalizeFeatureProperties(olFeature, keysToNormalize);
    }
  }, [olFeature, searchFeatureConfig?.children]);

  const attributeFilter = useMemo(() => {
    return searchFeatureConfig?.children
      ? searchFeatureConfig.children.map(c => c.propertyName)
      : undefined;
  }, [searchFeatureConfig]);

  const attributeNames = useMemo(() => {
    return searchFeatureConfig?.children
      ? Object.fromEntries(
        searchFeatureConfig.children.map(c => [
          c.propertyName,
          c.displayName ?? ''
        ])
      )
      : undefined;
  }, [searchFeatureConfig]);

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
          <h3>{searchFeatureConfig?.title ?? olFeature.get('title')}</h3>
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
            columns={[{
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
              render: (value: any) => {
                let normalized = value;

                if (
                  Array.isArray(value) &&
                  value.length === 1 &&
                  typeof value[0] === 'string'
                ) {
                  normalized = value[0];
                }

                if (
                  typeof normalized === 'string' &&
                  isUrl(normalized) &&
                  searchFeatureConfig
                ) {
                  return (
                    <a
                      href={normalized}
                      target="_blank"
                    >
                      {t('FeaturePropertyGrid.linkText')}
                    </a>
                  );
                }

                return normalized ?? '';
              }
            }]}
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
