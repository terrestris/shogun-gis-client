import React, {
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';

import {
  faMagnifyingGlass,
  faCircleInfo,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Tooltip
} from 'antd';

import _isNil from 'lodash/isNil';

import {
  getUid,
  MapEvent as OlMapEvent
} from 'ol';
import BaseEvent from 'ol/events/Event';
import OlBaseLayer from 'ol/layer/Base';
import OlLayerGroup from 'ol/layer/Group';
import OlLayerImage from 'ol/layer/Image';
import OlLayer from 'ol/layer/Layer';
import OlLayerTile from 'ol/layer/Tile';
import OlVectorLayer from 'ol/layer/Vector';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  useTranslation
} from 'react-i18next';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';
import { isWmsLayer } from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import RgLayerTree, {
  LayerTreeProps as RgLayerTreeProps
} from '@terrestris/react-geo/dist/LayerTree/LayerTree';
import { Legend } from '@terrestris/react-geo/dist/Legend/Legend';
import LayerTransparencySlider from '@terrestris/react-geo/dist/Slider/LayerTransparencySlider/LayerTransparencySlider';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import type { LayerType } from '@terrestris/shogun-util/dist/model/enum/LayerType';
import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppSelector from '../../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import WmsTimeSlider from '../../WmsTimeSlider';

import LayerTreeContextMenu from './LayerTreeContextMenu';
import LoadingIndicator from './LoadingIndicator';

import './index.less';

export type LayerTreeProps = Partial<RgLayerTreeProps>;

export type LayerTileLoadCounter = Record<string, {
  loading: number;
  loaded: number;
  percent: number;
}>;

