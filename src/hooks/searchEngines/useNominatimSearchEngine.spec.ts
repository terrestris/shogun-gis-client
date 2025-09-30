import { renderHook } from '@testing-library/react';

import { Map } from 'ol';

import { createNominatimSearchFunction } from '@terrestris/react-util/dist/Hooks/search/createNominatimSearchFunction';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import { useNominatimSearchEngine } from './useNominatimSearchEngine';

jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: jest.fn()
}));

jest.mock('@terrestris/react-util/dist/Hooks/search/createNominatimSearchFunction', () => ({
  createNominatimSearchFunction: jest.fn()
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn(key => key)
  })
}));

describe('useNominatimSearchEngine', () => {
  let mockMap: Map;
  let mockProjection: any;

  beforeEach(() => {
    mockProjection = 'EPSG:3857';
    mockMap = {
      getView: jest.fn().mockReturnValue({
        getProjection: jest.fn().mockReturnValue(mockProjection)
      })
    } as unknown as Map;

    (useMap as jest.Mock).mockReturnValue(mockMap);
  });

  it('returns undefined if map is not available', async () => {
    (useMap as jest.Mock).mockReturnValue(null);
    const { result } = renderHook(() => useNominatimSearchEngine());
    const performNominatimSearch = result.current;

    const resultData = await performNominatimSearch('test');
    expect(resultData).toBeUndefined();
  });

  it('executes search with valid data', async () => {
    const mockExecuteSearch = jest.fn().mockResolvedValue({
      features: [
        {
          properties: {
            geojson: {
              type: 'Point',
              coordinates: [0, 0]
            },
            // eslint-disable-next-line camelcase
            display_name: 'Test Location'
          },
          geometry: {
            type: 'Point',
            coordinates: [0, 0]
          }
        }
      ]
    });
    (createNominatimSearchFunction as jest.Mock).mockReturnValue(mockExecuteSearch);

    const { result } = renderHook(() => useNominatimSearchEngine());
    const performNominatimSearch = result.current;

    const response = await performNominatimSearch('test');

    expect(mockExecuteSearch).toHaveBeenCalledWith('test');

    expect(response).toEqual([
      {
        title: 'useNominatimSearchEngine.title',
        features: [
          expect.objectContaining({
            getProperties: expect.any(Function),
            get: expect.any(Function)
          })
        ]
      }
    ]);
  });

  it('handles empty response', async () => {
    (createNominatimSearchFunction as jest.Mock).mockReturnValue(jest.fn().mockResolvedValue({ features: [] }));

    const { result } = renderHook(() => useNominatimSearchEngine());
    const performNominatimSearch = result.current;

    const response = await performNominatimSearch('test');

    expect(response).toEqual([
      {
        title: 'useNominatimSearchEngine.title',
        features: []
      }
    ]);
  });

  it('handles edge case where feature array contains no geojson', async () => {
    (createNominatimSearchFunction as jest.Mock).mockReturnValue(jest.fn().mockResolvedValue({
      features: [
        {
          properties: {
            // eslint-disable-next-line camelcase
            display_name: 'Location Without GeoJSON'
          },
          geometry: {}
        }
      ]
    }));

    const { result } = renderHook(() => useNominatimSearchEngine());
    const performNominatimSearch = result.current;

    const response = await performNominatimSearch('test');

    expect(response).toEqual([
      {
        title: 'useNominatimSearchEngine.title',
        features: []
      }
    ]);
  });
});

