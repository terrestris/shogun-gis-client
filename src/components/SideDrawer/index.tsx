import React from 'react';

import { useTranslation } from 'react-i18next';

import Drawer, { DrawerProps } from 'antd/es/drawer';

import BasicLayerTree from '../BasicLayerTree';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { toggleVisibility } from '../../store/drawer';

import './index.less';

export const SideDrawer: React.FC<Partial<DrawerProps>> = (
  props
): JSX.Element => {
  const dispatch = useAppDispatch();
  const visible = useAppSelector((state) => state.drawer.visible);
  const { t } = useTranslation();

  const toggleDrawer = () => {
    dispatch(toggleVisibility());
  };

  return (
    <Drawer
      title={t('Drawer.title')}
      placement="right"
      onClose={toggleDrawer}
      visible={visible}
      mask={false}
      {...props}
    >
      <BasicLayerTree />
    </Drawer>
  );
};

export default SideDrawer;
