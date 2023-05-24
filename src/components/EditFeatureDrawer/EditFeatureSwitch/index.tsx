import React, { useState } from 'react';

import { FeatureCollection } from 'geojson';

import { t } from 'i18next';

import MapBrowserEvent from 'ol/MapBrowserEvent';

import { Logger } from '@terrestris/base-util';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import { ToggleButton, useMap } from '@terrestris/react-geo';

import SimpleButton, {
  SimpleButtonProps
} from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';

import './index.less';

import { WmsLayer } from '@terrestris/react-geo/dist/Util/typeUtils';

import { getBearerTokenHeader } from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';
import { setFeature } from '../../../store/editFeature';

export type EditFeatureSwitchProps = SimpleButtonProps & {};

export const EditFeatureSwitch: React.FC<EditFeatureSwitchProps> = ({
  ...passThroughProps
}) => {
  const dispatch = useAppDispatch();
  const map = useMap();
  const client = useSHOGunAPIClient();

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
      'EPSG:3857',
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
        // TODO: FeatureCollection seems to have always 0 features
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
        onClick={() => Logger.info('TODO: create new featuer on layer')}
      >
        {t('EditFeatureDrawer.createFeature')}
      </SimpleButton>
    </div>
  );
};

export default EditFeatureSwitch;
