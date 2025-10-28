import { renderHook } from '@testing-library/react';

import {
  Map as OlMap,
  View as OlView
} from 'ol';
import OlLayerTile from 'ol/layer/Tile';
import { get as getProjection } from 'ol/proj';
import OlSourceTileWMS from 'ol/source/TileWMS';

import Logger from '@terrestris/base-util/dist/Logger';
import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';
import { WmsLayer } from '@terrestris/ol-util/dist/typeUtils/typeUtils';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import generateSolrQuery from '../../utils/generateSolrQuery';
import useExecuteSolrQuery from '../useExecuteSolrQuery';

import { useSolrSearchEngine } from './useSolrSearchEngine';

jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: jest.fn()
}));

jest.mock('../useExecuteSolrQuery');
jest.mock('../../utils/generateSolrQuery');
jest.mock('clientConfig', () => ({
  search: {
    solrBasePath: '/search/query',
    solrQueryConfig: {
      rowsPerQuery: 10,
      queryParser: 'edismax',
      tagPre: '<em>',
      tagPost: '</em>',
      requireFieldMatch: true
    },
    coreName: 'testCore',
    useSolrHighlighting: true,
    groupByCategory: false
  }
}));

jest.mock('@terrestris/ol-util/dist/MapUtil/MapUtil', () => ({
  MapUtil: {
    getLayerByNameParam: jest.fn()
  }
}));

jest.mock('@terrestris/base-util/dist/Logger', () => ({
  error: jest.fn()
}));

