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
import LayerGroup from 'ol/layer/Group';
import OlLayer from 'ol/layer/Layer';
import {
  transformExtent
} from 'ol/proj';
import OlImageWMS from 'ol/source/ImageWMS';
import OlTileWMS from 'ol/source/TileWMS';

import {
  MenuInfo
} from 'rc-menu/lib/interface';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import LayerUtil from '@terrestris/ol-util/dist/LayerUtil/LayerUtil';
import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

export type LayerTreeContextMenuProps = {
  layer: OlLayer<OlImageWMS | OlTileWMS>;
  visibleLegendsIds: string[];
  setVisibleLegendsIds: (ids: string[]) => void;
} & Partial<DropDownProps>;

export const LayerTreeContextMenu: React.FC<LayerTreeContextMenuProps> = ({
  layer,
  visibleLegendsIds,
  setVisibleLegendsIds
}) => {

  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const [extentLoading, setExtentLoading] = useState<boolean>(false);

  const map = useMap();
  const {
    t
  } = useTranslation();

  const onContextMenuItemClick = (evt: MenuInfo): void => {
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
      let extent = await LayerUtil.getExtentForLayer(layer);
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

    const targetFolderName = t('LayerTree.externalWmsFolder');
    const targetGroup: LayerGroup = MapUtil.getLayerByName(map, targetFolderName) as LayerGroup;
    if (targetGroup) {
      const existingLayers = targetGroup.getLayers();
      try {
        if (existingLayers.getLength() === 1) {
          targetGroup.set('hideInLayerTree', true);
        }
        existingLayers.remove(layer);
      } catch (e) {
        Logger.error('Could not remove external layer from map.');
      }
    }
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

  if (layer.get('isExternalLayer')) {
    items.push({
      label: t('LayerTreeContextMenu.removeLayer'),
      key: 'removeExternal'
    });
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
    >
      <FontAwesomeIcon icon={faEllipsisV} />
    </Dropdown>
  );
};

export default LayerTreeContextMenu;
