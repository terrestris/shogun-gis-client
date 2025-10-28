import { renderHook } from '@testing-library/react';
import {
  Map as OlMap,
  View as OlView
} from 'ol';
import ImageLayer from 'ol/layer/Image';
import OlLayerTile from 'ol/layer/Tile';
import { get as getProjection } from 'ol/proj';
import OlSourceTileWMS from 'ol/source/TileWMS';

import Logger from '@terrestris/base-util/dist/Logger';
import { WmsLayer } from '@terrestris/ol-util/dist/typeUtils/typeUtils';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useExecuteGetFeature from '../useExecuteGetFeature';
import useExecuteWfsDescribeFeatureType from '../useExecuteWfsDescribeFeatureType';

import { useWfsSearchEngine } from './useWfsSearchEngine';

jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: jest.fn()
}));

jest.mock('../useExecuteGetFeature');
jest.mock('../useExecuteWfsDescribeFeatureType');
jest.mock('clientConfig', () => ({
  search: {
    showSearchResultDrawer: true
  }
}));

jest.mock('@terrestris/base-util/dist/Logger', () => ({
  error: jest.fn(),
  warn: jest.fn()
}));

describe('useWfsSearchEngine', () => {
  let mockMap: OlMap;
  let mockLayer: WmsLayer;
  let mockExecuteGetFeature: jest.Mock;
  let mockExecuteWfsDescribeFeatureType: jest.Mock;

  beforeEach(() => {
    mockMap = new OlMap({
      view: new OlView({
        center: [0, 0],
        zoom: 10,
        projection: getProjection('EPSG:3857')!
      })
    });

    mockLayer = new OlLayerTile({
      source: new OlSourceTileWMS({
        url: 'http://test.com',
        params: { LAYERS: 'testLayer' }
      })
    });

    mockExecuteGetFeature = jest.fn();
    mockExecuteWfsDescribeFeatureType = jest.fn();

    (useMap as jest.Mock).mockReturnValue(mockMap);
    (useExecuteGetFeature as jest.Mock).mockReturnValue(mockExecuteGetFeature);
    (useExecuteWfsDescribeFeatureType as jest.Mock).mockReturnValue(mockExecuteWfsDescribeFeatureType);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('performWfsSearch', () => {
    it('returns undefined if map is not available', async () => {
      (useMap as jest.Mock).mockReturnValue(null);
      const { result } = renderHook(() => useWfsSearchEngine());

      const searchResult = await result.current('test');

      expect(searchResult).toBeUndefined();
      expect(mockExecuteGetFeature).not.toHaveBeenCalled();
    });

    it('returns undefined and warn if no searchable layers are found', async () => {
      const { result } = renderHook(() => useWfsSearchEngine());

      const searchResult = await result.current('test');

      expect(searchResult).toBeUndefined();
      expect(Logger.warn).toHaveBeenCalledWith('No queryable layer found.');
    });

    it('skips non-WMS layers with a warning', async () => {
      const nonWmsLayer = new ImageLayer();
      nonWmsLayer.set('searchable', true);
      mockMap.addLayer(nonWmsLayer);

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('test');

      expect(Logger.warn).toHaveBeenCalledWith('Layer type not supported in search: ', nonWmsLayer);
    });

    it('skips layers without search configuration', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockMap.addLayer(mockLayer);

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('test');

      expect(Logger.warn).toHaveBeenCalledWith('No search configuration given for layer: ', mockLayer);
    });

    it('skips layers with failed DescribeFeatureType', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue(null);

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('test');

      expect(Logger.warn).toHaveBeenCalledWith('No successful DescribeFeatureType for layer: ', mockLayer);
    });

    it('skips layers without layer name', async () => {
      mockLayer = new OlLayerTile({
        source: new OlSourceTileWMS({
          url: 'http://test.com',
          params: {}
        })
      });
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: []
      });

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('test');

      expect(Logger.warn).toHaveBeenCalledWith('No layer name available for layer: ', mockLayer);
    });

    it('executes GetFeature for valid searchable layers', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name', 'city'],
        displayTemplate: '{name} - {city}'
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            },
            {
              name: 'city',
              localType: 'string'
            }
          ]
        }]
      });

      const mockGeoJson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [0, 0]
          },
          properties: {
            name: 'Test Feature',
            city: 'Bonn'
          },
          id: 'feature1'
        }]
      };

      mockExecuteGetFeature.mockResolvedValue(mockGeoJson);

      const { result } = renderHook(() => useWfsSearchEngine());

      const searchResults = await result.current('test');

      expect(mockExecuteGetFeature).toHaveBeenCalledTimes(1);
      expect(searchResults).toHaveLength(1);
      expect(searchResults![0].title).toBe('Test Layer');
      expect(searchResults![0].features).toHaveLength(1);
    });

    it('creates string filters with LIKE operator', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            }
          ]
        }]
      });

      mockExecuteGetFeature.mockResolvedValue({
        type: 'FeatureCollection',
        features: []
      });

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('test');

      expect(mockExecuteGetFeature).toHaveBeenCalledWith(
        expect.objectContaining({
          layer: mockLayer,
          filter: expect.anything()
        })
      );
    });

    it('creates numeric filters with EQUAL operator', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['population']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'population',
              localType: 'number'
            }
          ]
        }]
      });

      mockExecuteGetFeature.mockResolvedValue({
        type: 'FeatureCollection',
        features: []
      });

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('12345');

      expect(mockExecuteGetFeature).toHaveBeenCalled();
    });

    it('skips numeric filters when search value is not a number', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['population']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'population',
              localType: 'number'
            }
          ]
        }]
      });

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('not-a-number');

      expect(Logger.warn).toHaveBeenCalledWith('No valid filter available for layer: ', mockLayer);
      expect(mockExecuteGetFeature).not.toHaveBeenCalled();
    });

    it('warns about unsupported attribute types', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['dateField']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'dateField',
              localType: 'date'
            }
          ]
        }]
      });

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('test');

      expect(Logger.warn).toHaveBeenCalledWith(
        'Attribute "dateField" with type "date" not supported for search in layer "Test Layer".'
      );
    });

    it('warns when attribute is not found in feature type', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['nonExistentField']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            }
          ]
        }]
      });

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('test');

      expect(Logger.warn).toHaveBeenCalledWith(
        'Attribute "nonExistentField" not found in feature type "testLayer" for layer "Test Layer".'
      );
    });

    it('uses displayTemplate for feature title', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name', 'city'],
        displayTemplate: '{name} - {city}'
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            },
            {
              name: 'city',
              localType: 'string'
            }
          ]
        }]
      });

      const mockGeoJson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [0, 0]
          },
          properties: {
            name: 'Test Feature',
            city: 'Berlin'
          },
          id: 'feature1'
        }]
      };

      mockExecuteGetFeature.mockResolvedValue(mockGeoJson);

      const { result } = renderHook(() => useWfsSearchEngine());

      const searchResults = await result.current('test');

      expect(searchResults![0].features[0].get('title')).toBe('Test Feature - Berlin');
    });

    it('uses matched property for feature title when no displayTemplate', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            }
          ]
        }]
      });

      const mockGeoJson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [0, 0]
          },
          properties: { name: 'Test Feature' },
          id: 'feature1'
        }]
      };

      mockExecuteGetFeature.mockResolvedValue(mockGeoJson);

      const { result } = renderHook(() => useWfsSearchEngine());

      const searchResults = await result.current('test');

      expect(searchResults![0].features[0].get('title')).toBe('Test Feature [name]');
    });

    it('falls back to feature ID when no matching property found', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            }
          ]
        }]
      });

      const mockGeoJson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [0, 0]
          },
          properties: { name: 'Other Value' },
          id: 'feature1'
        }]
      };

      mockExecuteGetFeature.mockResolvedValue(mockGeoJson);

      const { result } = renderHook(() => useWfsSearchEngine());

      const searchResults = await result.current('test');

      expect(searchResults![0].features[0].get('title')).toBe('feature1');
    });

    it('handles viewBox parameter', async () => {
      const viewBox: [number, number, number, number] = [0, 0, 10, 10];

      mockLayer = new OlLayerTile({
        source: new OlSourceTileWMS({
          url: 'http://test.com',
          params: { LAYERS: 'testLayer' }
        })
      });
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            }
          ]
        }]
      });

      mockExecuteGetFeature.mockResolvedValue({
        type: 'FeatureCollection',
        features: []
      });

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('test', viewBox);

      expect(mockExecuteGetFeature).toHaveBeenCalledWith(
        expect.objectContaining({
          bbox: expect.any(Array)
        })
      );
    });

    it('handles rejected GetFeature promises and log errors', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            }
          ]
        }]
      });

      mockExecuteGetFeature.mockRejectedValue(new Error('WFS error'));

      const { result } = renderHook(() => useWfsSearchEngine());

      const searchResults = await result.current('test');

      expect(Logger.error).toHaveBeenCalledWith(
        'Error while fetching the layer search results for layer "Test Layer": ',
        new Error('WFS error')
      );
      expect(searchResults).toEqual([]);
    });

    it('handles namespaced layer names', async () => {
      mockLayer = new OlLayerTile({
        source: new OlSourceTileWMS({
          url: 'http://test.com',
          params: { LAYERS: 'namespace:testLayer' }
        })
      });
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            }
          ]
        }]
      });

      mockExecuteGetFeature.mockResolvedValue({
        type: 'FeatureCollection',
        features: []
      });

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('test');

      expect(mockExecuteGetFeature).toHaveBeenCalled();
    });

    it('includes propertyNames when resultDrawerConfig is provided', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name'],
        displayTemplate: '{name}',
        resultDrawerConfig: {
          children: [
            { propertyName: 'name' },
            { propertyName: 'city' }
          ]
        }
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            }
          ]
        }]
      });

      mockExecuteGetFeature.mockResolvedValue({
        type: 'FeatureCollection',
        features: []
      });

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('test');

      expect(mockExecuteGetFeature).toHaveBeenCalledWith(
        expect.objectContaining({
          propertyNames: expect.arrayContaining(['name', 'city'])
        })
      );
    });

    it('handles int localType as numeric', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['id']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'id',
              localType: 'int'
            }
          ]
        }]
      });

      mockExecuteGetFeature.mockResolvedValue({
        type: 'FeatureCollection',
        features: []
      });

      const { result } = renderHook(() => useWfsSearchEngine());

      await result.current('123');

      expect(mockExecuteGetFeature).toHaveBeenCalled();
    });

    it('sets layer reference on features', async () => {
      mockLayer.set('searchable', true);
      mockLayer.set('name', 'Test Layer');
      mockLayer.set('searchConfig', {
        attributes: ['name']
      });
      mockMap.addLayer(mockLayer);

      mockExecuteWfsDescribeFeatureType.mockResolvedValue({
        featureTypes: [{
          typeName: 'testLayer',
          properties: [
            {
              name: 'name',
              localType: 'string'
            }
          ]
        }]
      });

      const mockGeoJson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [0, 0]
          },
          properties: { name: 'Test Feature' },
          id: 'feature1'
        }]
      };

      mockExecuteGetFeature.mockResolvedValue(mockGeoJson);

      const { result } = renderHook(() => useWfsSearchEngine());

      const searchResults = await result.current('test');

      expect(searchResults![0].features[0].get('layer')).toBe(mockLayer);
    });
  });
});
