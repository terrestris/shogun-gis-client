import React, {
  FC, JSX
} from 'react';

import {
  DrawerProps
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { setStylingDrawerVisibility } from '../../store/stylingDrawerVisibility';
import MapDrawer from '../MapDrawer';
import StylingComponent from '../ToolMenu/Draw/StylingDrawerButton/StylingComponent';

export type StylingDrawerProps = DrawerProps;

export const StylingDrawer: FC<StylingDrawerProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const dispatch = useAppDispatch();
  const isStylingDrawerVisible = useAppSelector(state => state.stylingDrawerVisibility);

  const {
    t
  } = useTranslation();

  const onClose = () => {
    dispatch(setStylingDrawerVisibility(false));
  };

  return (
    <MapDrawer
      title={t('StylingDrawer.title')}
      placement="right"
      onClose={onClose}
      open={isStylingDrawerVisible}
      shrinkMapOnOpen={false}
      maskClosable={false}
      mask={false}
      {...passThroughProps}
    >
      <StylingComponent />
    </MapDrawer>
  );
};

export default StylingDrawer;
