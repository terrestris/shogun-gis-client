import React, {
  useState,
  useMemo,
  FC,
  JSX, useEffect
} from 'react';

import {
  faDrawPolygon,
  faPenRuler
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';
import proj4 from 'proj4';
import {
  useTranslation
} from 'react-i18next';

import { MeasureButton } from '@terrestris/react-geo/dist/Button/MeasureButton/MeasureButton';
import { ToggleGroup } from '@terrestris/react-geo/dist/Button/ToggleGroup/ToggleGroup';
import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import './index.less';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import {
  removeInteractionStatus, setMapInteractionStatus
} from '../../../store/mapInteractionStatus';

interface DefaultMeasureProps {
  showMeasureDistance?: boolean;
  showMeasureArea?: boolean;
}

export type MeasureProps = Partial<DefaultMeasureProps>;

export const Measure: FC<MeasureProps> = ({
  showMeasureDistance,
  showMeasureArea
}): JSX.Element => {
  const [selected, setSelected] = useState<string>();

  const mapInteractionStatus = useAppSelector(state => state.mapInteractionStatus);

  const dispatch = useAppDispatch();

  const {
    t
  } = useTranslation();

  const map = useMap();

  const isGeodesicMeasurement = useMemo(() => {
    if (_isNil(map)) {
      return true;
    }

    const proj = proj4.Proj(map.getView().getProjection().getCode());
    const projName = _get(proj, 'projName');
    return _isEmpty(projName) || projName === 'longlat' || projName === 'geocent';
  }, [map]);

  useEffect(() => {
    if (selected !== undefined) {
      dispatch(setMapInteractionStatus('measure'));
    } else {
      dispatch(removeInteractionStatus('measure'));
    }
  }, [selected, dispatch]);

  useEffect(() => {
    if (mapInteractionStatus !== 'measure') {
      setSelected(undefined);
    }
  }, [mapInteractionStatus]);

  if (!map) {
    return <></>;
  }

  return (
    <ToggleGroup
      className="measure-tools"
      selected={selected}
      onChange={(evt, value) => {
        setSelected(value);
      }}
    >
      {showMeasureDistance ? (
        <MeasureButton
          geodesic={isGeodesicMeasurement}
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
          geodesic={isGeodesicMeasurement}
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
