import React from 'react';

import {
  faPaintBrush
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import { Button } from 'antd';

import {
  useTranslation
} from 'react-i18next';

import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import { setStylingDrawerVisibility } from '../../../../store/stylingDrawerVisibility';

export const StylingButton: React.FC = (): JSX.Element => {

  const dispatch = useAppDispatch();

  const {
    t
  } = useTranslation();

  const drawerVisibilty = useAppSelector(state => state.stylingDrawerVisibility);

  const toggleDrawer = () => {
    dispatch(setStylingDrawerVisibility(!drawerVisibilty));
  };

  return (
    <Button
      type="link"
      onClick={toggleDrawer}
      icon={<FontAwesomeIcon icon={faPaintBrush} />}
    >
      {drawerVisibilty ? t('StylingDrawer.closeColorPalette') : t('StylingDrawer.openColorPalette')}

    </Button>
  );
};

export default StylingButton;
