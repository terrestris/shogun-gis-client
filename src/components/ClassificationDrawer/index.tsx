import React, {
  FC,
  JSX,
  useEffect
} from 'react';

import {
  DrawerProps
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

import {
  MapUtil
} from '@terrestris/ol-util/dist/MapUtil/MapUtil';
import {
  isWmsLayer,
  WmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {
  setVisibility,
  setLayerId
} from '../../store/classificationDrawer';
import MapDrawer from '../MapDrawer';
import SldClassificationPanel from '../SldClassificationPanel';

export type ClassificationDrawerProps = DrawerProps;

export const ClassificationDrawer: FC<ClassificationDrawerProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const [layer, setLayer] = React.useState<WmsLayer | null>(null);

  const isOpen = useAppSelector(state => state.classificationDrawer.visibility);
  const layerId = useAppSelector(state => state.classificationDrawer.layerId);

  const map = useMap();
  const dispatch = useAppDispatch();

  const {
    t
  } = useTranslation();

  useEffect(() => {
    if (!layerId) {
      setLayer(null);
      return;
    }

    if (!map) {
      return;
    }

    const l = MapUtil.getLayerByOlUid(map, layerId);

    if (!l) {
      return;
    }

    if (isWmsLayer(l)) {
      setLayer(l);
    }
  }, [layerId, map]);

  const onClose = () => {
    dispatch(setLayerId(null));
    dispatch(setVisibility(false));
  };

  return (
    <MapDrawer
      title={t('ClassificationDrawer.title')}
      placement="right"
      onClose={onClose}
      open={isOpen}
      maskClosable={false}
      destroyOnHidden={true}
      shrinkMapOnOpen={false}
      mask={false}
      {...passThroughProps}
    >
      {
        layer ? (
          <SldClassificationPanel
            layer={layer}
          />
        ) : (
          <div>{t('ClassificationDrawer.noLayerSelected')}</div>
        )
      }
    </MapDrawer>
  );
};

export default ClassificationDrawer;
