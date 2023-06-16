import React, {
  useEffect
} from 'react';

import {
  Drawer
} from 'antd';

import type {
  DrawerProps
} from 'antd/es/drawer';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';

export type MapDrawerProps = DrawerProps & {};

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
      width="25vw"
      afterOpenChange={onAfterDrawerOpenChange}
      {...passThroughProps}
    >
      {children}
    </Drawer>
  );
};

export default MapDrawer;
