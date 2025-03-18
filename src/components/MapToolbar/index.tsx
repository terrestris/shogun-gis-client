import React, { useState } from 'react';

import {
  faPlus,
  faMinus,
  faLocation,
  faLocationPin
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
  TooltipPlacement
} from 'antd/es/tooltip';

import {
  useTranslation
} from 'react-i18next';

import {
  GeoLocationButton
} from '@terrestris/react-geo/dist/Button/GeoLocationButton/GeoLocationButton';
import ZoomButton from '@terrestris/react-geo/dist/Button/ZoomButton/ZoomButton';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppSelector from '../../hooks/useAppSelector';
import Toolbar, { ToolbarProps } from '../Toolbar';

import './index.less';

export type MapToolbarProps = React.HTMLAttributes<HTMLDivElement> & ToolbarProps;

export const MapToolbar: React.FC = (): JSX.Element => {
  const {
    t
  } = useTranslation();
  const map = useMap();

  const [geolocationButtonPressed, setGeolocationButtonPressed] = useState(false);

  const mapToolbarVisible = useAppSelector(state => state.mapToolbarVisible.visible);

  const stylingDrawerVisibility = useAppSelector(state => state.stylingDrawerVisibility);
  const editFeatureDrawerOpen = useAppSelector(state => state.editFeatureDrawerOpen);
  const searchResultDrawerOpen = useAppSelector(state => state.searchResult.drawerVisibility);
  const drawerOpen = stylingDrawerVisibility || editFeatureDrawerOpen || searchResultDrawerOpen;
  const className = drawerOpen ? 'drawer-open' : '';

  const btnTooltipProps = {
    tooltipPlacement: 'left' as TooltipPlacement,
    tooltipProps: {
      mouseEnterDelay: 0.5
    }
  };

  return (
    <>
      {mapToolbarVisible &&
        <Toolbar
          id='map-toolbar'
          className={className}
          alignment="vertical"
          role="toolbar"
        >
          {map &&
            <ZoomButton
              aria-label='zoom-in'
              tooltip={t('MapToolbar.zoomInTooltip')}
              icon={
                <FontAwesomeIcon
                  icon={faPlus}
                />
              }
              {...btnTooltipProps}
            />}
          {map &&
            <ZoomButton
              aria-label='zoom-out'
              tooltip={t('MapToolbar.zoomOutTooltip')}
              delta={-1}
              icon={
                <FontAwesomeIcon
                  icon={faMinus}
                />
              }
              {...btnTooltipProps}
            />}
          {map &&
            <GeoLocationButton
              aria-label='geolocation'
              showMarker={true}
              follow={true}
              pressed={geolocationButtonPressed}
              onChange={() => setGeolocationButtonPressed(!geolocationButtonPressed)}
              tooltip={t('MapToolbar.geoLocation')}
              icon={
                <FontAwesomeIcon
                  icon={faLocation}
                />
              }
              pressedIcon={
                <FontAwesomeIcon
                  icon={faLocationPin}
                />
              }
              {...btnTooltipProps}
            />}
        </Toolbar>
      }
    </>
  );
};

export default MapToolbar;
