import React, {
  useEffect
} from 'react';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import MapComponent, {
  MapComponentProps
} from '@terrestris/react-geo/dist/Map/MapComponent/MapComponent';
import { 
  PermalinkUtil
} from '@terrestris/ol-util';
import useQueryParams from '../../hooks/useQueryParams';


export const BasicMapComponent: React.FC<Partial<MapComponentProps>> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const queryParams = useQueryParams();

  useEffect(() => {
    if (map) {PermalinkUtil.applyLink(map);}        
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
