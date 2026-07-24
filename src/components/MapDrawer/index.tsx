import React, {
  useEffect
} from 'react';

import {
  Drawer
} from 'antd';

import type {
  DrawerProps
} from 'antd/es/drawer';

import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import './index.less';

export type MapDrawerProps = {
  shrinkMapOnOpen?: boolean;
  additionalMapElementClassName?: string;
} & DrawerProps;

export const MapDrawer: React.FC<MapDrawerProps> = ({
  open,
  children,
  shrinkMapOnOpen = true,
  additionalMapElementClassName = 'bisected',
  ...passThroughProps
}) => {

  const map = useMap();

  useEffect(() => {
    if (!shrinkMapOnOpen) {
      document.querySelectorAll('#map .ol-control')?.forEach(element => {
        element.classList.toggle(additionalMapElementClassName, !!open);
      });
    } else {
      document.querySelectorAll('#map')[0]?.classList.toggle(additionalMapElementClassName, !!open);
    }
  }, [open, additionalMapElementClassName, shrinkMapOnOpen]);

  const onAfterDrawerOpenChange = () => {
    map?.updateSize();
  };

  return (
    <Drawer
      rootClassName="map-drawer"
      mask={false}
      open={open}
      placement="right"
      width={getComputedStyle(document.documentElement).getPropertyValue('--drawerWidth')}
      afterOpenChange={onAfterDrawerOpenChange}
      {...passThroughProps}
    >
      {children}
    </Drawer>
  );
};

export default MapDrawer;
