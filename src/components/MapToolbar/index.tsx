import React, {
  useState,
  FC,
  JSX
} from 'react';

import {
  faPlus,
  faMinus,
  faLocation,
  faGlobe,
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
import ZoomToExtentButton from '@terrestris/react-geo/dist/Button/ZoomToExtentButton/ZoomToExtentButton';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppSelector from '../../hooks/useAppSelector';
import Toolbar, {
  ToolbarProps
} from '../Toolbar';

import './index.less';

export type MapToolbarProps = React.HTMLAttributes<HTMLDivElement> & ToolbarProps;

export const MapToolbar: FC<MapToolbarProps> = (): JSX.Element => {
  const {
    t
  } = useTranslation();
  const map = useMap();

  const [geolocationButtonPressed, setGeolocationButtonPressed] = useState(false);

  const showGeolocation = useAppSelector(state => state.mapToolbar.showGeolocation);
  const showZoomFullExtent = useAppSelector(state => state.mapToolbar.showZoomFullExtent);

  const btnTooltipProps = {
    tooltipPlacement: 'left' as TooltipPlacement,
    tooltipProps: {
      mouseEnterDelay: 0.5
    }
  };

  const initialCenter = map?.getView().getCenter();
  const initialZoom = map?.getView().getZoom();

  return (
    <Toolbar
      id="map-toolbar"
      alignment="vertical"
      role="toolbar"
    >
      {map && showZoomFullExtent && initialCenter && Number.isFinite(initialZoom) &&
        <ZoomToExtentButton
          aria-label="zoom-to-full-extent"
          tooltip={t('MapToolbar.zoomToExtentTooltip')}
          center={initialCenter}
          zoom={initialZoom as number}
          icon={
            <FontAwesomeIcon
              icon={faGlobe}
            />
          }
          {...btnTooltipProps}
        />}
      {map &&
        <ZoomButton
          aria-label="zoom-in"
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
          aria-label="zoom-out"
          tooltip={t('MapToolbar.zoomOutTooltip')}
          delta={-1}
          icon={
            <FontAwesomeIcon
              icon={faMinus}
            />
          }
          {...btnTooltipProps}
        />}
      {
        map && showGeolocation && (
          <GeoLocationButton
            aria-label="geolocation"
            follow={true}
            icon={
              <FontAwesomeIcon
                icon={faLocation}
              />
            }
            onChange={() => setGeolocationButtonPressed(!geolocationButtonPressed)}
            pressed={geolocationButtonPressed}
            pressedIcon={
              <FontAwesomeIcon
                icon={faLocationPin}
              />
            }
            showMarker={true}
            tooltip={t('MapToolbar.geoLocation')}
            {...btnTooltipProps}
          />
        )
      }
    </Toolbar>

  );
};

export default MapToolbar;
