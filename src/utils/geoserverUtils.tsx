import ImageWMS from 'ol/source/ImageWMS';
import Source from 'ol/source/Source';
import TileWMS from 'ol/source/TileWMS';

import { Logger } from '@terrestris/base-util';
import { getBearerTokenHeader } from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';
import { SHOGunAPIClient } from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

export type WorkspaceInfo = {
  workspace: string;
  layerName: string;
};

export const fetchWorkspaceFromGetCapabilities = async (
  layerUrl: string,
  client: SHOGunAPIClient | null
): Promise<WorkspaceInfo | undefined> => {
  try {
    const url = `${layerUrl}SERVICE=WMS&REQUEST=GetCapabilities`;
    const response = await fetch(url, {
      headers: {
        ...getBearerTokenHeader(client?.getKeycloak())
      }
    });

    const xml = await response.text();
    const parser = new DOMParser();
    const xmlDocument = parser.parseFromString(xml, 'text/xml');
    const layers = xmlDocument.getElementsByTagName('Layer');

    let output: WorkspaceInfo | undefined;
    Array.from(layers).forEach((layerElement) => {
      const name = layerElement.getElementsByTagName('Name')[0]?.textContent;

      if (name) {
        const [workspace, layerName] = name.split(':');
        output = {
          workspace,
          layerName
        };
      }
    });

    return output;
  } catch (error) {
    Logger.error('Error: ', error);
    return undefined;
  }
};

const fetchSld = async (
  name: string,
  layerUrl: string,
  client: SHOGunAPIClient | null
): Promise<string | undefined> => {
  try {
    const cleanLayerUrl = layerUrl.replace('/ows?', '');
    const url = `${cleanLayerUrl}/rest/styles/${name}.sld`;

    const response = await fetch(url, {
      headers: {
        ...getBearerTokenHeader(client?.getKeycloak())
      }
    });

    const sldData = await response.text();
    if (!sldData) {
      return undefined;
    }
    return sldData;
  } catch (error) {
    Logger.error('Error: ', error);
    return undefined;
  }
};

export const fetchGeoserverStyle = async (
  layerWorkspace: string,
  layerName: string,
  layerUrl: string,
  client: SHOGunAPIClient | null
): Promise<string | undefined> => {
  const cleanLayerUrl = layerUrl.replace('/ows?', '');
  const url = `${cleanLayerUrl}/rest/layers/${layerWorkspace}:${layerName}.json`;

  try {
    const response = await fetch(url, {
      headers: {
        ...getBearerTokenHeader(client?.getKeycloak())
      }
    });

    const data = await response.json();

    if (!data) {
      return undefined;
    }

    const style = data.layer.defaultStyle;
    return await fetchSld(style.name, layerUrl, client);
  } catch (error) {
    Logger.error('Error: ', error);
    return undefined;
  }
};

export const getLayerUrl = (layerSource: Source | undefined): string | false => {
  if (!layerSource) {
    return false;
  }
  let url: string | undefined;
  if (layerSource instanceof TileWMS || layerSource instanceof ImageWMS) {
    url = layerSource instanceof TileWMS ? layerSource.getUrls()?.[0] : layerSource.getUrl();
  }
  return url || false;
};

export const checkIfGeoserverLayer = (layerSource: Source | undefined): boolean => {
  const url = getLayerUrl(layerSource);
  return url ? url.includes('/geoserver/') : false;
};

export default fetchWorkspaceFromGetCapabilities;
