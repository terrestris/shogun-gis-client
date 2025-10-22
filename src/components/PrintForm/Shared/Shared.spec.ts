import './Shared';

import OlLayer from 'ol/layer/Layer';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import { Shared } from '@terrestris/mapfish-print-manager/dist/util/Shared';

describe('Shared.getLegendGraphicUrl', () => {
  it('returns legendUrl if set on layer', () => {
    const layer = new OlLayer({});
    layer.set('legendUrl', 'http://custom-legend.com/legend.png');

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toBe('http://custom-legend.com/legend.png');
  });

  it('builds legend URL for TileWMS', () => {
    const source = new OlSourceTileWMS({
      url: 'http://example.com/wms',
      params: {
        LAYERS: 'foo',
        FORMAT: 'image/jpeg'
      }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);

    expect(result).toContain('http://example.com/wms?');
    expect(result).toContain('LAYER=foo');
    expect(result).toContain('FORMAT=image%2Fjpeg');
    expect(result).toContain('REQUEST=GetLegendGraphic');
  });

  it('builds legend URL for ImageWMS', () => {
    const source = new OlSourceImageWMS({
      url: 'http://example.com/ows',
      params: {
        LAYERS: 'test',
        VERSION: '1.1.1'
      }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);

    expect(result).toContain('http://example.com/ows?');
    expect(result).toContain('LAYER=test');
    expect(result).toContain('VERSION=1.1.1');
    expect(result).toContain('REQUEST=GetLegendGraphic');
  });

  it('handles URL already ending with ?', () => {
    const source = new OlSourceTileWMS({
      url: 'http://example.com/wms?',
      params: { LAYERS: 'test' }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toBe('http://example.com/wms?LAYER=test&VERSION=1.3.0&SERVICE=WMS&REQUEST=GetLegendGraphic&FORMAT=image%2Fpng');
  });

  it('returns empty string for unsupported sources', () => {
    const layer = new OlLayer({});
    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toBe('');
  });

  it('handles multiple layers and uses only the first one', () => {
    const source = new OlSourceTileWMS({
      url: 'http://example.com/wms',
      params: {
        LAYERS: 'layer1,layer2,layer3'
      }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toContain('LAYER=layer1');
    expect(result).not.toContain('layer2');
  });

  it('uses default version 1.3.0 when not provided', () => {
    const source = new OlSourceTileWMS({
      url: 'http://example.com/wms',
      params: {
        LAYERS: 'foo'
      }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toContain('VERSION=1.3.0');
  });

  it('uses default format image/png when not provided', () => {
    const source = new OlSourceTileWMS({
      url: 'http://example.com/wms',
      params: {
        LAYERS: 'foo'
      }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toContain('FORMAT=image%2Fpng');
  });

  it('includes customPrintLegendParams if set on layer', () => {
    const source = new OlSourceTileWMS({
      url: 'http://example.com/wms',
      params: {
        LAYERS: 'foo'
      }
    });
    const layer = new OlLayer({ source });
    layer.set('customPrintLegendParams', {
      WIDTH: '200',
      HEIGHT: '100',
      LEGEND_OPTIONS: 'fontStyle:bold'
    });

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toContain('WIDTH=200');
    expect(result).toContain('HEIGHT=100');
    expect(result).toContain('LEGEND_OPTIONS=fontStyle%3Abold');
  });

  it('handles TileWMS with multiple URLs by using first URL', () => {
    const source = new OlSourceTileWMS({
      urls: ['http://example.com/wms1', 'http://example.com/wms2'],
      params: {
        LAYERS: 'foo'
      }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toContain('http://example.com/wms1?');
  });

  it('handles URL without ? by adding it', () => {
    const source = new OlSourceImageWMS({
      url: 'http://example.com/wms',
      params: {
        LAYERS: 'foo'
      }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toMatch(/^http:\/\/example\.com\/wms\?/);
  });

  it('combines all params correctly in query string', () => {
    const source = new OlSourceTileWMS({
      url: 'http://example.com/wms',
      params: {
        LAYERS: 'test:layer',
        VERSION: '1.1.0',
        FORMAT: 'image/gif'
      }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toContain('LAYER=test%3Alayer');
    expect(result).toContain('VERSION=1.1.0');
    expect(result).toContain('SERVICE=WMS');
    expect(result).toContain('REQUEST=GetLegendGraphic');
    expect(result).toContain('FORMAT=image%2Fgif');
  });

  it('properly encodes special characters in params', () => {
    const source = new OlSourceTileWMS({
      url: 'http://example.com/wms',
      params: {
        LAYERS: 'my:layer&name=test'
      }
    });
    const layer = new OlLayer({ source });
    layer.set('customPrintLegendParams', {
      RULE: 'population > 1000'
    });

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toContain('my%3Alayer%26name%3Dtest');
    expect(result).toContain('population%20%3E%201000');
  });
});

