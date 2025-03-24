import React, {
  useEffect, useMemo,
  useState
} from 'react';

import {
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Divider
} from 'antd';

import dayjs, { Dayjs } from 'dayjs';
import _isNil from 'lodash/isNil';
import OlLayerImage from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  useTranslation
} from 'react-i18next';

import TimeSlider, {
  TimeSliderMark,
  TimeSliderProps
} from '@terrestris/react-geo/dist/Slider/TimeSlider/TimeSlider';

import './index.less';

interface WmsTimeSliderProps extends Omit<TimeSliderProps, 'min' | 'max' | 'marks' | 'useRange' |
  'onChange' | 'defaultValue' | 'value' | 'formatString'> {
  layer: OlLayerTile<OlSourceTileWMS> | OlLayerImage<OlSourceImageWMS>;
}

const formatString = 'YYYY-MM-DD';

export const WmsTimeSlider: React.FC<WmsTimeSliderProps> = ({
  layer,
  ...passThroughProps
}) => {
  const [value, setValue] = useState<Dayjs | [Dayjs, Dayjs]>();
  const [startDate, setStartDate] = useState<Dayjs>();
  const [endDate, setEndDate] = useState<Dayjs>();

  const marks: TimeSliderMark[] = useMemo(() => {
    if (_isNil(startDate) || _isNil(endDate)) {
      return [];
    }
    const mid = startDate!.clone().add(endDate!.diff(startDate) / 2);
    return [{
      timestamp: startDate,
      markConfig: {
        label: startDate.format(formatString)
      }
    }, {
      timestamp: mid,
      markConfig: {
        label: mid.format(formatString)
      }
    }, {
      timestamp: endDate,
      markConfig: {
        label: endDate.format(formatString),
        style: {
          left: 'unset',
          right: 0,
          transform: 'translate(50%)'
        }
      }
    }] satisfies TimeSliderMark[];
  }, [endDate, startDate]);

  const {
    t
  } = useTranslation();

  useEffect(() => {
    const dimension = layer.get('dimension');

    if (!dimension) {
      return;
    }

    let timeValues;
    if (dimension.values) {
      timeValues = dimension.values.split(',');
    }

    if (!timeValues || timeValues.length === 0) {
      return;
    }

    setStartDate(dayjs(timeValues[0]));
    setEndDate(dayjs(timeValues[timeValues.length - 1]));
    setValue(dayjs(timeValues[timeValues.length - 1]));

    const m: Record<string | number, string> = {};
    timeValues.forEach((val: string) => {
      m[val] = dayjs(val).format('YYYY-MM-DD');
    });

    if (timeValues.default === 'current') {
      let nearest: [number, string] = [NaN, ''];
      Object.values(m).forEach(d => {
        const diff = dayjs().diff(dayjs(d));

        if (diff < nearest[0]) {
          nearest = [diff, d];
        }
      });

      setValue(dayjs(nearest[1]));
    }
  }, [layer]);

  const onChange = (val: Dayjs | [Dayjs, Dayjs]) => {
    setValue(val);

    layer.getSource()?.updateParams({
      TIME: Array.isArray(val) ? val[0].format(formatString) : val.format(formatString)
    });
  };

  return (
    <div
      className="wms-time-slider"
    >
      <Divider>
        <FontAwesomeIcon
          icon={faClock}
        />
        {t('WmsTimeSlider.title')}
      </Divider>
      {
        marks && startDate && endDate ?
          <TimeSlider
            defaultValue={dayjs()}
            formatString={formatString}
            marks={marks}
            max={endDate}
            min={startDate}
            onChange={onChange}
            value={value}
            {...passThroughProps}
          /> :
          <span>
            {t('WmsTimeSlider.default')}
          </span>
      }
    </div>
  );
};

export default WmsTimeSlider;
