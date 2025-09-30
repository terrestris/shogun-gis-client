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
        LAYERS: 'bar',
        VERSION: '1.1.1'
      }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);

    expect(result).toContain('http://example.com/ows?');
    expect(result).toContain('LAYER=bar');
    expect(result).toContain('VERSION=1.1.1');
    expect(result).toContain('REQUEST=GetLegendGraphic');
  });

  it('handles URL already ending with ?', () => {
    const source = new OlSourceTileWMS({
      url: 'http://example.com/wms?',
      params: { LAYERS: 'foo' }
    });
    const layer = new OlLayer({ source });

    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toBe('http://example.com/wms?LAYER=foo&VERSION=1.3.0&SERVICE=WMS&REQUEST=GetLegendGraphic&FORMAT=image%2Fpng');
  });

  it('returns undefined for unsupported sources', () => {
    const layer = new OlLayer({});
    const result = Shared.getLegendGraphicUrl(layer);
    expect(result).toBeUndefined();
  });
});

