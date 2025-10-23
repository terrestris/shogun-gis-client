import React, {
  useState,
  useEffect
} from 'react';

import {
  Control as OlControl
} from 'ol/control';

import {
  createPortal
} from 'react-dom';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

interface MapControlProps {
  className?: string;
  children: React.ReactNode;
}

export const MapControl = ({
  className = '',
  children
}: MapControlProps) => {
  const [element] = useState(() => document.createElement('div'));

  const map = useMap();

  useEffect(() => {
    if (!map) {
      return;
    }

    element.className = `${className} ol-unselectable ol-control`.trim();
    const control = new OlControl({ element });
    map.addControl(control);

    return () => {
      map.removeControl(control);
    };
  }, [map, element, className]);

  return createPortal(children, element);
};

export default MapControl;
