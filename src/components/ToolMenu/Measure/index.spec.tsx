
import React from 'react';

import { render } from '@testing-library/react';

import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import { createReduxWrapper } from '../../../utils/testUtils';

import Measure from './index';

// Mock the useMap hook so tests can provide arbitrary projection objects
jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: jest.fn()
}));

// Mock translation
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (k: string) => k })
}));

// Spy for MeasureButton props
const mockMeasureButton = jest.fn();
jest.mock('@terrestris/react-geo/dist/Button/MeasureButton/MeasureButton', () => ({
  MeasureButton: (props: any) => {
    mockMeasureButton(props);
    return <div data-testid="measure-button">{props.children}</div>;
  }
}));

// Mock useAppSelector used to read showSegmentLengths (default export).
// Return a fresh jest.fn() from the factory so it's available when hoisted.
jest.mock('../../../hooks/useAppSelector', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('<Measure /> projection-aware measurement', () => {

  beforeEach(() => {
    mockMeasureButton.mockClear();
  });

  describe('auto mode (default)', () => {
    it('uses geodesic for geographic EPSG:4326', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:4326',
            getUnits: () => 'degrees'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('uses geodesic for projections with degree units', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:4269',
            getUnits: () => 'degrees'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('uses geodesic for projections with radian units', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:4978',
            getUnits: () => 'radians'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('uses geodesic for WebMercator EPSG:3857', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:3857',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('uses geodesic for WebMercator EPSG:900913 (legacy code)', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:900913',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('uses geodesic for EPSG:3785 (legacy web mercator)', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:3785',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('uses geodesic for ESRI:102100', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'ESRI:102100',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('uses planar for UTM EPSG:25832', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:25832',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(false);
      expect(calls[1][0].geodesic).toBe(false);
    });

    it('uses planar for other UTM zones (EPSG:25833)', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:25833',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(false);
      expect(calls[1][0].geodesic).toBe(false);
    });

    it('uses planar for projected CRS with meter units (EPSG:32633)', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:32633',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(false);
      expect(calls[1][0].geodesic).toBe(false);
    });

    it('handles undefined units (falls back to projection code)', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:32633',
            getUnits: () => undefined
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(false);
      expect(calls[1][0].geodesic).toBe(false);
    });

    it('defaults to planar for unknown projected CRS with meter units', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:9999',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(false);
      expect(calls[1][0].geodesic).toBe(false);
    });

    it('defaults to geodesic when projection code is nil', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => null,
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('defaults to geodesic when projection is nil', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => null
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('defaults to geodesic when view is nil', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => null
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('defaults to geodesic when map is nil', () => {
      (useMap as jest.Mock).mockReturnValue(null);

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      expect(mockMeasureButton).not.toHaveBeenCalled();
    });
  });

  describe('explicit geodesic mode', () => {
    it('always uses geodesic for geographic CRS', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:4326',
            getUnits: () => 'degrees'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
          measurementMode="geodesic"
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('always uses geodesic even for UTM projections', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:25832',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
          measurementMode="geodesic"
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });

    it('ignores projection when mode is geodesic', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:32633',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
          measurementMode="geodesic"
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(true);
      expect(calls[1][0].geodesic).toBe(true);
    });
  });

  describe('explicit planar mode', () => {
    it('always uses planar for geographic CRS', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:4326',
            getUnits: () => 'degrees'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
          measurementMode="planar"
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(false);
      expect(calls[1][0].geodesic).toBe(false);
    });

    it('always uses planar for WebMercator', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:3857',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
          measurementMode="planar"
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(false);
      expect(calls[1][0].geodesic).toBe(false);
    });

    it('uses planar for UTM projections', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:25832',
            getUnits: () => 'm'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
          measurementMode="planar"
        />,
        { wrapper: createReduxWrapper() }
      );

      const calls = mockMeasureButton.mock.calls;
      expect(calls[0][0].geodesic).toBe(false);
      expect(calls[1][0].geodesic).toBe(false);
    });
  });

  describe('component rendering', () => {
    it('renders only distance measurement when showMeasureDistance is true', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:4326',
            getUnits: () => 'degrees'
          })
        })
      });

      render(<Measure showMeasureDistance />, { wrapper: createReduxWrapper() });

      expect(mockMeasureButton).toHaveBeenCalledTimes(1);
      expect(mockMeasureButton.mock.calls[0][0].measureType).toBe('line');
    });

    it('passes through showSegmentLengths to MeasureButton', () => {
      // make the selector return true
      (jest.requireMock('../../../hooks/useAppSelector').default as jest.Mock).mockReturnValue(true);

      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:4326',
            getUnits: () => 'degrees'
          })
        })
      });

      render(<Measure showMeasureDistance />, { wrapper: createReduxWrapper() });

      expect(mockMeasureButton).toHaveBeenCalledTimes(1);
      expect(mockMeasureButton.mock.calls[0][0].showSegmentLengths).toBe(true);
    });

    it('renders only area measurement when showMeasureArea is true', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:4326',
            getUnits: () => 'degrees'
          })
        })
      });

      render(<Measure showMeasureArea />, { wrapper: createReduxWrapper() });

      expect(mockMeasureButton).toHaveBeenCalledTimes(1);
      expect(mockMeasureButton.mock.calls[0][0].measureType).toBe('polygon');
    });

    it('renders both measurements when both flags are true', () => {
      (useMap as jest.Mock).mockReturnValue({
        getView: () => ({
          getProjection: () => ({
            getCode: () => 'EPSG:4326',
            getUnits: () => 'degrees'
          })
        })
      });

      render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      expect(mockMeasureButton).toHaveBeenCalledTimes(2);
    });

    it('renders nothing when map is not available', () => {
      (useMap as jest.Mock).mockReturnValue(null);

      const { container } = render(
        <Measure
          showMeasureDistance
          showMeasureArea
        />,
        { wrapper: createReduxWrapper() }
      );

      expect(container.firstChild).toBeNull();
    });
  });

});
