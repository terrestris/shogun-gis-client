import React from 'react';

import {
  faDrawPolygon,
  faPenRuler,
  faCircle,
  faFont,
  faSquare
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  useTranslation
} from 'react-i18next';

import DrawButton from '@terrestris/react-geo/dist/Button/DrawButton/DrawButton';
import ToggleGroup from '@terrestris/react-geo/dist/Button/ToggleGroup/ToggleGroup';
import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';

interface DefaultDrawProps { }

export interface DrawProps extends Partial<DefaultDrawProps> { }

export const Draw: React.FC<DrawProps> = (): JSX.Element => {
  const {
    t
  } = useTranslation();

  const map = useMap();

  if (!map) {
    return <></>;
  }

  return (
    <ToggleGroup>
      <DrawButton
        name="drawPoint"
        drawType="Point"
      >
        <FontAwesomeIcon icon={faCircle} />
        <span className="draw-text">{t('Draw.point')}</span>
      </DrawButton>

      <DrawButton
        name="drawLine"
        drawType="LineString"
      >
        <FontAwesomeIcon icon={faPenRuler} />
        <span className="draw-text">{t('Draw.line')}</span>
      </DrawButton>

      <DrawButton
        name="drawPolygon"
        drawType="Polygon"
      >
        <FontAwesomeIcon icon={faDrawPolygon} />
        <span className="draw-text">{t('Draw.polygon')}</span>
      </DrawButton>

      <DrawButton
        name="drawCircle"
        drawType="Circle"
      >
        <FontAwesomeIcon icon={faCircle} />
        <span className="draw-text">{t('Draw.circle')}</span>
      </DrawButton>

      <DrawButton
        name="drawRectangle"
        drawType="Rectangle"
      >
        <FontAwesomeIcon icon={faSquare} />
        <span className="draw-text">{t('Draw.rectangle')}</span>
      </DrawButton>

      <DrawButton
        name="drawText"
        drawType="Text"
      >
        <FontAwesomeIcon icon={faFont} />
        <span className="draw-text">{t('Draw.text')}</span>
      </DrawButton>
    </ToggleGroup>
  );
};

export default Draw;
