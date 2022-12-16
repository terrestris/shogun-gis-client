import React, {
  useState
} from 'react';

import {
  getUid
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

import WmsTimeSlider from '../../WmsTimeSlider';

import LayerTreeContextMenu from './LayerTreeContextMenu';

import './index.less';

export type LayerTreeProps = {} & Partial<RgLayerTreeProps>;

export const LayerTree: React.FC<LayerTreeProps> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const {
    t
  } = useTranslation();

  const [visibleLegendsIds, setVisibleLegendsIds] = useState<string[]>([]);

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
            <span>{layer.get('name')}</span>
            {
              (layer instanceof OlLayerTile || layer instanceof OlLayerImage) && (
                <LayerTreeContextMenu
                  layer={(layer)}
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
            layer.get('visible') && visibleLegendsIds.includes(getUid(layer)) &&
            <Legend
              layer={layer as OlLayerTile<OlSourceTileWMS> | OlLayerImage<OlSourceImageWMS>}
              errorMsg={t('LayerTree.noLegendAvailable')}
              extraParams={{
                scale,
                LEGEND_OPTIONS: 'fontAntiAliasing:true;forceLabels:on',
                TRANSPARENT: true
              }}
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
