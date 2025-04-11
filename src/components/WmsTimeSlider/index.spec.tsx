import React from 'react';

import {
  cleanup,
  render,
  screen
} from '@testing-library/react';

import dayjs from 'dayjs';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceTileWMS from 'ol/source/TileWMS';

import TimeSlider from '@terrestris/react-geo/dist/Slider/TimeSlider/TimeSlider';

import WmsTimeSlider from './index';

describe('<WmsTimeSlider />', () => {
  let sliderElem: HTMLInputElement | null;
  let dividerElem: HTMLInputElement | null;
  let handleElem: HTMLInputElement | null;
  const format = 'YYYY-MM-DD hh:mm:ss';
  const min = dayjs('2024-01-01 12:00:00', format);
  const max = dayjs('2024-01-03 12:00:00', format);
  const value = dayjs('2024-01-02 12:00:00', format);
  const onChange = jest.fn();

  const mockLayer = new OlLayerTile({
    source: new OlSourceTileWMS({
      url: '/geoserver/ows?',
      params: {
        LAYERS: 'SHOGUN:VG250_GEMEINDEN_1712067928599',
        time: value
      }
    })
  });

  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    const {
      container
    } = render(
      <WmsTimeSlider
        layer={mockLayer}
      />
    );

    sliderElem = container.querySelector('.wms-time-slider');
    dividerElem = container.querySelector('.ant-divider');
  });

  beforeEach(() => {
    const {
      container
    } = render(
      <TimeSlider
        defaultValue={value}
        formatString={''}
        max={max}
        min={min}
        onChange={onChange}
        value={value}
      />
    );

    handleElem = container.querySelector('.ant-slider-handle');
  });

  it('is defined', () => {
    expect(WmsTimeSlider).not.toBeUndefined();
  });

  it('can be rendered with divider', () => {
    expect(sliderElem).toBeVisible();
    expect(dividerElem).toBeVisible();
    expect(screen.getByText('WmsTimeSlider.title')).toBeInTheDocument();
  });

  it('Time Slider is defined', () => {
    expect(TimeSlider).not.toBeUndefined();
    expect(handleElem).toBeVisible();
  });

  it('time slider was called with correct values', async () => {
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(handleElem).toHaveAttribute('aria-valuemin', `${min.unix()}`);
    expect(handleElem).toHaveAttribute('aria-valuemax', `${max.unix()}`);
  });
});
