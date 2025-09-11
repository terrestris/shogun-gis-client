import React, {
  useEffect
} from 'react';

import { ObjectEvent as OlObjectEvent } from 'ol/Object';

import {
  useTranslation
} from 'react-i18next';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import BackgroundLayerChooser from '@terrestris/react-geo/dist/BackgroundLayerChooser/BackgroundLayerChooser';

import {
  MapComponent,
  MapComponentProps
} from '@terrestris/react-geo/dist/Map/MapComponent/MapComponent';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppSelector from '../../hooks/useAppSelector';

import usePlugins from '../../hooks/usePlugins';

import {
  isMapIntegration
} from '../../plugin';

import './index.less';

export const BasicMapComponent: React.FC<Partial<MapComponentProps>> = ({
  ...restProps
}): JSX.Element => {
  const map = useMap();
  const plugins = usePlugins();

  const {
    t,
    i18n
  } = useTranslation();

  const blcVisible = useAppSelector(state => state.backgroundLayerChooser.visible);
  const allowEmptyBackground = useAppSelector(state => state.backgroundLayerChooser.allowEmptyBackground);

  /**
   * Updates external layer group name when language changes.
   */
  useEffect(() => {
    if (!map) {
      return;
    }

    const targetGroups = MapUtil.getLayersByProperty(map, 'isExternalLayerGroup', true);
    if (targetGroups?.length !== 1) {
      return;
    }
    const targetGroup = targetGroups[0];
    const oldName = targetGroups[0].get('name');
    targetGroup.set('name', t('AddLayerModal.externalWmsFolder'));
    const changeEvent = new OlObjectEvent('change:layers', 'name', oldName);
    targetGroup.dispatchEvent(changeEvent);
  }, [i18n.language, map, t]);

  const pluginComponents: JSX.Element[] = [];

  if (plugins) {
    plugins.forEach(plugin => {
      if (isMapIntegration(plugin.integration)) {
        const {
          key,
          wrappedComponent: WrappedPluginComponent
        } = plugin;

        pluginComponents.push(
          <WrappedPluginComponent
            key={key}
          />
        );
      }
    });
  }

  if (!map) {
    return <></>;
  }

  return (
    <MapComponent
      map={map}
      {...restProps}
    >
      {blcVisible &&
        <BackgroundLayerChooser
          layers={map.getAllLayers().filter(l => l.get('isBackgroundLayer') === true).reverse()}
          allowEmptyBackground = {allowEmptyBackground}
        />
      }
      {
        pluginComponents
      }
    </MapComponent>
  );
};

export default BasicMapComponent;
