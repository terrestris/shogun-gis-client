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

export type MapDrawerProps = DrawerProps;

export const MapDrawer: React.FC<MapDrawerProps> = ({
  open,
  children,
  ...passThroughProps
}) => {

  const map = useMap();

  useEffect(() => {
    document.querySelectorAll('#map')[0]?.classList.toggle('bisected', !!open);
  }, [open]);

  const onAfterDrawerOpenChange = () => {
    map?.updateSize();
  };

  return (
    <Drawer
      className="map-drawer"
      mask={false}
      open={open}
      placement="right"
      width={getComputedStyle(document.documentElement).getPropertyValue('--editDrawerWidth')}
      afterOpenChange={onAfterDrawerOpenChange}
      {...passThroughProps}
    >
      {children}
    </Drawer>
  );
};

export default MapDrawer;
