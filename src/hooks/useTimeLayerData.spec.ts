import { renderHook } from '@testing-library/react';

import type OlLayer from 'ol/layer/Layer';

import { useTimeLayerData } from './useTimeLayerData';

type MockLayerOptions = {
  type?: string;
  dimension?: {
    name: string;
    values: string;
  };
};

const createMockLayer = (opts: MockLayerOptions = {}): OlLayer => {
  const store = new Map<string, unknown>();

  store.set('type', opts.type ?? 'WMSTime');

  if (opts.dimension) {
    store.set('dimension', opts.dimension);
  }

  const mockLayer = {
    get: jest.fn((key: string) => store.get(key)),
    set: jest.fn(),
    getSource: jest.fn()
  };

  return mockLayer as unknown as OlLayer;
};

describe('useTimeLayerData', () => {
  it('parses WMS time and ensures Z-format (UTC)', () => {
    const layer = createMockLayer({
      dimension: {
        name: 'time',
        values: '2026-01-01T00:00:00.000Z/2026-01-03T00:00:00.000Z/P1D'
      }
    });

    const { result } = renderHook(() => useTimeLayerData(layer));

    expect(result.current.isValidTimeLayer).toBe(true);
    expect(result.current.minTime?.toISOString()).toBe(
      '2026-01-01T00:00:00.000Z'
    );
    expect(result.current.maxTime?.toISOString()).toBe(
      '2026-01-03T00:00:00.000Z'
    );
    expect(result.current.initialTime?.toISOString()).toBe(
      '2026-01-03T00:00:00.000Z'
    );

    expect(result.current.timeAwareLayers).toHaveLength(1);
    expect(result.current.timeAwareLayers[0].get('startDate')).toBe(
      '2026-01-01T00:00:00.000Z'
    );
    expect(result.current.timeAwareLayers[0].get('endDate')).toBe(
      '2026-01-03T00:00:00.000Z'
    );
    expect(result.current.timeAwareLayers[0].get('duration')).toBe('P1D');
  });

  it('parses discrete WMS time values and preserves available UTC timestamps', () => {
    const layer = createMockLayer({
      dimension: {
        name: 'time',
        values:
          '2026-01-01T00:00:00.000Z, 2026-01-02T00:00:00.000Z, 2026-01-03T00:00:00.000Z'
      }
    });

    const { result } = renderHook(() => useTimeLayerData(layer));

    expect(result.current.isValidTimeLayer).toBe(true);
    expect(result.current.availableTimePoints).toEqual([
      '2026-01-01T00:00:00.000Z',
      '2026-01-02T00:00:00.000Z',
      '2026-01-03T00:00:00.000Z'
    ]);
    expect(result.current.minTime?.toISOString()).toBe(
      '2026-01-01T00:00:00.000Z'
    );
    expect(result.current.maxTime?.toISOString()).toBe(
      '2026-01-03T00:00:00.000Z'
    );
    expect(result.current.timeAwareLayers[0].get('duration')).toBe('P1D');
  });

  it('normalizes non-UTC layer time values to UTC output', () => {
    const layer = createMockLayer({
      dimension: {
        name: 'time',
        values: '2026-01-01T00:00:00,2026-01-02T00:00:00'
      }
    });

    const { result } = renderHook(() => useTimeLayerData(layer));

    expect(result.current.isValidTimeLayer).toBe(true);
    expect(result.current.minTime?.toISOString()).toBe(
      '2026-01-01T00:00:00.000Z'
    );
    expect(result.current.maxTime?.toISOString()).toBe(
      '2026-01-02T00:00:00.000Z'
    );
    expect(result.current.timeAwareLayers[0].get('startDate')).toBe(
      '2026-01-01T00:00:00.000Z'
    );
    expect(result.current.timeAwareLayers[0].get('endDate')).toBe(
      '2026-01-02T00:00:00.000Z'
    );
  });

  it('converts offset-based layer time values to UTC output', () => {
    const layer = createMockLayer({
      dimension: {
        name: 'time',
        values: '2026-01-01T00:00:00+01:00,2026-01-02T00:00:00+01:00'
      }
    });

    const { result } = renderHook(() => useTimeLayerData(layer));

    expect(result.current.isValidTimeLayer).toBe(true);
    expect(result.current.minTime?.toISOString()).toBe(
      '2025-12-31T23:00:00.000Z'
    );
    expect(result.current.maxTime?.toISOString()).toBe(
      '2026-01-01T23:00:00.000Z'
    );
    expect(result.current.timeAwareLayers[0].get('startDate')).toBe(
      '2025-12-31T23:00:00.000Z'
    );
    expect(result.current.timeAwareLayers[0].get('endDate')).toBe(
      '2026-01-01T23:00:00.000Z'
    );
  });

  it('returns invalid data for invalid time dimensions', () => {
    const nonTimeLayer = createMockLayer({ type: 'WMS' });
    const invalidTimeLayer = createMockLayer({
      dimension: {
        name: 'time',
        values: 'not-a-date'
      }
    });

    const { result: nonTimeResult } = renderHook(() =>
      useTimeLayerData(nonTimeLayer)
    );
    const { result: invalidTimeResult } = renderHook(() =>
      useTimeLayerData(invalidTimeLayer)
    );

    expect(nonTimeResult.current.isValidTimeLayer).toBe(false);
    expect(nonTimeResult.current.timeAwareLayers).toEqual([]);

    expect(invalidTimeResult.current.isValidTimeLayer).toBe(false);
    expect(invalidTimeResult.current.timeAwareLayers).toEqual([]);
  });
});