describe('useSolrSearchEngine', () => {
  let mockMap: OlMap;
  let mockLayer: WmsLayer;
  let mockExecuteSolrQuery: jest.Mock;
  let mockGenerateSolrQuery: jest.Mock;

  beforeEach(() => {
    mockMap = new OlMap({
      view: new OlView({
        center: [0, 0],
        zoom: 10,
        projection: getProjection('EPSG:3857')!
      })
    });

    mockExecuteSolrQuery = jest.fn();
    mockGenerateSolrQuery = jest.fn();

    (useMap as jest.Mock).mockReturnValue(mockMap);
    (useExecuteSolrQuery as jest.Mock).mockReturnValue(mockExecuteSolrQuery);
    (generateSolrQuery as jest.Mock).mockImplementation(mockGenerateSolrQuery);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('performSolrSearch', () => {
    it('returns undefined if map is not available', async () => {
      (useMap as jest.Mock).mockReturnValue(null);
      const { result } = renderHook(() => useSolrSearchEngine());

      const searchResult = await result.current('test');

      expect(searchResult).toBeUndefined();
      expect(mockExecuteSolrQuery).not.toHaveBeenCalled();
    });

    it('executes solr queries for each layer', async () => {
      const mockQueryPerLayer = [
        {
          query: 'query1',
          fieldList: ['field1', 'field2']
        },
        {
          query: 'query2',
          fieldList: ['field3', 'field4']
        }
      ];

      mockGenerateSolrQuery.mockReturnValue(mockQueryPerLayer);
      mockExecuteSolrQuery.mockResolvedValue({
        response: { docs: [] },
        highlighting: {}
      });

      const { result } = renderHook(() => useSolrSearchEngine());

      await result.current('test search');

      expect(mockGenerateSolrQuery).toHaveBeenCalledWith({
        searchValue: 'test search',
        map: mockMap
      });
      expect(mockExecuteSolrQuery).toHaveBeenCalledTimes(2);
    });

    it('processes fulfilled responses and creates features', async () => {
      const wktGeometry = 'POINT(1000000 6000000)';
      const mockDocs = [
        {
          id: 'feature1',
          featureType: ['testLayer'],
          geometry: [wktGeometry],
          name: 'Test Feature',
          category: ['Test Category']
        }
      ];

      mockGenerateSolrQuery.mockReturnValue([
        {
          query: 'query1',
          fieldList: ['field1']
        }
      ]);

      mockExecuteSolrQuery.mockResolvedValue({
        response: { docs: mockDocs },
        highlighting: {
          feature1: { name: '<em>Test</em> Feature' }
        }
      });

      mockLayer = new OlLayerTile({
        source: new OlSourceTileWMS({
          url: 'http://test.com',
          params: { LAYERS: 'testLayer' }
        })
      });
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchable', true);
      mockLayer.set('searchConfig', { displayTemplate: '{name}' });

      mockMap.addLayer(mockLayer);
      (MapUtil.getLayerByNameParam as jest.Mock).mockReturnValue(mockLayer);

      const { result } = renderHook(() => useSolrSearchEngine());

      const searchResults = await result.current('test');

      expect(searchResults).toBeDefined();
      expect(searchResults).toHaveLength(1);
      expect(searchResults![0].title).toBe('Test Layer');
      expect(searchResults![0].features).toHaveLength(1);
      expect(searchResults![0].features[0].get('title')).toBe('Test Feature');
    });

    it('handles rejected promises and log errors', async () => {
      mockGenerateSolrQuery.mockReturnValue([
        {
          query: 'query1',
          fieldList: ['field1']
        }
      ]);

      mockExecuteSolrQuery.mockRejectedValue(new Error('Solr error'));

      const { result } = renderHook(() => useSolrSearchEngine());

      const searchResults = await result.current('test');

      expect(Logger.error).toHaveBeenCalledWith(
        'Error while fetching the solr results for layer ',
        new Error('Solr error')
      );
      expect(searchResults).toEqual([]);
    });

    it('uses displayTemplate from searchConfig when available', async () => {
      const wktGeometry = 'POINT(1000000 6000000)';
      const mockDocs = [
        {
          id: 'feature1',
          featureType: ['testLayer'],
          geometry: [wktGeometry],
          name: 'Test',
          city: 'Bonn',
          category: ['Test Category']
        }
      ];

      mockGenerateSolrQuery.mockReturnValue([
        {
          query: 'query1',
          fieldList: ['field1']
        }
      ]);

      mockExecuteSolrQuery.mockResolvedValue({
        response: { docs: mockDocs },
        highlighting: {}
      });

      mockLayer = new OlLayerTile({
        source: new OlSourceTileWMS({
          url: 'http://test.com',
          params: { LAYERS: 'testLayer' }
        })
      });
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchable', true);
      mockLayer.set('searchConfig', {
        displayTemplate: '{name} - {city}'
      });

      mockMap.addLayer(mockLayer);
      (MapUtil.getLayerByNameParam as jest.Mock).mockReturnValue(mockLayer);

      const { result } = renderHook(() => useSolrSearchEngine());

      const searchResults = await result.current('test');

      expect(searchResults![0].features[0].get('title')).toBe('Test - Bonn');
    });

    it('skips features without geometry', async () => {
      const mockDocs = [
        {
          id: 'feature1',
          featureType: ['testLayer'],
          name: 'Feature without geometry',
          category: ['Test Category']
        }
      ];

      mockGenerateSolrQuery.mockReturnValue([
        {
          query: 'query1',
          fieldList: ['field1']
        }
      ]);

      mockExecuteSolrQuery.mockResolvedValue({
        response: { docs: mockDocs },
        highlighting: {}
      });

      const { result } = renderHook(() => useSolrSearchEngine());

      const searchResults = await result.current('test');

      expect(searchResults).toHaveLength(1);
      expect(searchResults![0].features).toHaveLength(0);
    });

    it('applies attributes to features excluding blacklisted ones', async () => {
      const wktGeometry = 'POINT(1000000 6000000)';
      const mockDocs = [
        {
          id: 'feature1',
          featureType: ['testLayer'],
          geometry: [wktGeometry],
          name: 'Test Feature',
          city: 'Berlin',
          category: ['Test Category'],
          _version_: 123
        }
      ];

      mockGenerateSolrQuery.mockReturnValue([
        {
          query: 'query1',
          fieldList: ['field1']
        }
      ]);

      mockExecuteSolrQuery.mockResolvedValue({
        response: { docs: mockDocs },
        highlighting: {}
      });

      mockLayer = new OlLayerTile({
        source: new OlSourceTileWMS({
          url: 'http://test.com',
          params: { LAYERS: 'testLayer' }
        })
      });
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchable', true);

      mockMap.addLayer(mockLayer);
      (MapUtil.getLayerByNameParam as jest.Mock).mockReturnValue(mockLayer);

      const { result } = renderHook(() => useSolrSearchEngine());

      const searchResults = await result.current('test');

      const feature = searchResults![0].features[0];
      expect(feature.get('name')).toBe('Test Feature');
      expect(feature.get('city')).toBe('Berlin');
      expect(feature.get('category')).toBeUndefined();
      expect(feature.get('_version_')).toBeUndefined();
    });

    it('handles viewBox parameter', async () => {
      const viewBox: [number, number, number, number] = [0, 0, 1000, 1000];

      mockGenerateSolrQuery.mockReturnValue([
        {
          query: 'query1',
          fieldList: ['field1']
        }
      ]);

      mockExecuteSolrQuery.mockResolvedValue({
        response: { docs: [] },
        highlighting: {}
      });

      const { result } = renderHook(() => useSolrSearchEngine());

      await result.current('test', viewBox);

      expect(mockExecuteSolrQuery).toHaveBeenCalledWith(
        expect.objectContaining({
          viewBox
        })
      );
    });

    it('uses highlighted values in feature titles', async () => {
      const wktGeometry = 'POINT(1000000 6000000)';
      const mockDocs = [
        {
          id: 'feature1',
          featureType: ['testLayer'],
          geometry: [wktGeometry],
          name: 'Test Feature',
          category: ['Test Category']
        }
      ];

      mockGenerateSolrQuery.mockReturnValue([
        {
          query: 'query1',
          fieldList: ['field1']
        }
      ]);

      mockExecuteSolrQuery.mockResolvedValue({
        response: { docs: mockDocs },
        highlighting: {
          feature1: { name: '<em>Test</em> Feature' }
        }
      });

      mockLayer = new OlLayerTile({
        source: new OlSourceTileWMS({
          url: 'http://test.com',
          params: { LAYERS: 'testLayer' }
        })
      });
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchable', true);

      mockMap.addLayer(mockLayer);
      (MapUtil.getLayerByNameParam as jest.Mock).mockReturnValue(mockLayer);

      const { result } = renderHook(() => useSolrSearchEngine());

      const searchResults = await result.current('test');

      expect(searchResults![0].features[0].get('title')).toBe('<em>Test</em> Feature [name]');
    });

    it('falls back to id when no matching value is found', async () => {
      const wktGeometry = 'POINT(1000000 6000000)';
      const mockDocs = [
        {
          id: 'feature1',
          featureType: ['testLayer'],
          geometry: [wktGeometry],
          description: 'Some description',
          category: ['Test Category']
        }
      ];

      mockGenerateSolrQuery.mockReturnValue([
        {
          query: 'query1',
          fieldList: ['field1']
        }
      ]);

      mockExecuteSolrQuery.mockResolvedValue({
        response: { docs: mockDocs },
        highlighting: {}
      });

      mockLayer = new OlLayerTile({
        source: new OlSourceTileWMS({
          url: 'http://test.com',
          params: { LAYERS: 'testLayer' }
        })
      });
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchable', true);

      mockMap.addLayer(mockLayer);
      (MapUtil.getLayerByNameParam as jest.Mock).mockReturnValue(mockLayer);

      const { result } = renderHook(() => useSolrSearchEngine());

      const searchResults = await result.current('xyz');

      expect(searchResults![0].features[0].get('title')).toBe('feature1');
    });
  });
});

