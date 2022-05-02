import React from 'react';

import OlLayerBase from 'ol/layer/Base';
import OlLayerVector from 'ol/layer/Vector';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import LayerTree, {
  LayerTreeProps
} from '@terrestris/react-geo/dist/LayerTree/LayerTree';

export const BasicLayerTree: React.FC<Partial<LayerTreeProps>> = (
  props
): JSX.Element => {
  const map = useMap();

  if (!map) {
    return <></>;
  }

  return (
    <LayerTree
      map={map}
      filterFunction={(layer: OlLayerBase) => !(layer instanceof OlLayerVector)}
      {...props}
    />
  );
};

export default BasicLayerTree;
