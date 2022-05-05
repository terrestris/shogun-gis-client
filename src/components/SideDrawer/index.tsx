import React from 'react';

import {
  Drawer
} from 'antd';
import {
  DrawerProps
} from 'antd/lib/drawer';

import {
  useTranslation
} from 'react-i18next';

const BasicLayerTree = React.lazy(() => import('../BasicLayerTree'));
import {
  useAppDispatch
} from '../../hooks/useAppDispatch';
import {
  useAppSelector
} from '../../hooks/useAppSelector';
import {
  toggleVisibility
} from '../../store/drawer';

import './index.less';

export const SideDrawer: React.FC<Partial<DrawerProps>> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const visible = useAppSelector((state) => state.drawer.visible);
  const {
    t
  } = useTranslation();

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
      <React.Suspense
        fallback={null}
      >
        <BasicLayerTree />
      </React.Suspense>
    </Drawer>
  );
};

export default SideDrawer;
