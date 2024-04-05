import React from 'react';

import {
  faDrawPolygon,
  faPenRuler
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  useTranslation
} from 'react-i18next';

import MeasureButton from '@terrestris/react-geo/dist/Button/MeasureButton/MeasureButton';
import ToggleGroup from '@terrestris/react-geo/dist/Button/ToggleGroup/ToggleGroup';
import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import './index.less';

interface DefaultMeasureProps {
  showMeasureDistance?: boolean;
  showMeasureArea?: boolean;
}

export interface MeasureProps extends Partial<DefaultMeasureProps> { }

export const Measure: React.FC<MeasureProps> = ({
  showMeasureDistance,
  showMeasureArea
}): JSX.Element => {
  const {
    t
  } = useTranslation();

  const map = useMap();

  if (!map) {
    return <></>;
  }

  return (
    <ToggleGroup>
      {showMeasureDistance ? (
        <MeasureButton
          geodesic
          name="line"
          map={map}
          measureType="line"
          type="link"
          continueLineMsg={t('Measure.clicktodrawline')}
        >
          <FontAwesomeIcon icon={faPenRuler} />
          <span className="measure-text">{t('Measure.line')}</span>
        </MeasureButton>
      ) : <></>}

      {showMeasureArea ? (
        <MeasureButton
          geodesic
          name="poly"
          map={map}
          measureType="polygon"
          type="link"
          continuePolygonMsg={t('Measure.clicktodrawarea')}
        >
          <FontAwesomeIcon icon={faDrawPolygon} />
          <span className="measure-text">{t('Measure.area')}</span>
        </MeasureButton>
      ) : <></>}

    </ToggleGroup>
  );
};

export default Measure;
