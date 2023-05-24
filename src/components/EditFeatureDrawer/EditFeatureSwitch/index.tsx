import React, {
  useState
} from 'react';

import {
  FeatureCollection
} from 'geojson';

import MapBrowserEvent from 'ol/MapBrowserEvent';

import {
  useTranslation
} from 'react-i18next';

import {
  Logger
} from '@terrestris/base-util';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import SimpleButton, {
  SimpleButtonProps
} from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import ToggleButton from '@terrestris/react-geo/dist/Button/ToggleButton/ToggleButton';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import { WmsLayer } from '@terrestris/react-geo/dist/Util/typeUtils';

import { getBearerTokenHeader } from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import {
  setFeature
} from '../../../store/editFeature';

import './index.less';

export type EditFeatureSwitchProps = SimpleButtonProps & {};

export const EditFeatureSwitch: React.FC<EditFeatureSwitchProps> = ({
  ...passThroughProps
}) => {

  const dispatch = useAppDispatch();
  const map = useMap();
  const client = useSHOGunAPIClient();
  const {
    t
  } = useTranslation();

  const [createActive, setCreateActive] = useState<boolean>(true);
  const [layer, setLayer] = useState<WmsLayer | undefined>(undefined);

  const layerId = useAppSelector(state => state.editFeature.layerId);

  const requestFeature = async (evt: MapBrowserEvent<UIEvent>) => {
    if (!map) {
      return;
    }

    const viewResolution = map.getView().getResolution();
    if (!viewResolution) {
      return;
    }
    const source = layer?.getSource();
    const url = source?.getFeatureInfoUrl(
      evt.coordinate,
      viewResolution,
      map.getView().getProjection().getCode(),
      { INFO_FORMAT: 'application/json' }
    );

    if (url) {
      try {
        const response = await fetch(url, {
          headers: {
            ...getBearerTokenHeader(client?.getKeycloak())
          }
        });
        const json: FeatureCollection = await response.json();
        // TODO: Feature is always logged by one additional time when function
        // is disabled/enabled, although `un` is performed...
        console.log(json);
        if (json.features.length) {
          dispatch(setFeature(json.features[0]));
        }
      } catch (error) {
        Logger.error('Error:', error);
      }
    }
  };

  const selectFeature = async (pressed: boolean) => {
    if (!map) {
      return;
    }

    if (pressed) {
      setCreateActive(false);

      if (layerId) {
        const selectedLayer = MapUtil.getLayerByOlUid(
          map,
          layerId
        ) as unknown as WmsLayer;
        setLayer(selectedLayer);

        map.on('singleclick', requestFeature);
      }
    } else {
      setCreateActive(true);
      dispatch(setFeature(null));

      map.un('singleclick', requestFeature);
    }
  };

  const onCreateClick = () => {
    dispatch(setFeature({
      type: 'Feature',
      properties: {},
      geometry: {
        // TODO Get geometry type
        type: 'Point',
        coordinates: []
      }
    }));
  };

  return (
    <div className="createOrEditFeature">
      <ToggleButton
        {...passThroughProps}
        onToggle={selectFeature}
      >
        {t('EditFeatureDrawer.selectFeature')}
      </ToggleButton>
      <SimpleButton
        {...passThroughProps}
        disabled={!createActive}
        onClick={onCreateClick}
      >
        {t('EditFeatureDrawer.createFeature')}
      </SimpleButton>
    </div>
  );
};

export default EditFeatureSwitch;
