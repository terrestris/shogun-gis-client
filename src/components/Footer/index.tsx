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
import { usePlugins } from '../../hooks/usePlugins';

import {
  FooterPlacementOrientation,
  isFooterIntegration
} from '../../plugin';
import { Legal } from '../../store/legal';

export interface FooterProps extends React.ComponentProps<'div'> { }

export const Footer: React.FC<FooterProps> = ({
  ...restProps
}): JSX.Element => {
  const plugins = usePlugins();
  const { t } = useTranslation();

  const legalInformation: Legal = useAppSelector(state => state.legal);
  const map = useMap();

  const insertPlugins = (itemPosition: FooterPlacementOrientation, items: JSX.Element[]) => {
    plugins.forEach(plugin => {
      if (isFooterIntegration(plugin.integration) && plugin.integration?.placementOrientation === itemPosition) {
        const {
          key,
          wrappedComponent: WrappedPluginComponent
        } = plugin;

        items.splice(plugin.integration?.insertionIndex || 0, 0,
          <WrappedPluginComponent
            key={key}
          />
        );
      }
    });
  };

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

  if (!map) {
    return <></>;
  }

  const getLeftItems = () => {
    const items = [(
      <>
        <div
          id="scale-line-container"
        />
        <Divider
          type="vertical"
        />
        <div className="scale-combo">
          {t('Footer.scale')}:&nbsp;
          <ScaleCombo map={map} />
          <Divider type="vertical" />
        </div>
        <div className="reference-system">
          {t('Footer.refSystem')}: {map.getView().getProjection().getCode()}
          <Divider type="vertical" />
        </div>
        <div className="mouse-position-wrapper">
          {t('Footer.mousePosition')}:&nbsp;
          <div
            id="mouse-position"
            className="mouse-position"
          />
        </div>
      </>
    )];

    insertPlugins('left', items);

    return items;
  };

  const getRightItems = () => {
    const items = [
      <div
        key="item-container right-items"
      >
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
    ];

    if (plugins.length > 0) {
      insertPlugins('right', items);
    }

    return items;
  };

  const openContactModal = (): void => {
    window.open(legalInformation.contact, '_blank');
  };

  const openImprintModal = (): void => {
    window.open(legalInformation.imprint, '_blank');
  };

  const openPrivacyModal = (): void => {
    window.open(legalInformation.privacy, '_blank');
  };

  return (
    <div
      className="footer"
      {...restProps}
    >
      <div className="item-container left-items">
        {
          getLeftItems()
        }
      </div>
      <div className="item-container right-items">
        {
          getRightItems()
        }
      </div>
    </div>
  );
};

export default Footer;
