import React, {
  useEffect
} from 'react';

import BaseLayer from 'ol/layer/Base';

import ImageLayer from 'ol/layer/Image';
import TileLayer from 'ol/layer/Tile';

import {
  PermalinkUtil
} from '@terrestris/ol-util';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import MapComponent, {
  MapComponentProps
} from '@terrestris/react-geo/dist/Map/MapComponent/MapComponent';

import useQueryParams from '../../hooks/useQueryParams';

export const BasicMapComponent: React.FC<Partial<MapComponentProps>> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const queryParams = useQueryParams();

  useEffect(() => {
    if (map) {
      const identifier = (l: BaseLayer) => l.get('name');
      const filter = (l: BaseLayer) => (l instanceof TileLayer || l instanceof ImageLayer);

      PermalinkUtil.applyLink(map, ';', identifier, filter);
    }
  }, [
    queryParams.get('center'),
    queryParams.get('zoom'),
    queryParams.get('layers')
  ]);

  if (!map) {
    return <></>;
  }

  return (
    <MapComponent
      map={map}
      {...restProps}
    />
  );
};

export default BasicMapComponent;
