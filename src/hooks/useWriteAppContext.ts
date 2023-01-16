import OlFeature from 'ol/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlLayerBase from 'ol/layer/Base';
import OlLayerGroup from 'ol/layer/Group';
import OlLayer from 'ol/layer/Layer';
import OlLayerVector from 'ol/layer/Vector';
import {
  toLonLat
} from 'ol/proj';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import {
  getUid
} from 'ol/util';

import useMap from '@terrestris/react-geo/dist/Hook/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-geo/dist/Util/DigitizeUtil';

import Application, {
  DefaultApplicationLayerConfig,
  DefaultApplicationTheme,
  DefaultApplicationToolConfig,
  DefaultLayerTree
} from '@terrestris/shogun-util/dist/model/Application';

import {
  ClientTools
} from '../store/toolConfig';

import useAppSelector from './useAppSelector';
import useSHOGunAPIClient from './useSHOGunAPIClient';

const useWriteAppContext = () => {
  const map = useMap();

  const appId = useAppSelector(state => state.id);
  const appTitle = useAppSelector(state => state.title);
  const appDescription = useAppSelector(state => state.description);
  const appLogoPath = useAppSelector(state => state.logoPath);
  const appToolConfig = useAppSelector(state => state.toolConfig);

  const client = useSHOGunAPIClient();

  if (!map || !client) {
    return;
  }

  const getLayerConfig = (layers: OlLayer[]) => {
    const layerConfig = layers
      .filter(layer => layer.get('appSettings'))
      .map(layer => layer.get('appSettings') as DefaultApplicationLayerConfig);

    const externalLayerConfig = getExternalLayerConfig(layers);

    return [
      ...layerConfig,
      ...externalLayerConfig
    ];
  };

  const getExternalLayerConfig = (layers: OlLayer[]) => {
    return layers
      .filter(layer => layer.get('isExternalLayer'))
      .map(layer => ({
        layerId: `EXTERNAL-${getUid(layer)}`,
        sourceConfig: {
          legendUrl: layer.get('legendUrl'),
          useBearerToken: false,
          // TODO
          // attribution: (layer.getSource() as OlSourceImageWMS).getAttributions()(),
          layerNames: (layer.getSource() as OlSourceImageWMS).getParams().LAYERS,
          url: (layer.getSource() as OlSourceImageWMS).getUrl() || ''
        },
        clientConfig: {
          opacity: layer.getOpacity()
        }
      } as DefaultApplicationLayerConfig));
  };

  const getTheme = (): DefaultApplicationTheme => {
    const appElement = document.querySelector('.App');

    if (!appElement) {
      return {};
    }

    const style = getComputedStyle(appElement);

    return {
      primaryColor: style.getPropertyValue('--primaryColor'),
      secondaryColor: style.getPropertyValue('--secondaryColor'),
      complementaryColor: style.getPropertyValue('--complementaryColor')
    };
  };

  const getDigitizedFeatures = () => {
    const clonedFeatures: OlFeature[] = [];
    const mapProjection = map.getView().getProjection().getCode();
    const digitizeLayer = DigitizeUtil.getDigitizeLayer(map);
    const digitizedFeatures = digitizeLayer.getSource()?.getFeatures();

    if (!digitizedFeatures || digitizedFeatures.length === 0) {
      return [];
    }

    digitizedFeatures.forEach(feat => {
      const clonedFeature = feat.clone();
      clonedFeature.getGeometry()?.transform(mapProjection, 'EPSG:4326');
      clonedFeatures.push(clonedFeature);
    });

    return new OlFormatGeoJSON().writeFeaturesObject(clonedFeatures);
  };

  const getDigitizeStyle = () => {
    const digitizeLayer = DigitizeUtil.getDigitizeLayer(map);

    return digitizeLayer.get('gsStyle');
  };

  const getToolConfig = (): DefaultApplicationToolConfig[] => {
    const filteredToolConfig = appToolConfig.filter(toolConfig => toolConfig.name !== ClientTools.DRAW_TOOLS);
    const drawToolConfig = appToolConfig.find(toolConfig => toolConfig.name === ClientTools.DRAW_TOOLS);

    return [
      ...filteredToolConfig,
      {
        name: ClientTools.DRAW_TOOLS,
        config: {
          visible: drawToolConfig?.config.visible,
          features: getDigitizedFeatures(),
          style: getDigitizeStyle()
        }
      }
    ];
  };

  const getLayerTreeChildren = (layers: OlLayerBase[]): DefaultLayerTree[] => {
    const children: DefaultLayerTree[] = [];

    for (const layer of layers) {
      if (layer.get('hideInLayerTree')) {
        continue;
      }

      if (layer instanceof OlLayerVector) {
        continue;
      }

      if (layer instanceof OlLayerGroup) {
        children.push({
          title: layer.get('name'),
          checked: layer.getVisible(),
          children: getLayerTreeChildren([...layer.getLayers().getArray()].reverse())
        });
      }

      if (layer instanceof OlLayer) {
        if (layer.get('isExternalLayer')) {
          children.push({
            title: layer.get('name'),
            checked: layer.getVisible(),
            layerId: `EXTERNAL-${getUid(layer)}`
          });
        } else {
          children.push({
            title: layer.get('name'),
            checked: layer.getVisible(),
            layerId: layer.get('shogunId')
          });
        }
      }
    }

    return children;
  };

  const writeAppContext = () => {
    const view = map.getView();
    const center = view.getCenter();
    const layers = map.getLayers().getArray();
    const theme = getTheme();

    const app: Application = {
      id: appId,
      name: appTitle,
      created: new Date(),
      modified: new Date(),
      stateOnly: true,
      clientConfig: {
        description: appDescription,
        mapView: {
          center: center ? toLonLat(center, view.getProjection()) as [number, number] : [0, 0],
          zoom: view.getZoom(),
          resolutions: view.getResolutions(),
          projection: view.getProjection().getCode(),
          extent: view.get('extent')
        },
        theme: {
          ...theme,
          ...{
            logoPath: appLogoPath
          }
        }
      },
      layerTree: {
        checked: true,
        children: getLayerTreeChildren([...layers].reverse())
      },
      layerConfig: getLayerConfig(map.getLayerGroup().getLayersArray()),
      toolConfig: getToolConfig()
    };

    return app;
  };

  return writeAppContext;
};

export default useWriteAppContext;
