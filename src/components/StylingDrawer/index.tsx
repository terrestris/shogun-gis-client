import React from 'react';

import {
  Drawer,
  DrawerProps
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

import './index.less';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { setStylingDrawerVisibility } from '../../store/stylingDrawerVisibility';
import StylingComponent from '../ToolMenu/Draw/StylingDrawerButton/StylingComponent';

export type StylingDrawerProps = DrawerProps;

export const StylingDrawer: React.FC<StylingDrawerProps> = ({
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
      <StylingComponent />
    </Drawer>
  );
};

export default StylingDrawer;
