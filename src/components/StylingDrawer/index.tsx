import React, {
  useEffect, useState
} from 'react';

import {
  Drawer,
  DrawerProps
} from 'antd';

import Layer from 'ol/layer/Layer';
import {
  ImageWMS, TileWMS
} from 'ol/source';
import {
  useTranslation
} from 'react-i18next';

import './index.less';

import { MapUtil } from '@terrestris/ol-util';

import { useMap } from '@terrestris/react-util';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { clearStylingDrawerLayerUid } from '../../store/stylingDrawerLayerUid';
import { setStylingDrawerVisibility } from '../../store/stylingDrawerVisibility';
import DrawLayerStylingPanel from '../ToolMenu/Draw/StylingDrawerButton/DrawLayerStylingPanel';

import SldStylingPanel from './SldStylingPanel';

export type StylingDrawerProps = DrawerProps;

export const StylingDrawer: React.FC<StylingDrawerProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const [isImageLayer, setIsImageLayer] = useState<boolean>();
  const dispatch = useAppDispatch();
  const isStylingDrawerVisible = useAppSelector(state => state.stylingDrawerVisibility);
  const layerUid = useAppSelector(state => state.stylingDrawerLayerUid);
  const map = useMap();

  const {
    t
  } = useTranslation();

  useEffect(() => {

    if (!layerUid) {
      setIsImageLayer(false);
    }

    if (!map) {
      return;
    }
    const layer = MapUtil.getLayerByOlUid(map, layerUid) as Layer;
    if (!layer) {
      return;
    }
    const layerSource = layer.getSource();
    if (layerSource instanceof TileWMS || layerSource instanceof ImageWMS){
      setIsImageLayer(true);
    } else {
      setIsImageLayer(false);
    }
  }, [layerUid, map]);

  const onClose = () => {
    dispatch(setStylingDrawerVisibility(false));
    dispatch(clearStylingDrawerLayerUid());
  };

  return (
    <Drawer
      title={t('StylingDrawer.title')}
      placement="right"
      onClose={onClose}
      open={isStylingDrawerVisible}
      rootClassName="color-pick-drawer"
      maskClosable={false}
      mask={false}
      {...passThroughProps}
    >
      {isImageLayer ? <SldStylingPanel /> : <DrawLayerStylingPanel />}
    </Drawer>
  );
};

export default StylingDrawer;
