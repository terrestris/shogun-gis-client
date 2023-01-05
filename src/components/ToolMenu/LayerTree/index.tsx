import React, {
  useState,
  useEffect
} from 'react';

import { Progress } from 'antd';

import {
  getUid, MapBrowserEvent
} from 'ol';
import OlBaseLayer from 'ol/layer/Base';
import OlLayerGroup from 'ol/layer/Group';
import OlLayerImage from 'ol/layer/Image';
import OlLayer from 'ol/layer/Layer';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSource from 'ol/source/Source';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlSourceVector from 'ol/source/Vector';

import {
  useTranslation
} from 'react-i18next';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import RgLayerTree, {
  LayerTreeProps as RgLayerTreeProps
} from '@terrestris/react-geo/dist/LayerTree/LayerTree';
import Legend from '@terrestris/react-geo/dist/Legend/Legend';
import LayerTransparencySlider from '@terrestris/react-geo/dist/Slider/LayerTransparencySlider/LayerTransparencySlider';

import LayerType from '@terrestris/shogun-util/dist/model/enum/LayerType';
import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import WmsTimeSlider from '../../WmsTimeSlider';

import LayerTreeContextMenu from './LayerTreeContextMenu';

import './index.less';

export type LayerTreeProps = {} & Partial<RgLayerTreeProps>;

export type LayerTileLoadCounter = {
  [key: string]: {
    loading: number;
    loaded: number;
    percent: number;
  };
};

export const LayerTree: React.FC<LayerTreeProps> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const client = useSHOGunAPIClient();
  const {
    t
  } = useTranslation();

  const [visibleLegendsIds, setVisibleLegendsIds] = useState<string[]>([]);
  const [layerTileLoadCounter, setLayerTileLoadCounter] = useState<LayerTileLoadCounter>({});

  useEffect(() => {
    if (!map) {
      return;
    }
    const allLayers = MapUtil.getAllLayers(map);
    allLayers.forEach(layer => {
      if (layer instanceof OlLayer) {
        const source = layer.getSource();
        if (!source.hasListener('tileloadstart')) {
          source.on('tileloadstart', tileLoadStartListener);
        }
        if (!source.hasListener('tileloadend') && !source.hasListener('tileloaderror')) {
          source.on(['tileloadend', 'tileloaderror'], tileLoadEndListener);
        }
      }
    });

    return () => {
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
    };
  }, [map]);

  const tileLoadStartListener = (evt: MapBrowserEvent<UIEvent>) => {
    setLayerTileLoadCounter((counter: LayerTileLoadCounter) => {
      const uid = parseInt(getUid(evt.target), 10);
      const update = {...counter};
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

  const tileLoadEndListener = (evt: MapBrowserEvent<UIEvent>) => {
    setLayerTileLoadCounter((counter: LayerTileLoadCounter) => {
      const uid = parseInt(getUid(evt.target), 10);
      const update = {...counter};
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

  const treeFilterFunction = (layer: OlLayer<OlSource> | OlLayerGroup) => {

    if ((layer as OlLayerGroup).getLayers) {
      return !layer.get('hideInLayerTree');
    }

    if ((layer as OlLayer).getSource && ((layer as OlLayer).getSource() as OlSourceVector)?.forEachFeature) {
      return false;
    }
    return true;
  };

  const treeNodeTitleRenderer = (layer: OlBaseLayer) => {
    if (!map) {
      return;
    }

    const mapView = map.getView();
    const unit = mapView.getProjection().getUnits() || 'm';
    const resolution = mapView.getResolution();
    const scale = resolution ? MapUtil.getScaleForResolution(resolution, unit) : undefined;
    const percent = layer instanceof OlLayer && getUid(layer.getSource()) ?
      layerTileLoadCounter[getUid(layer.getSource())]?.percent : 100;

    if (layer instanceof OlLayerGroup) {
      return (
        <div>
          {layer.get('name')}
        </div>
      );
    } else {
      return (
        <>
          <div className="tree-node-header">
            <Progress
              className='loading-indicator'
              type="circle"
              percent={percent}
              format={() => ''}
              width={16}
              strokeWidth={20}
            />
            <span>{layer.get('name')}</span>
            {
              (layer instanceof OlLayerTile || layer instanceof OlLayerImage) && (
                <LayerTreeContextMenu
                  layer={layer}
                  visibleLegendsIds={visibleLegendsIds}
                  setVisibleLegendsIds={setVisibleLegendsIds}
                />
              )
            }

          </div>
          {
            layer.get('visible') &&
            <div className="layer-transparency">
              <LayerTransparencySlider
                tooltip={{
                  formatter: val => `${t('LayerTree.transparency')}: ${val}%`
                }}
                layer={layer}
              />
            </div>
          }
          {
            (layer.get('visible') && layer.get('type') as LayerType === 'WMSTime') &&
            <div className="layer-time-slider">
              <WmsTimeSlider
                layer={layer as OlLayerTile<OlSourceTileWMS> | OlLayerImage<OlSourceImageWMS>}
              />
            </div>
          }
          {
            (layer.get('visible') && visibleLegendsIds.includes(getUid(layer))) &&
            <Legend
              layer={layer as OlLayerTile<OlSourceTileWMS> | OlLayerImage<OlSourceImageWMS>}
              errorMsg={t('LayerTree.noLegendAvailable')}
              extraParams={{
                scale,
                LEGEND_OPTIONS: 'fontAntiAliasing:true;forceLabels:on',
                TRANSPARENT: true
              }}
              headers={
                layer.get('useBearerToken') ?
                  {
                    ...getBearerTokenHeader(client?.getKeycloak())
                  } :
                  {}
              }
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
      className="layertree"
      map={map}
      nodeTitleRenderer={treeNodeTitleRenderer}
      filterFunction={treeFilterFunction}
      draggable
      {...restProps}
    />
  );
};

export default LayerTree;
