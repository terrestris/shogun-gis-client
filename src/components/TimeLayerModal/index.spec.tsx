import React from 'react';

import { act, render, waitFor } from '@testing-library/react';

import dayjs from 'dayjs';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { useTimeLayerData } from '../../hooks/useTimeLayerData';
import appDayjs from '../../utils/dayjs';

import TimeLayerModal from './index';

jest.mock('react-rnd', () => ({
  Rnd: ({ children }: any) => <div>{children}</div>
}));

let latestTimeLayerSliderPanelProps: any;

jest.mock(
  '@terrestris/react-geo/dist/Panel/TimeLayerSliderPanel/TimeLayerSliderPanel',
  () => ({
    TimeLayerSliderPanel: (props: any) => {
      latestTimeLayerSliderPanelProps = props;
      return <div data-testid="time-layer-slider-panel" />;
    }
  })
);

jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: jest.fn()
}));

jest.mock('@terrestris/ol-util/dist/MapUtil/MapUtil', () => ({
  MapUtil: {
    getLayerByOlUid: jest.fn()
  }
}));

jest.mock('../../hooks/useAppDispatch', () => jest.fn());
jest.mock('../../hooks/useAppSelector', () => jest.fn());
jest.mock('../../hooks/useTimeLayerData', () => ({
  useTimeLayerData: jest.fn()
}));

describe('<TimeLayerModal />', () => {
  const dispatchMock = jest.fn();
  const fakeLayer = {
    get: jest.fn((key: string) => {
      if (key === 'name') {
        return 'Test time layer';
      }
      return undefined;
    })
  };

  beforeEach(() => {
    latestTimeLayerSliderPanelProps = undefined;
    dispatchMock.mockReset();

    (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);
    (useMap as jest.Mock).mockReturnValue({});
    (MapUtil.getLayerByOlUid as jest.Mock).mockReturnValue(fakeLayer);

    (useAppSelector as jest.Mock).mockImplementation((selector: any) =>
      selector({
        timeLayerModal: {
          layerId: '123',
          visible: true
        }
      })
    );

    (useTimeLayerData as jest.Mock).mockReturnValue({
      timeAwareLayers: [
        {
          get: jest.fn(),
          getSource: jest.fn()
        }
      ],
      initialTime: appDayjs.utc('2026-01-03T00:00:00.000Z'),
      minTime: appDayjs.utc('2026-01-01T00:00:00.000Z'),
      maxTime: appDayjs.utc('2026-01-03T00:00:00.000Z'),
      availableTimePoints: [],
      isValidTimeLayer: true
    });
  });

  it('converts slider values to UTC before saving in state', async () => {
    render(<TimeLayerModal />);

    await waitFor(() => {
      expect(latestTimeLayerSliderPanelProps).toBeDefined();
    });

    const sliderLocalValue = dayjs('2026-01-02T12:30:00.000');

    act(() => {
      latestTimeLayerSliderPanelProps.onChangeComplete(sliderLocalValue);
    });

    await waitFor(() => {
      expect(latestTimeLayerSliderPanelProps.value.valueOf()).toBe(
        sliderLocalValue.valueOf()
      );
      expect((latestTimeLayerSliderPanelProps.value as any).isUTC()).toBe(true);
    });
  });
});
