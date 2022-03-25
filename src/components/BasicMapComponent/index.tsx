import React from 'react';

import MapComponent, {
  MapComponentProps
} from '@terrestris/react-geo/dist/Map/MapComponent/MapComponent';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';

export const BasicMapComponent: React.FC<Partial<MapComponentProps>> = (
  props
): JSX.Element => {
  const map = useMap();

  if (!map) {
    return <></>;
  }

  return <MapComponent map={map} {...props} />;
};

export default BasicMapComponent;
