import React from 'react';

import {
  Alert
} from 'antd';

import ConfigProvider from 'antd/lib/config-provider';
import deDE from 'antd/lib/locale/de_DE';
import enGB from 'antd/lib/locale/en_GB';

import {
  defaults as OlControlDefaults
} from 'ol/control';
import OlLayerGroup from 'ol/layer/Group';
import OlLayerTile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import {
  fromLonLat
} from 'ol/proj';
import OlSourceOsm from 'ol/source/OSM';
import OlSourceTileWMS from 'ol/source/TileWMS';
import OlView from 'ol/View';
import {
  render
} from 'react-dom';
import {
  Provider
} from 'react-redux';

import MapContext from '@terrestris/react-geo/dist/Context/MapContext/MapContext';

import App from './App';
import i18n from './i18n';
import {
  store
} from './store/store';

import './index.less';

const getConfigLang = (lang: string) => {
  switch (lang) {
    case 'en':
      return enGB;
    case 'de':
      return deDE;
    default:
      return enGB;
  }
};

const setupMap = async () => {
  const osmLayer = new OlLayerTile({
    source: new OlSourceOsm()
  });
  osmLayer.set('name', 'OpenStreetMap');

  const temperatureDayLayer = new OlLayerTile({
    opacity: 0.5,
    source: new OlSourceTileWMS({
      url: 'https://neo.gsfc.nasa.gov/wms/wms',
      projection: 'CRS:84',
      params: {
        LAYERS: 'MOD_LSTD_CLIM_M'
      }
    })
  });
  temperatureDayLayer.set('name', 'Average Land Surface Temperature (Day)');

  const temperatureNightLayer = new OlLayerTile({
    opacity: 0.5,
    visible: false,
    source: new OlSourceTileWMS({
      url: 'https://neo.gsfc.nasa.gov/wms/wms',
      projection: 'CRS:84',
      params: {
        LAYERS: 'MOD_LSTN_CLIM_M'
      }
    })
  });
  temperatureNightLayer.set('name', 'Average Land Surface Temperature (Night)');

  const eoLayerGroup = new OlLayerGroup({
    layers: [temperatureDayLayer, temperatureNightLayer]
  });
  eoLayerGroup.set('name', 'NASA Earth Observations');

  const backgroundLayerGroup = new OlLayerGroup({
    layers: [osmLayer]
  });
  backgroundLayerGroup.set('name', 'Background');

  const center = fromLonLat([0, 40], 'EPSG:3857');

  return new OlMap({
    view: new OlView({
      center: center,
      zoom: 0
    }),
    layers: [backgroundLayerGroup, eoLayerGroup],
    controls: OlControlDefaults({
      zoom: false
    })
  });
};

const renderApp = async () => {
  try {
    const map = await setupMap();

    render(
      <React.StrictMode>
        <React.Suspense fallback={<span></span>}>
          <ConfigProvider locale={getConfigLang(i18n.language)}>
            <Provider store={store}>
              <MapContext.Provider value={map}>
                <App />
              </MapContext.Provider>
            </Provider>
          </ConfigProvider>
        </React.Suspense>
      </React.StrictMode>,
      document.getElementById('app')
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    render(
      <React.StrictMode>
        <Alert
          className="error-boundary"
          message="Error while loading the application"
          description="An unexpected error occured while loading the application. Please try to reload the page."
          type="error"
          showIcon
        />
      </React.StrictMode>,
      document.getElementById('app')
    );
  }
};

renderApp();
