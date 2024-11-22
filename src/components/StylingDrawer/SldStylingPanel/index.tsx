import React, {
  useEffect, useState, useCallback
} from 'react';

import {
  CardStyle, CardStyleProps
} from 'geostyler/dist/Component/CardStyle/CardStyle';
import SLDParser from 'geostyler-sld-parser';
import { Style as GsStyle } from 'geostyler-style';
import Layer from 'ol/layer/Layer';
import {
  ImageWMS, TileWMS
} from 'ol/source';

import { Logger } from '@terrestris/base-util';
import { MapUtil } from '@terrestris/ol-util';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppSelector from '../../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';
import {
  fetchGeoserverStyle, fetchWorkspaceFromGetCapabilities, getLayerUrl
} from '../../../utils/geoserverUtils';

export type SldStylingPanelProps = CardStyleProps;

const SldStylingPanel: React.FC<SldStylingPanelProps> = (props): JSX.Element => {
  const [style, setStyle] = useState<GsStyle | undefined>();
  const layerUid = useAppSelector(state => state.stylingDrawerLayerUid);
  const map = useMap();
  const client = useSHOGunAPIClient();

  const getStyle = useCallback(async () => {
    if (!map || !layerUid) {
      return;
    }

    const layer = MapUtil.getLayerByOlUid(map, layerUid) as Layer;
    if (!layer) {
      return;
    }

    const source = layer.getSource();
    if (!(source instanceof ImageWMS || source instanceof TileWMS)) {
      return;
    }

    const layerUrl = getLayerUrl(source);
    if (!layerUrl) {
      return;
    }

    try {
      const workspaceInfo = await fetchWorkspaceFromGetCapabilities(layerUrl, client);
      if (!workspaceInfo) {return;}

      const geoserverStyle = await fetchGeoserverStyle(workspaceInfo.workspace, workspaceInfo.layerName, layerUrl, client);
      if (geoserverStyle) {
        const parser = new SLDParser();
        const { output: sldObject } = await parser.readStyle(geoserverStyle);
        setStyle(sldObject);
      }
    } catch (error) {
      Logger.error('Error: ', error);
    }
  }, [map, layerUid, client]);

  useEffect(() => {
    getStyle();
  }, [getStyle]);

  useEffect(() => {
    if (!map || !style) {
      return;
    }

    const layer = MapUtil.getLayerByOlUid(map, layerUid) as Layer;
    const source = layer?.getSource() as ImageWMS;
    if (!source) {
      return;
    }

    style.name = source.getParams().LAYERS;

    const parser = new SLDParser();
    parser.writeStyle(style).then(({ output: sld }) => {
      if (sld) {
        source.updateParams({
          SLD_BODY: sld,
          STYLES: style.name
        });
      }
    });
  }, [style, map, layerUid]);

  if (!map || !style) {
    return <></>;
  }

  return (
    <CardStyle
      style={style}
      onStyleChange={setStyle}
      {...props}
    />
  );
};

export default SldStylingPanel;
