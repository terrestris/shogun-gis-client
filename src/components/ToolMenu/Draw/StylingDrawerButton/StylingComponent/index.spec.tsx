import React from 'react';

import {
  render,
  screen,
  waitFor
} from '@testing-library/react';

import OlParser from 'geostyler-openlayers-parser';
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

jest.mock('geostyler-openlayers-parser', () => {
  return jest.fn().mockImplementation(() => ({
    writeStyle: jest.fn().mockResolvedValue({ output: jest.fn() })
  }));
});

describe('StylingDrawer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useMap as jest.Mock).mockReturnValue({
      getLayers: jest.fn()
    });

    const mockVectorLayer = new OlLayerVector({ source: new OlSourceVector() });
    (MapUtil.getLayerByName as jest.Mock).mockReturnValue(mockVectorLayer);
  });

  it('is defined', () => {
    expect(StylingComponent).not.toBeUndefined();
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
    expect(inputElement.value).toBe('Default Style');
  });

  it('processes styles and applies them to the map', async () => {
    render(<StylingComponent />);

    await waitFor(() => {
      expect(OlParser).toHaveBeenCalled();
      expect(MapUtil.getLayerByName).toHaveBeenCalledWith(expect.any(Object), 'react-geo_digitize');
    });
  });
});

