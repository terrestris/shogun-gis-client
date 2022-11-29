import React, {
  useState
} from 'react';

import {
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Dropdown,
  DropDownProps,
  Menu,
  notification,
  Spin
} from 'antd';
import {
  ItemType
} from 'antd/lib/menu/hooks/useItems';

import {
  getUid
} from 'ol';
import {
  Extent as OlExtent
} from 'ol/extent';
import LayerGroup from 'ol/layer/Group';
import OlLayerImage from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';
import {
  transformExtent
} from 'ol/proj';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  MenuInfo
} from 'rc-menu/lib/interface';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import LayerUtil from '@terrestris/ol-util/dist/LayerUtil/LayerUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import {
  DownloadConfig
} from '@terrestris/shogun-util/dist/model/Layer';
import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from '../../../../hooks/useSHOGunAPIClient';

export type LayerTreeContextMenuProps = {
  layer: OlLayerTile<OlSourceTileWMS> | OlLayerImage<OlSourceImageWMS>;
  visibleLegendsIds: string[];
  setVisibleLegendsIds: (ids: string[]) => void;
} & Partial<DropDownProps>;

export const LayerTreeContextMenu: React.FC<LayerTreeContextMenuProps> = ({
  layer,
  visibleLegendsIds,
  setVisibleLegendsIds,
  ...restProps
}): JSX.Element => {

  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const [extentLoading, setExtentLoading] = useState<boolean>(false);

  const client = useSHOGunAPIClient();
  const map = useMap();
  const {
    t
  } = useTranslation();

  const downloadConfig: DownloadConfig[] = layer.get('downloadConfig') ?? null;

  const onContextMenuItemClick = (evt: MenuInfo): void => {
    if (evt?.key.startsWith('downloadLayer')) {
      const url = evt.key.split('|')[1];
      downloadLayer(decodeURI(url));
    }
    switch (evt?.key) {
      case 'zoomToExtent':
        zoomToLayerExtent();
        break;
      case 'removeExternal':
        removeExternalLayer();
        break;
      case 'toggleLegend':
        const legendId: string = getUid(layer);
        const newLegendIds = [...visibleLegendsIds];
        if (newLegendIds.includes(legendId)) {
          newLegendIds.splice(newLegendIds.indexOf(legendId), 1);
        } else {
          newLegendIds.push(legendId);
        }
        setVisibleLegendsIds(newLegendIds);
        break;
      default:
        break;
    }
    setSettingsVisible(false);
  };

  const zoomToLayerExtent = async (): Promise<void> => {
    if (!map) {
      return;
    }

    setExtentLoading(true);

    try {
      let extent = await LayerUtil.getExtentForLayer(layer, {
        headers: layer.get('useBearerToken') ? {
          ...getBearerTokenHeader(client?.getKeycloak())
        } : {}
      });
      extent = transformExtent(extent, 'EPSG:4326', map.getView().getProjection());
      map.getView().fit(extent);
    } catch (error) {
      Logger.error(error);
      notification.error({
        message: t('LayerTreeContextMenu.extentError')
      });
    } finally {
      setExtentLoading(false);
    }
  };

  const removeExternalLayer = () => {
    if (!map) {
      return;
    }

    const layerGroups = map.getLayers().getArray();

    layerGroups.forEach(layerGroup => {
      if ((layerGroup as LayerGroup).getLayers) {
        const existingLayers = (layerGroup as LayerGroup).getLayers();
        try {
          if (existingLayers.getLength() === 1) {
            layerGroup.setVisible(false);
          }
          existingLayers.remove(layer);
        } catch (e) {
          Logger.error('Could not remove external layer from map.');
        }
      }
    });
  };

  const downloadLayer = async (url: string) => {
    if (!layer) {
      return;
    }
    const reqOpts = {
      method: 'GET',
      headers: {
        ...layer.get('useBearerToken') ? {
          ...getBearerTokenHeader(client?.getKeycloak())
        } : undefined
      }
    };

    const res = await fetch(url, reqOpts);
    const blob = await res.blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.setAttribute('download', layer.get('name'));
    a.click();
  };

  let items: ItemType[] = [{
    label: (
      <Spin
        spinning={extentLoading}
      >
        {t('LayerTreeContextMenu.layerZoomToExtent')}
      </Spin>
    ),
    key: 'zoomToExtent'
  }];

  const legendVisible = visibleLegendsIds.includes(getUid(layer));
  if (layer.getVisible()) {
    items.push({
      label: legendVisible ? t('LayerTreeContextMenu.hideLegend') : t('LayerTreeContextMenu.showLegend'),
      key: 'toggleLegend'
    });
  }

  if (layer.get('isImported')) {
    items.push({
      label: t('LayerTreeContextMenu.removeLayer'),
      key: 'removeExternal'
    });
  }

  if (downloadConfig) {
    const downloadItems = downloadConfig.map((dlConfig: DownloadConfig) => {
      return {
        label: t('LayerTreeContextMenu.downloadLayer', {
          formatName: dlConfig.formatName ?? 'XML'
        }),
        key: `downloadLayer|${encodeURI(dlConfig.downloadUrl)}`
      };
    });
    items.push(...downloadItems);
  }

  const settingsMenu = (
    <Menu
      items={items}
      selectable={false}
      onClick={onContextMenuItemClick}
    />
  );

  return (
    <Dropdown
      overlay={settingsMenu}
      placement="bottomLeft"
      onVisibleChange={setSettingsVisible}
      visible={settingsVisible}
      trigger={['click']}
      {...restProps}
    >
      <FontAwesomeIcon icon={faEllipsisV} />
    </Dropdown>
  );
};

export default LayerTreeContextMenu;
