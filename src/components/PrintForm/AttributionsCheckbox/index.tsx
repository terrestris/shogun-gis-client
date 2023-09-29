import React, {
  useEffect, useState
} from 'react';

import {
  Checkbox,
  CheckboxProps
} from 'antd';

import { CheckboxChangeEvent } from 'antd/lib/checkbox';

import OlGeometry from 'ol/geom/Geometry';
import OlLayerGroup from 'ol/layer/Group';
import OlLayer from 'ol/layer/Layer';
import OlLayerVector from 'ol/layer/Vector';
import OlLayerRenderer from 'ol/renderer/Layer';
import OlSource from 'ol/source/Source';
import OlSourceVector from 'ol/source/Vector';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';
import LayerUtil from '@terrestris/ol-util/dist/LayerUtil/LayerUtil';
import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import useAppDispatch from '../../../hooks/useAppDispatch';
import { addCustomParam } from '../../../store/print';

interface AttributionsCheckboxProps extends CheckboxProps {
  printManager: MapFishPrintV3Manager;
}

export type LayerType = OlLayer<OlSource, OlLayerRenderer<OlLayerVector<OlSourceVector<OlGeometry>>>>;

export const AttributionsCheckbox: React.FC<AttributionsCheckboxProps> = ({
  checked,
  printManager,
  ...restProps
}): JSX.Element => {

  const [checkedState, setCheckedState] = useState<boolean>(checked ?? true);

  const dispatch = useAppDispatch();
  const map = useMap();

  useEffect(() => {
    if (!map || !printManager) {
      return;
    }

    const getPrintableLayers = (printLayer: LayerType): LayerType[] => {
      const layers = MapUtil.getAllLayers(map);
      return layers.filter((layer) => {
        const layerName = layer.get('name');
        return layerName &&
          !(layerName.includes('react-geo')) &&
          layer.getVisible() &&
          !(layer instanceof OlLayerGroup) &&
          layer !== printLayer;
      }) as LayerType[];
    };

    const getAttributions = (): string => {
      if (!checkedState) {
        return '';
      }
      const extentLayer = printManager.getExtentLayer();
      if (!extentLayer) {
        return '';
      }
      const layers = getPrintableLayers(extentLayer);
      let allAttributions: string[] = [];

      layers.filter((layer: LayerType) => {
        return layer.getSource && layer.getSource()?.getAttributions && layer.getSource()?.getAttributions();
      }).forEach((layer: LayerType) => {
        const currentLayerAttribution = LayerUtil.getLayerAttributionsText(layer, ',', true);

        if (!allAttributions.includes(currentLayerAttribution)) {
          allAttributions.push(currentLayerAttribution);
        }
      });
      return allAttributions.join(', ').trim();
    };

    dispatch(addCustomParam({
      ['attributions']: getAttributions()
    }));
  }, [checkedState, dispatch, map, printManager]);

  useEffect(() => {
    if (checked !== undefined) {
      setCheckedState(checked);
    }
  }, [checked]);

  return (
    <Checkbox
      checked={checkedState}
      onChange={(e: CheckboxChangeEvent) => setCheckedState(e.target.checked)}
      {...restProps}
    />
  );
};

export default AttributionsCheckbox;