export const LayerTree: React.FC<LayerTreeProps> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const client = useSHOGunAPIClient();
  const {
    t
  } = useTranslation();

  const initialLayersUid = map?.getAllLayers().map(l => getUid(l));

  const showLegendsState: boolean = useAppSelector(state => state.layerTree.showLegends) ?? false;
  const layerIconsVisible: boolean = useAppSelector(state => state.layerTree.layerIconsVisible) ?? false;

  const [visibleLegendsIds, setVisibleLegendsIds] = useState<string[]>(showLegendsState ? initialLayersUid ?? [] : []);
  const [layerTileLoadCounter, setLayerTileLoadCounter] = useState<LayerTileLoadCounter>({});
  const [mapScale, setMapScale] = useState<number>();

  const registerTileLoadHandler = useCallback(() => {
    if (!map) {
      return;
    }

    const allLayers = MapUtil.getAllLayers(map);
    allLayers.forEach(layer => {
      if (layer instanceof OlLayer) {
        const source = layer.getSource();
        if (source instanceof OlSourceTileWMS) {
          if (!source.hasListener('tileloadstart')) {
            source.on('tileloadstart', tileLoadStartListener);
          }
          if (!source.hasListener('tileloadend') && !source.hasListener('tileloaderror')) {
            source.on(['tileloadend', 'tileloaderror'], tileLoadEndListener);
          }
        }
        if (source instanceof OlSourceImageWMS) {
          if (!source.hasListener('imageloadstart')) {
            source.on('imageloadstart', tileLoadStartListener);
          }
          if (!source.hasListener('imageloadend') && !source.hasListener('imageloaderror')) {
            source.on(['imageloadend', 'imageloaderror'], tileLoadEndListener);
          }
        }
      }
    });
  }, [map]);

  const checkListeners = useCallback(() => {
    const activeLayers = map?.getAllLayers().map(l => getUid(l));

    if (activeLayers?.length !== initialLayersUid?.length) {
      registerTileLoadHandler();
    }
  }, [map, initialLayersUid, registerTileLoadHandler]);

  const legendRequestExtraParams = useMemo(() => ({
    SCALE: mapScale,
    LEGEND_OPTIONS: 'fontAntiAliasing:true;forceLabels:on',
    TRANSPARENT: true
  }), [mapScale]);

  const legendRequestHeaders = useMemo(() => ({
    ...getBearerTokenHeader(client?.getKeycloak())
  }), [client]);

  const onMapMoveEnd = useCallback((evt: OlMapEvent) => {
    const mapView = evt.map.getView();

    const unit = mapView.getProjection().getUnits() || 'm';
    const resolution = mapView.getResolution();
    const scale = resolution ? MapUtil.getScaleForResolution(resolution, unit) : undefined;

    setMapScale(scale);
  }, []);

  useEffect(() => {
    if (!map) {
      return;
    }

    // Trigger once on initial render to set the current map scale.
    onMapMoveEnd(new OlMapEvent('moveend', map));

    map.on('moveend', onMapMoveEnd);

    return () => {
      map.un('moveend', onMapMoveEnd);
    };
  }, [map, onMapMoveEnd]);

  useEffect(() => {
    if (!map) {
      return;
    }

    registerTileLoadHandler();

    map.getLayers().on('change', checkListeners);

    return () => {
      const allLayers = MapUtil.getAllLayers(map);
      allLayers.forEach(layer => {
        if (layer instanceof OlLayer) {
          const source = layer.getSource();
          if (source.hasListener('tileloadstart')) {
            source.un('tileloadstart', tileLoadStartListener);
          }
          if (source.hasListener('tileloadend')) {
            source.un('tileloadend', tileLoadEndListener);
          }
          if (source.hasListener('tileloaderror')) {
            source.un('tileloaderror', tileLoadEndListener);
          }
        }
      });
      map.getLayers().un('change', checkListeners);
    };
  }, [map, registerTileLoadHandler, checkListeners]);

  const tileLoadStartListener = (evt: BaseEvent) => {
    setLayerTileLoadCounter((counter: LayerTileLoadCounter) => {
      const uid = getUid(evt.target);
      const update = structuredClone(counter);

      // reset when load was finished
      if (update[uid] && update[uid].loaded >= update[uid].loading) {
        update[uid].loading = 1;
        update[uid].loaded = 0;
        update[uid].percent = 0;
        return update;
      }

      if (!update[uid]) {
        update[uid] = {
          loading: 0,
          loaded: 0,
          percent: 0
        };
      }

      update[uid].loading = Number.isInteger(update[uid].loading) ?
        update[uid].loading + 1 : 1;

      return update;
    });
  };

  const tileLoadEndListener = (evt: BaseEvent | Event) => {
    setLayerTileLoadCounter((counter: LayerTileLoadCounter) => {
      const uid = getUid(evt.target);
      const update = structuredClone(counter);

      if (!update[uid]) {
        update[uid] = {
          loading: 0,
          loaded: 0,
          percent: 0
        };
      }

      update[uid].loaded = Number.isInteger(update[uid].loaded) ?
        update[uid].loaded + 1 : 1;

      const percent = Math.round(update[uid].loaded / update[uid].loading * 100);

      if (percent > update[uid].percent) {
        update[uid].percent = percent;
      }

      return update;
    });
  };

  const treeFilterFunction = (layer: OlBaseLayer | OlLayerGroup) => {
    if (layer instanceof OlLayerGroup) {
      return true;
    }

    return !(layer instanceof OlVectorLayer) || !_isNil(layer.get('shogunId'));
  };

  const treeNodeTitleRenderer = (layer: OlBaseLayer) => {
    if (!map) {
      return;
    }

    const percent = layer instanceof OlLayer && getUid(layer.getSource()) ?
      layerTileLoadCounter[getUid(layer.getSource())]?.percent : 100;

    if (layer instanceof OlLayerGroup) {
      return (
        <div
          aria-label='layer-group'
        >
          {layer.get('name')}
        </div>
      );
    } else {
      return (
        <>
          <div
            className="tree-node-header"
            aria-label="tree-node-header"
          >
            <span
              aria-label='layer-name'
              className='layer-name'
            >
              {layer.get('name')}
              <span
                className='loading-dots'
              >
                {percent < 100 && <LoadingIndicator />}
              </span>
              <span
                className='layer-icons-group'
              >
                {layer.get('searchable') && layerIconsVisible && (
                  <>
                    <Tooltip title={t('ToolMenu.searchable')}>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className='layer-icon'
                      />
                    </Tooltip>
                  </>
                )}
                {layer.get('hoverable') && layer.get('visible') && layerIconsVisible && (
                  <>
                    <Tooltip title={t('ToolMenu.queryable')}>
                      <FontAwesomeIcon
                        icon={faCircleInfo}
                        className='layer-icon'
                      />
                    </Tooltip>
                  </>
                )}
                {layer.get('editable') && layerIconsVisible && (
                  <>
                    <Tooltip title={t('ToolMenu.editable')}>
                      <FontAwesomeIcon
                        icon={faPen}
                        className='layer-icon'
                      />
                    </Tooltip>
                  </>
                )}
              </span>
            </span>
            {
              (layer instanceof OlLayerTile || layer instanceof OlLayerImage) && (
                <div
                  aria-label='layer-context-menu'
                >
                  <LayerTreeContextMenu
                    layer={layer}
                    visibleLegendsIds={visibleLegendsIds}
                    setVisibleLegendsIds={setVisibleLegendsIds}
                  />
                </div>
              )
            }

          </div>
          {
            layer.get('visible') &&
            <div
              className="layer-transparency"
              role="button"
              aria-label='transparency-slider'
              tabIndex={0}
              onClick={e => e.stopPropagation()}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              onDragStart={e => {e.stopPropagation(); e.preventDefault();}}
              draggable={true}
            >
              <LayerTransparencySlider
                tooltip={{
                  formatter: val => `${t('LayerTree.transparency')}: ${val}%`
                }}
                layer={layer}
              />
            </div>
          }
          {
            (layer.get('visible') && layer.get('type') as LayerType === 'WMSTIME') &&
            <div className="layer-time-slider">
              <WmsTimeSlider
                layer={layer as OlLayerTile<OlSourceTileWMS> | OlLayerImage<OlSourceImageWMS>}
              />
            </div>
          }
          {
            (layer.get('visible') && isWmsLayer(layer) && visibleLegendsIds.includes(getUid(layer))) &&
            <Legend
              layer={layer}
              errorMsg={t('LayerTree.noLegendAvailable')}
              extraParams={legendRequestExtraParams}
              headers={layer.get('useBearerToken') ? legendRequestHeaders : undefined}
            />
          }
        </>
      );
    }
  };

  if (!map) {
    return <></>;
  }

  return (
    <RgLayerTree
      aria-label="layertree"
      className="layertree"
      nodeTitleRenderer={treeNodeTitleRenderer}
      filterFunction={treeFilterFunction}
      draggable
      {...restProps}
    />
  );
};

export default LayerTree;
