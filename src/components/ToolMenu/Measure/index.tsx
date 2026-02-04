import React, {
  useState,
  useMemo,
  FC,
  JSX
} from 'react';

import {
  faDrawPolygon,
  faPenRuler
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import _isNil from 'lodash/isNil';
import {
  useTranslation
} from 'react-i18next';

import { MeasureButton } from '@terrestris/react-geo/dist/Button/MeasureButton/MeasureButton';
import { ToggleGroup } from '@terrestris/react-geo/dist/Button/ToggleGroup/ToggleGroup';
import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppSelector from '../../../hooks/useAppSelector';

import './index.less';

export type MeasurementMode = 'auto' | 'geodesic' | 'planar';

// Some common projection codes that should trigger geodesic measurements
// when in auto mode. More could be added but these are probably the most
// common ones.
const WEB_MERCATOR_CODES = new Set([
  'EPSG:3857', // official Web Mercator
  'EPSG:900913', // unofficial legacy
  'EPSG:3785', // deprecated EPSG variant
  'EPSG:3395', // World Mercator
  'ESRI:102100', // ESRI WKID matching 3857
  'ESRI:102113', // ESRI WKID matching 3785
  'OSGEO:41001' // another legacy alias sometimes seen
]);

// Projection units that indicate geographic/angular coordinate systems
const GEOGRAPHIC_UNITS = new Set(['degrees', 'radians']);

interface DefaultMeasureProps {
  /**
   * Show the distance measurement tool for measuring line lengths.
   * @default false
   */
  showMeasureDistance?: boolean;

  /**
   * Show the area measurement tool for measuring polygon areas.
   * @default false
   */
  showMeasureArea?: boolean;

  /**
   * Configures the measurement calculation method. By default (`'auto'`), the component
   * attempts to choose the most appropriate method based on the map's projection. You
   * can override this behavior by explicitly setting it to `'geodesic'` or `'planar'`.
   *
   * - `'auto'` (default): Automatically selects geodesic or planar calculations based
   *   on the current projection. The built-in heuristics aim to provide reasonable
   *   results across common projections. If measurement results appear unexpected,
   *   consider switching to an explicit `'geodesic'` or `'planar'` mode.
   * - `'geodesic'`: Always uses geodesic calculations that account for the Earth's
   *   curvature. This is typically appropriate for global or long-distance
   *   measurements, but may not match expected values in local or engineering
   *   coordinate systems where planar measurements are commonly used.
   * - `'planar'`: Always uses planar/cartesian calculations (straight-line distances
   *   in the map projection). This can provide expected results in local projected
   *   coordinate systems, but may produce inaccurate distances in geographic coordinate
   *   systems (e.g. latitude/longitude).
   *
   * @default 'auto'
   * @example
   * <Measure measurementMode="geodesic" showMeasureDistance />
   */
  measurementMode?: MeasurementMode;
}

export type MeasureProps = Partial<DefaultMeasureProps>;

export const Measure: FC<MeasureProps> = ({
  showMeasureDistance,
  showMeasureArea,
  measurementMode = 'auto'
}): JSX.Element => {
  const {
    t
  } = useTranslation();

  const map = useMap();

  const showSegmentLengths = useAppSelector(state => state.measure.showSegmentLengths);

  const useGeodesic = useMemo((): boolean => {
    // Explicit mode overrides take precedence
    if (measurementMode === 'geodesic') {
      return true;
    }
    if (measurementMode === 'planar') {
      return false;
    }

    // Guard clauses for missing data - default to geodesic
    const projection = map?.getView()?.getProjection();
    if (_isNil(projection)) {
      return true;
    }

    // Auto mode: inspect projection to determine measurement type
    const units = projection.getUnits?.();
    if (GEOGRAPHIC_UNITS.has(units)) {
      return true;
    }

    const code = projection.getCode?.();
    if (_isNil(code) || WEB_MERCATOR_CODES.has(code)) {
      return true;
    }

    // Default to planar for projected metric CRS (e.g., UTM)
    return false;
  }, [map, measurementMode]);

  const [selected, setSelected] = useState<string>();

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
          geodesic={useGeodesic}
          key="line"
          value="line"
          measureType="line"
          type="link"
          continueLineMsg={t('Measure.clicktodrawline')}
          showSegmentLengths={showSegmentLengths}
        >
          <FontAwesomeIcon icon={faPenRuler} />
          <span className="measure-text">{t('Measure.line')}</span>
        </MeasureButton>
      ) : (
        <></>
      )}

      {showMeasureArea ? (
        <MeasureButton
          geodesic={useGeodesic}
          key="poly"
          value="poly"
          measureType="polygon"
          type="link"
          continuePolygonMsg={t('Measure.clicktodrawarea')}
          showSegmentLengths={showSegmentLengths}
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
