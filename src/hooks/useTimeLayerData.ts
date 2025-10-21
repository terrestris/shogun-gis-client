import { useMemo } from 'react';

import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import OlLayer from 'ol/layer/Layer';

import { WmsLayer } from '@terrestris/ol-util/dist/typeUtils/typeUtils';

dayjs.extend(utc);

export interface TimeLayerData {
  timeAwareLayers: WmsLayer[];
  initialTime: Dayjs | undefined;
  minTime: Dayjs | undefined;
  maxTime: Dayjs | undefined;
  availableTimePoints: string[];
  isValidTimeLayer: boolean;
}

const isTimeLayer = (layer: OlLayer): boolean => {
  const layerType = layer.get('type');
  return layerType === 'WMSTIME' || layerType === 'WMSTime';
};

const calculateDuration = (timeValues: string): string => {
  const timeArray = timeValues.split(',').map(timeStr => timeStr.trim());

  if (timeArray.length < 2) {
    return 'P1D';
  }

  const firstTime = dayjs(timeArray[0]);
  const secondTime = dayjs(timeArray[1]);

  if (!firstTime.isValid() || !secondTime.isValid()) {
    return 'P1D';
  }

  const diffInSeconds = secondTime.diff(firstTime, 'second');
  const diffInMinutes = secondTime.diff(firstTime, 'minute');
  const diffInHours = secondTime.diff(firstTime, 'hour');
  const diffInDays = secondTime.diff(firstTime, 'day');
  const diffInWeeks = secondTime.diff(firstTime, 'week');
  const diffInMonths = secondTime.diff(firstTime, 'month');
  const diffInYears = secondTime.diff(firstTime, 'year');

  if (diffInYears >= 1) {
    return `P${diffInYears}Y`;
  } else if (diffInMonths >= 1) {
    return `P${diffInMonths}M`;
  } else if (diffInWeeks >= 1) {
    return `P${diffInWeeks}W`;
  } else if (diffInDays >= 1) {
    return `P${diffInDays}D`;
  } else if (diffInHours >= 1) {
    return `PT${diffInHours}H`;
  } else if (diffInMinutes >= 1) {
    return `PT${diffInMinutes}M`;
  } else if (diffInSeconds >= 1) {
    return `PT${diffInSeconds}S`;
  } else {
    return 'P1D';
  }
};

const parseISOTimeInterval = (timeInterval: string) => {
  const parts = timeInterval.split('/');

  if (parts.length === 3) {
    const [startStr, endStr, periodStr] = parts;

    const startTime = dayjs.utc(startStr);
    const endTime = dayjs.utc(endStr);

    if (startTime.isValid() && endTime.isValid()) {
      return {
        startTime,
        endTime,
        period: periodStr,
        isValid: true
      };
    }
  }

  return {
    startTime: undefined,
    endTime: undefined,
    period: undefined,
    isValid: false
  };
};

export const useTimeLayerData = (layer: OlLayer | null): TimeLayerData => {
  return useMemo(() => {
    if (!layer || !isTimeLayer(layer)) {
      return {
        timeAwareLayers: [],
        initialTime: undefined,
        minTime: undefined,
        maxTime: undefined,
        availableTimePoints: [],
        isValidTimeLayer: false
      };
    }

    const wmsLayer = layer as WmsLayer;
    const dimension = wmsLayer.get('dimension');

    let layerInitialTime: Dayjs | undefined;
    let layerMinTime: Dayjs | undefined;
    let layerMaxTime: Dayjs | undefined;
    let calculatedDuration = 'P1D';
    let timeFormat = 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]';
    let availableTimePoints: string[] = [];

    if (dimension && dimension.name === 'time' && dimension.values) {
      const timeValues = dimension.values;

      if (typeof timeValues === 'string') {
        if (timeValues.includes('/') && timeValues.split('/').length === 3) {
          const intervalData = parseISOTimeInterval(timeValues);

          if (intervalData.isValid) {
            layerMinTime = intervalData.startTime;
            layerMaxTime = intervalData.endTime;
            layerInitialTime = intervalData.endTime;
            calculatedDuration = intervalData.period || 'P1D';

            availableTimePoints = [];
            timeFormat = 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]';
          } else {
            return {
              timeAwareLayers: [],
              initialTime: undefined,
              minTime: undefined,
              maxTime: undefined,
              availableTimePoints: [],
              isValidTimeLayer: false
            };
          }
        } else {
          const timeArray = timeValues
            .split(',')
            .map(timeStr => timeStr.trim());

          if (timeArray.length > 0) {
            const startDate = timeArray[0];
            const endDate = timeArray[timeArray.length - 1];

            try {
              const startTime = dayjs.utc(startDate);
              const endTime = dayjs.utc(endDate);

              if (startTime.isValid() && endTime.isValid()) {
                calculatedDuration = calculateDuration(timeValues);
                availableTimePoints = timeArray;

                layerMinTime = startTime;
                layerMaxTime = endTime;
                layerInitialTime = endTime;
                timeFormat = 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]';
              } else {
                return {
                  timeAwareLayers: [],
                  initialTime: undefined,
                  minTime: undefined,
                  maxTime: undefined,
                  availableTimePoints: [],
                  isValidTimeLayer: false
                };
              }
            } catch {
              return {
                timeAwareLayers: [],
                initialTime: undefined,
                minTime: undefined,
                maxTime: undefined,
                availableTimePoints: [],
                isValidTimeLayer: false
              };
            }
          }
        }
      }
    }

    const configuredLayer = {
      ...wmsLayer,
      get: (key: string) => {
        switch (key) {
          case 'type':
            return 'WMSTime';
          case 'isTimeAware':
            return true;
          case 'startDate':
            return layerMinTime?.format(timeFormat);
          case 'endDate':
            return layerMaxTime?.format(timeFormat);
          case 'duration':
            return calculatedDuration;
          case 'timeFormat':
            return timeFormat;
          default:
            return wmsLayer.get(key);
        }
      },
      set: wmsLayer.set.bind(wmsLayer),
      getSource: wmsLayer.getSource.bind(wmsLayer)
    } as WmsLayer;

    return {
      timeAwareLayers: [configuredLayer],
      initialTime: layerInitialTime,
      minTime: layerMinTime,
      maxTime: layerMaxTime,
      availableTimePoints,
      isValidTimeLayer: true
    };
  }, [layer]);
};
