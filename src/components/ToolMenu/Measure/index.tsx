import React, { useState } from 'react';

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

import { MeasureButton } from '@terrestris/react-geo/dist/Button/MeasureButton/MeasureButton';
import { ToggleGroup } from '@terrestris/react-geo/dist/Button/ToggleGroup/ToggleGroup';
import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import './index.less';

interface DefaultMeasureProps {
  showMeasureDistance?: boolean;
  showMeasureArea?: boolean;
}

export type MeasureProps = Partial<DefaultMeasureProps>;

export const Measure: React.FC<MeasureProps> = ({
  showMeasureDistance,
  showMeasureArea
}): JSX.Element => {
  const {
    t
  } = useTranslation();

  const map = useMap();

  const [selected, setSelected] = useState<string>();

  if (!map) {
    return <></>;
  }

  return (
    <ToggleGroup
      selected={selected}
      onChange={(evt, value) => {
        setSelected(value);
      }}
    >
      {showMeasureDistance ? (
        <MeasureButton
          geodesic
          value="line"
          measureType="line"
          type="link"
          continueLineMsg={t('Measure.clicktodrawline')}
        >
          <FontAwesomeIcon icon={faPenRuler} />
          <span className="measure-text">{t('Measure.line')}</span>
        </MeasureButton>
      ) : (
        <></>
      )}

      {showMeasureArea ? (
        <MeasureButton
          geodesic
          value="poly"
          measureType="polygon"
          type="link"
          continuePolygonMsg={t('Measure.clicktodrawarea')}
        >
          <FontAwesomeIcon icon={faDrawPolygon} />
          <span className="measure-text">{t('Measure.area')}</span>
        </MeasureButton>
      ) : (
        <></>
      )}
    </ToggleGroup>
  );
};

export default Measure;
