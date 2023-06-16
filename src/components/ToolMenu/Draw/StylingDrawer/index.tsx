import React, {
  useState
} from 'react';

import {
  faPaintBrush
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Drawer,
  DrawerProps
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

import './index.less';

import StylingComponent from './StylingComponent';

export type StylingDrawerProps = DrawerProps & {};

export const StylingDrawer: React.FC<StylingDrawerProps> = ({
  ...passThroughProps
}): JSX.Element => {

  const [open, setOpen] = useState(false);

  const {
    t
  } = useTranslation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div
      aria-label='geostyler-drawer'
    >
      <Button
        type="link"
        onClick={showDrawer}
        icon={<FontAwesomeIcon icon={faPaintBrush} />}
      >
        {t('StylingDrawer.pickColor')}
      </Button>
      <Drawer
        title={t('StylingDrawer.title')}
        placement="right"
        onClose={onClose}
        open={open}
        mask={false}
        width={'45vw'}
        className="color-pick-drawer"
        {...passThroughProps}
      >
        <StylingComponent />
      </Drawer>
    </div>
  );
};

export default StylingDrawer;
