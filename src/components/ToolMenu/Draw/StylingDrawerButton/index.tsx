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
  const drawerVisibility = useAppSelector(state => state.stylingDrawerVisibility);

  const showDrawer = () => {
    if (!drawerVisibility){
      dispatch(setStylingDrawerVisibility(true));
    } else {
      dispatch(setStylingDrawerVisibility(false));
    }
  };

  return (
    <Button
      type="link"
      onClick={showDrawer}
      icon={<FontAwesomeIcon icon={faPaintBrush} />}
    >
      {!drawerVisibility?t('StylingDrawer.openColorPalette'):t('StylingDrawer.closeColorPalette')}
    </Button>
  );
};

export default StylingButton;
