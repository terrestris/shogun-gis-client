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
import { setStylingDrawerVisibility } from '../../../../store/stylingDrawerVisibility';

export const StylingButton: React.FC = (): JSX.Element => {

  const dispatch = useAppDispatch();

  const {
    t
  } = useTranslation();

  const showDrawer = () => {
    dispatch(setStylingDrawerVisibility(true));
  };

  return (
    <Button
      type="link"
      onClick={showDrawer}
      icon={<FontAwesomeIcon icon={faPaintBrush} />}
    >
      {t('StylingDrawer.pickColor')}
    </Button>
  );
};

export default StylingButton;
