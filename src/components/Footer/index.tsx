import React, { useEffect } from 'react';

import {
  Button, Divider
} from 'antd';

import OlControlMousePosition from 'ol/control/MousePosition';
import OlControlScaleLine from 'ol/control/ScaleLine';
import { createStringXY } from 'ol/coordinate';

import { useTranslation } from 'react-i18next';

import ScaleCombo from '@terrestris/react-geo/dist/Field/ScaleCombo/ScaleCombo';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';
import useAppSelector from '../../hooks/useAppSelector';
import { Legal } from '../../store/legal';

export interface FooterProps extends React.ComponentProps<'div'> { }

export const Footer: React.FC<FooterProps> = ({
  ...restProps
}): JSX.Element => {
  const { t } = useTranslation();

  const legalInformation: Legal = useAppSelector(state => state.legal);
  const map = useMap();

  useEffect(() => {
    if (!map) {
      return;
    }

    const existingControl = map
      .getControls()
      .getArray()
      .find(control => control instanceof OlControlScaleLine);

    if (existingControl) {
      return;
    }

    map.addControl(
      new OlControlScaleLine({
        target: 'scale-line-container'
      })
    );
  }, [map]);

  useEffect(() => {
    if (!map) {
      return;
    }

    const existingControl = map
      .getControls()
      .getArray()
      .find(control => control instanceof OlControlMousePosition);

    if (existingControl) {
      return;
    }

    map.addControl(
      new OlControlMousePosition({
        coordinateFormat: createStringXY(2),
        projection: map.getView().getProjection(),
        target: 'mouse-position'
      })
    );
  }, [map]);

  const openContactModal = (): void => {
    window.open(legalInformation.contact, '_blank');
  };

  const openImprintModal = (): void => {
    window.open(legalInformation.imprint, '_blank');
  };

  const openPrivacyModal = (): void => {
    window.open(legalInformation.privacy, '_blank');
  };

  if (!map) {
    return <></>;
  }

  return (
    <div
      className="footer"
      {...restProps}
    >
      <div className="item-container left-items">
        <div
          id="scale-line-container"
          aria-label="scale-line"
        />
        <Divider type="vertical" />
        <div
          className="scale-combo"
          aria-label="scale-combo"
        >
          {t('Footer.scale')}:&nbsp;
          <ScaleCombo
            aria-label='scalecombo-dropdown'
            map={map}
          />
          <Divider type="vertical" />
        </div>
        <div
          className="reference-system"
          aria-label="reference-system"
        >
          {t('Footer.refSystem')}: {map.getView().getProjection().getCode()}
          <Divider type="vertical" />
        </div>
        <div className="mouse-position-wrapper">
          {t('Footer.mousePosition')}:&nbsp;
          <div
            id="mouse-position"
            className="mouse-position"
            aria-label="mouse-position"
          />
        </div>
      </div>
      <div className="item-container right-items">
        <Button
          onClick={openContactModal}
          type="link"
        >
          {t('Footer.contact')}
        </Button>
        <Button
          onClick={openImprintModal}
          type="link"
        >
          {t('Footer.imprint')}
        </Button>
        <Button
          onClick={openPrivacyModal}
          type="link"
        >
          {t('Footer.privacypolicy')}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
