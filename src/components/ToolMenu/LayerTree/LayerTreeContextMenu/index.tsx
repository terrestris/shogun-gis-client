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
  notification,
  Spin
} from 'antd';
import {
  ItemType
} from 'antd/lib/menu/interface';

import {
  getUid
} from 'ol';
import OlLayerBase from 'ol/layer/Base';
import OlLayerGroup from 'ol/layer/Group';
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
import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  isWmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import {
  DownloadConfig
} from '@terrestris/shogun-util/dist/model/Layer';
import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../../../hooks/useSHOGunAPIClient';

import {
  setLayerId,
  setFeature
} from '../../../../store/editFeature';
import {
  show as showEditFeatureDrawer
} from '../../../../store/editFeatureDrawerOpen';

import {
  setLayer as setLayerDetailsLayer,
  show as showLayerDetailsModal
} from '../../../../store/layerDetailsModal';

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

  const dispatch = useAppDispatch();
  const client = useSHOGunAPIClient();
  const map = useMap();
  const {
    t
  } = useTranslation();

  const downloadConfig: DownloadConfig[] = layer.get('downloadConfig') ?? null;
  const allowedEditMode = useAppSelector(
    state => state.editFeature.userEditMode
  );

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
      case 'toggleLegend': {
        const legendId: string = getUid(layer);
        const newLegendIds = [...visibleLegendsIds];
        if (newLegendIds.includes(legendId)) {
          newLegendIds.splice(newLegendIds.indexOf(legendId), 1);
        } else {
          newLegendIds.push(legendId);
        }
        setVisibleLegendsIds(newLegendIds);
        break;
      }
      case 'editLayer':
        dispatch(setFeature(null));
        dispatch(setLayerId(getUid(layer)));
        dispatch(showEditFeatureDrawer());
        break;
      case 'layerDetails':
        dispatch(setLayerDetailsLayer(getUid(layer)));
        dispatch(showLayerDetailsModal());
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

  const getParentLayerGroups = (l: OlLayerBase): OlLayerGroup[] => {
    if (!map) {
      return [];
    }

    const layerGroups = getAllLayerGroups(map.getLayerGroup())
      .filter(layerGroup => layerGroup.getLayers().getArray().includes(l));

    return layerGroups;
  };

  const getAllLayerGroups = (layerGroup: OlLayerGroup): OlLayerGroup[] => {
    const layerGroups = [layerGroup];

    for (const l of layerGroup.getLayers().getArray()) {
      if (l instanceof OlLayerGroup) {
        layerGroups.push(...getAllLayerGroups(l));
      }
    }

    return layerGroups;
  };

  const removeLayer = (l: OlLayerBase) => {
    const parentGroups = getParentLayerGroups(l);

    parentGroups.forEach(parentGroup => parentGroup.getLayers().remove(l));
  };

  const removeExternalLayer = () => {
    if (!map) {
      return;
    }

    removeLayer(layer);

    const externalLayerGroup = MapUtil.getLayerByName(map, t('AddLayerModal.externalWmsFolder')) as OlLayerGroup;
    const uploadedLayerGroup = MapUtil.getLayerByName(map, t('UploadDataModal.uploadedDataFolder')) as OlLayerGroup;

    if (externalLayerGroup && externalLayerGroup.getLayers().getLength() === 0) {
      removeLayer(externalLayerGroup);
    }

    if (uploadedLayerGroup && uploadedLayerGroup.getLayers().getLength() === 0) {
      removeLayer(uploadedLayerGroup);
    }
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

  const dropdownMenuItems: ItemType[] = [];

  if (isWmsLayer(layer)) {
    dropdownMenuItems.push({
      label: (
        <Spin
          spinning={extentLoading}
        >
          {t('LayerTreeContextMenu.layerZoomToExtent')}
        </Spin>
      ),
      key: 'zoomToExtent'
    });
  }

  if (isWmsLayer(layer) && layer.getVisible()) {
    const legendVisible = visibleLegendsIds.includes(getUid(layer));

    dropdownMenuItems.push({
      label: legendVisible ? t('LayerTreeContextMenu.hideLegend') : t('LayerTreeContextMenu.showLegend'),
      key: 'toggleLegend'
    });
  }

  if (layer.get('isExternalLayer') || layer.get('isUploadedLayer')) {
    dropdownMenuItems.push({
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
    dropdownMenuItems.push(...downloadItems);
  }

  if (
    layer.get('editable') &&
    (allowedEditMode.includes('CREATE') ||
      allowedEditMode.includes('UPDATE') ||
      allowedEditMode.includes('DELETE'))
  ) {
    dropdownMenuItems.push({
      label: t('LayerTreeContextMenu.editLayer'),
      key: 'editLayer'
    });
  }

  dropdownMenuItems.push({
    label: t('LayerTreeContextMenu.layerDetails'),
    key: 'layerDetails'
  });

  return (
    <div
      aria-label='layer-context'
    >
      <Dropdown
        menu={{
          items: dropdownMenuItems,
          onClick: onContextMenuItemClick
        }}
        placement="bottomLeft"
        onOpenChange={setSettingsVisible}
        open={settingsVisible}
        trigger={['click']}
        {...restProps}
      >
        <FontAwesomeIcon icon={faEllipsisV} />
      </Dropdown>
    </div>
  );
};

export default LayerTreeContextMenu;
