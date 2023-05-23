import React, {
  useEffect
} from 'react';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import {
  hide as hideEditFeatureDrawer
} from '../../store/editFeatureDrawerOpen';

import MapDrawer, {
  MapDrawerProps
} from '../MapDrawer';

export type EditFeatureDrawerProps = MapDrawerProps & {};

export const EditFeatureDrawer: React.FC<EditFeatureDrawerProps> = ({
  children,
  ...passThroughProps
}) => {

  const isDrawerOpen = useAppSelector(state => state.editFeatureDrawerOpen);

  const map = useMap();

  const dispatch = useAppDispatch();

  const onDrawerClose = (evt: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
    dispatch(hideEditFeatureDrawer());
  };

  return (
    <MapDrawer
      className="map-drawer edit-feature-drawer"
      onClose={onDrawerClose}
      open={isDrawerOpen}
      {...passThroughProps}
    >
      {children}
    </MapDrawer>
  );
};

export default EditFeatureDrawer;
