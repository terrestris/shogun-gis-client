import {
  useCallback,
  useEffect
} from 'react';

import OlFeature from 'ol/Feature';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';
import OlStyleCircle from 'ol/style/Circle';
import OlStyleFill from 'ol/style/Fill';
import OlStyleStroke from 'ol/style/Stroke';
import OlStyle from 'ol/style/Style';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

export type HighlightVectorLayerOpts = {
  layerName: string;
};

export const useHighlightVectorLayer = (opts: HighlightVectorLayerOpts) => {
  const map = useMap();

  const initVectorLayer = useCallback(async () => {
    if (!map) {
      return;
    }

    if (MapUtil.getLayerByName(map, opts.layerName)) {
      return;
    }

    const source = new OlSourceVector();

    const fill = new OlStyleFill({
      color: 'rgba(255, 255, 255, 0.15)'
    });
    const stroke = new OlStyleStroke({
      color: 'rgba(209, 70, 47, 1)',
      width: 2
    });
    const featureStyle = new OlStyle({
      fill,
      stroke,
      image: new OlStyleCircle({
        radius: 5,
        fill,
        stroke
      })
    });

    const layer = new OlLayerVector({
      source: source,
      style: featureStyle
    });

    layer.set('name', opts.layerName);

    map.addLayer(layer);
  }, [map, opts.layerName]);

  const deinitVectorLayer = useCallback(() => {
    if (!map) {
      return;
    }

    const vectorLayer = MapUtil.getLayerByName(map, opts.layerName) as OlLayerVector<OlFeature>;

    if (!vectorLayer) {
      return;
    }

    map.removeLayer(vectorLayer);
  }, [map, opts.layerName]);

  useEffect(() => {
    initVectorLayer();

    return () => deinitVectorLayer();
  }, [deinitVectorLayer, initVectorLayer]);
};

export default useHighlightVectorLayer;
