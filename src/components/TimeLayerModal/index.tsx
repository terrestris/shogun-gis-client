import React, {
  useMemo,
  useState,
  useCallback
} from 'react';

import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import OlLayer from 'ol/layer/Layer';

import { useTranslation } from 'react-i18next';

import { Rnd } from 'react-rnd';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import { TimeLayerSliderPanel } from '@terrestris/react-geo/dist/Panel/TimeLayerSliderPanel/TimeLayerSliderPanel';

import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { useTimeLayerData } from '../../hooks/useTimeLayerData';

import { setModalVisible } from '../../store/timeLayerModal';

import './index.less';

export type TimeLayerModalProps = Record<string, never>;

dayjs.extend(utc);

export const TimeLayerModal: React.FC<
  TimeLayerModalProps
> = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const map = useMap();
  const timeModalLayerId = useAppSelector(
    state => state.timeLayerModal.layerId
  );
  const timeModalVisible = useAppSelector(
    state => state.timeLayerModal.visible
  );

  const layer = useMemo(() => {
    if (!map || !timeModalLayerId) {
      return null;
    }
    return MapUtil.getLayerByOlUid(map, timeModalLayerId) as OlLayer | null;
  }, [map, timeModalLayerId]);

  const [currentTime, setCurrentTime] = useState<Dayjs | undefined>();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const timeLayerData = useTimeLayerData(layer);
  const {
    timeAwareLayers,
    initialTime,
    minTime,
    maxTime,
    availableTimePoints,
    isValidTimeLayer
  } = timeLayerData;

  const visible = timeModalVisible && !!layer && isValidTimeLayer;

  const tooltips = useMemo(
    () => ({
      dataRange: t('TimeLayerModal.tooltips.dataRange', 'Set date range'),
      days: t('TimeLayerModal.tooltips.days', 'Days'),
      hours: t('TimeLayerModal.tooltips.hours', 'Hours'),
      minutes: t('TimeLayerModal.tooltips.minutes', 'Minutes'),
      months: t('TimeLayerModal.tooltips.months', 'Months'),
      setToMostRecent: t(
        'TimeLayerModal.tooltips.setToMostRecent',
        'Set to most recent date'
      ),
      weeks: t('TimeLayerModal.tooltips.weeks', 'Weeks'),
      years: t('TimeLayerModal.tooltips.years', 'Years')
    }),
    [t]
  );

  const layerName = useMemo(() => {
    return layer?.get('name') || t('TimeLayerModal.unknownLayer');
  }, [layer, t]);

  React.useEffect(() => {
    if (initialTime && initialTime.isValid() && !currentTime) {
      setCurrentTime(initialTime);
    }
  }, [initialTime, currentTime]);

  const handleTimeChange = useCallback(
    (newTime: Dayjs | [Dayjs, Dayjs]) => {
      if (!Array.isArray(newTime)) {
        let timeToSet = newTime;

        if (availableTimePoints && availableTimePoints.length > 0) {
          const firstTimePoint = dayjs.utc(availableTimePoints[0]);
          if (!firstTimePoint.isValid()) {
            return;
          }

          let closestTime = firstTimePoint;
          let minDiff = Math.abs(newTime.diff(closestTime));

          for (const timePoint of availableTimePoints) {
            const availableTime = dayjs.utc(timePoint);
            if (!availableTime.isValid()) {
              continue;
            }
            const diff = Math.abs(newTime.diff(availableTime));
            if (diff < minDiff) {
              minDiff = diff;
              closestTime = availableTime;
            }
          }
          timeToSet = closestTime;
        }

        if (minTime && maxTime) {
          if (timeToSet.isBefore(minTime) || timeToSet.isAfter(maxTime)) {
            const clampedTime = timeToSet.isBefore(minTime) ? minTime : maxTime;
            setCurrentTime(prev => {
              if (!prev || !clampedTime.isSame(prev)) {
                return clampedTime;
              }
              return prev;
            });
            return;
          }
        }

        setCurrentTime(prev => {
          if (!prev || !timeToSet.isSame(prev)) {
            return timeToSet;
          }
          return prev;
        });
      }
    },
    [minTime, maxTime, availableTimePoints]
  );

  const toggleCollapse = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  const handleClose = useCallback(() => {
    dispatch(setModalVisible(false));
  }, [dispatch]);

  const modalWidth = window.innerWidth * 0.8;
  const initialModalHeight = 180;
  const collapsedHeight = 60;

  if (!visible || !layer) {
    return <></>;
  }

  return (
    <Rnd
      className={`time-layer-modal ${isCollapsed ? 'collapsed' : ''}`}
      default={{
        x: 330,
        y: 60,
        width: modalWidth,
        height: isCollapsed ? collapsedHeight : initialModalHeight
      }}
      minWidth={400}
      minHeight={isCollapsed ? collapsedHeight : initialModalHeight}
      maxHeight={isCollapsed ? collapsedHeight : undefined}
      dragHandleClassName="time-layer-modal-header"
      disableDragging={false}
      enableResizing={!isCollapsed}
    >
      <div className="time-layer-modal-container">
        <div className="time-layer-modal-header">
          <h3>{t('TimeLayerModal.title', { layerName })}</h3>
          <div className="header-controls">
            <button
              className="header-button collapse-button"
              onClick={toggleCollapse}
              title={isCollapsed ? 'Expand' : 'Collapse'}
            >
              {isCollapsed ? '▼' : '▲'}
            </button>
            <button
              className="header-button close-button"
              onClick={handleClose}
              title="Close"
            >
              ×
            </button>
          </div>
        </div>
        <div
          className={`time-layer-modal-content ${
            isCollapsed ? 'collapsed' : ''
          }`}
        >
          <TimeLayerSliderPanel
            timeAwareLayers={timeAwareLayers}
            value={
              (currentTime && currentTime.isValid() ? currentTime : null) ||
              (initialTime && initialTime.isValid() ? initialTime : null) ||
              dayjs.utc()
            }
            min={minTime}
            max={maxTime}
            onChangeComplete={handleTimeChange}
            tooltips={tooltips}
          />
        </div>
      </div>
    </Rnd>
  );
};

export default TimeLayerModal;
