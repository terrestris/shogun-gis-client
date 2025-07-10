import React from 'react';

import {
  render,
  screen,
  waitFor
} from '@testing-library/react';

import OlFeature from 'ol/Feature';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import StylingComponent from './index';

jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: jest.fn()
}));

jest.mock('@terrestris/ol-util/dist/MapUtil/MapUtil', () => ({
  MapUtil: {
    getLayerByName: jest.fn()
  }
}));

describe('StylingDrawer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useMap as jest.Mock).mockReturnValue({
      getLayers: jest.fn()
    });

    const mockVectorLayer = new OlLayerVector({ source: new OlSourceVector() });
    (MapUtil.getLayerByName as jest.Mock).mockReturnValue(mockVectorLayer);
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<StylingComponent />);

    expect(container).toBeVisible();
  });

  it('initializes with default style', () => {
    render(<StylingComponent />);

    const inputElement = screen.getByPlaceholderText('Enter name') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('StylingComponent.defaultStyleName');
  });

  it('processes styles and applies them to the map', async () => {
    render(<StylingComponent />);

    await waitFor(() => {
      expect(MapUtil.getLayerByName).toHaveBeenCalledWith(expect.any(Object), 'react-geo_digitize');
    });
  });

  it('applies polygon style to polygon features', async () => {
    const mockSetStyle = jest.fn();
    const mockVectorLayer = new OlLayerVector({ source: new OlSourceVector() });
    mockVectorLayer.setStyle = mockSetStyle;

    (MapUtil.getLayerByName as jest.Mock).mockReturnValue(mockVectorLayer);

    render(<StylingComponent />);

    await waitFor(() => {
      const styleFunction = mockSetStyle.mock.calls[0][0];
      const mockFeature = { getGeometry: () => ({ getType: () => 'Polygon' }) };
      const result = styleFunction(mockFeature, 1);
      expect(result).toBeDefined();
    });
  });

  it('applies polygon style to polygon features', async () => {
    const mockSetStyle = jest.fn();
    const mockVectorLayer = new OlLayerVector({ source: new OlSourceVector() });
    mockVectorLayer.setStyle = mockSetStyle;

    (MapUtil.getLayerByName as jest.Mock).mockReturnValue(mockVectorLayer);

    render(<StylingComponent />);

    await waitFor(() => {
      const styleFunction = mockSetStyle.mock.calls[0][0];
      const mockFeature = { getGeometry: () => ({ getType: () => 'Polygon' }) } as unknown as OlFeature;
      const result = styleFunction(mockFeature, 1);
      expect(result).toBeDefined();
    });
  });

  it('applies the style function to the vector layer', async () => {
    const mockSetStyle = jest.fn();
    const mockVectorLayer = new OlLayerVector({ source: new OlSourceVector() });
    mockVectorLayer.setStyle = mockSetStyle;

    (MapUtil.getLayerByName as jest.Mock).mockReturnValue(mockVectorLayer);

    render(<StylingComponent />);

    await waitFor(() => {
      expect(mockSetStyle).toHaveBeenCalled();
      expect(typeof mockSetStyle.mock.calls[0][0]).toBe('function');
    });
  });
});
