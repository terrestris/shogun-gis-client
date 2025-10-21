import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import _isNil from 'lodash/isNil';

import {
  getUid,
  MapEvent as OlMapEvent
} from 'ol';
import BaseEvent from 'ol/events/Event';
import OlBaseLayer from 'ol/layer/Base';
import OlLayerGroup from 'ol/layer/Group';
import OlLayer from 'ol/layer/Layer';
import OlVectorLayer from 'ol/layer/Vector';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  MapUtil
} from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import RgLayerTree, {
  LayerTreeProps as RgLayerTreeProps
} from '@terrestris/react-geo/dist/LayerTree/LayerTree';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';

import {
  openTimeLayerModal
} from '../../../store/timeLayerModal';

import TreeNodeRenderer from './TreeNodeRenderer';

import './index.less';

export type LayerTreeProps = Partial<RgLayerTreeProps>;

export type TileLoadCounter = {
  loading: number;
  loaded: number;
  percent: number;
};
export type LayerTileLoadCounter = Record<string, TileLoadCounter>;

export const LayerTree: React.FC<LayerTreeProps> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const dispatch = useAppDispatch();

  const initialLayersUid = map?.getAllLayers().map(l => getUid(l));

  const showLegendsState: boolean = useAppSelector(state => state.layerTree.showLegends) ?? false;
  const layerIconsVisible: boolean = useAppSelector(state => state.layerTree.layerIconsVisible) ?? false;

  const [visibleLegendsIds, setVisibleLegendsIds] = useState<string[]>(showLegendsState ? initialLayersUid ?? [] : []);
  const [layerTileLoadCounter, setLayerTileLoadCounter] = useState<LayerTileLoadCounter>({});
  const [mapScale, setMapScale] = useState<number>();

  const handleTimeModalOpen = useCallback((layer: OlLayer) => {
    const layerId = getUid(layer);
    dispatch(openTimeLayerModal(layerId));
  }, [dispatch]);

  const registerTileLoadHandler = useCallback(() => {
    if (!map) {
      return;
    }

    const allLayers = MapUtil.getAllLayers(map);

    allLayers.forEach(layer => {
      if (layer instanceof OlLayer) {
        const source = layer.getSource();
        if (source instanceof OlSourceTileWMS) {
          source.on('tileloadstart', tileLoadStartListener);
          source.on(['tileloadend', 'tileloaderror'], tileLoadEndListener);
        } else if (source instanceof OlSourceImageWMS) {
          source.on('imageloadstart', tileLoadStartListener);
          source.on(['imageloadend', 'imageloaderror'], tileLoadEndListener);
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
          if (source instanceof OlSourceTileWMS) {
            source.un('tileloadstart', tileLoadStartListener);
            source.un(['tileloadend', 'tileloaderror'], tileLoadEndListener);
          } else if (source instanceof OlSourceImageWMS) {
            source.un('imageloadstart', tileLoadStartListener);
            source.un(['imageloadend', 'imageloaderror'], tileLoadEndListener);
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
    if (layer.get('isBackgroundLayer')) {
      return false;
    }
    if (layer instanceof OlVectorLayer && _isNil(layer.get('shogunId'))) {
      return false;
    }
    return true;
  };

  const nodeTitleRenderer = useCallback((layer: OlBaseLayer) => {
    let loadCounter: TileLoadCounter = {
      loading: 100,
      loaded: 100,
      percent: 100
    };

    if (layer instanceof OlLayer && getUid(layer.getSource())) {
      loadCounter = layerTileLoadCounter[getUid(layer.getSource())];
    }

    return (
      <TreeNodeRenderer
        layer={layer}
        layerIconsVisible={layerIconsVisible}
        mapScale={mapScale}
        layerTileLoadCounter={loadCounter}
        legendVisible={visibleLegendsIds.includes(getUid(layer))}
        visibleLegendsIds={visibleLegendsIds}
        setVisibleLegendsIds={setVisibleLegendsIds}
        onTimeModalOpen={handleTimeModalOpen}
      />
    );
  }, [layerIconsVisible, layerTileLoadCounter, mapScale, visibleLegendsIds, handleTimeModalOpen]);

  if (!map) {
    return <></>;
  }

  return (
    <RgLayerTree
      aria-label="layertree"
      className="layertree"
      nodeTitleRenderer={nodeTitleRenderer}
      filterFunction={treeFilterFunction}
      draggable
      {...restProps}
    />
  );
};

export default LayerTree;
