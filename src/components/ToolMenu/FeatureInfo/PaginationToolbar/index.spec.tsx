import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom';

import copy from 'copy-to-clipboard';
import OlFeature from 'ol/Feature';
import OlLayer from 'ol/layer/Layer';

import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';

import { CopyTools } from '../../../../store/featureInfo';

import PaginationToolbar from './index';

jest.mock('copy-to-clipboard', () => jest.fn());

jest.mock('../../../../hooks/useAppSelector');
jest.mock('../../../../hooks/useAppDispatch');
jest.mock('../../../../hooks/useGetFitPadding', () => () => jest.fn(() => [0, 0, 0, 0]));
jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: jest.fn()
}));
jest.mock('@terrestris/react-util/dist/Util/DigitizeUtil', () => ({
  DigitizeUtil: {
    getDigitizeLayer: jest.fn()
  }
}));
jest.mock('@terrestris/base-util/dist/Logger', () => ({
  error: jest.fn()
}));

const mockDispatch = jest.fn();

describe('PaginationToolbar', () => {
  let feature: OlFeature;
  let layer: OlLayer;

  beforeEach(() => {
    jest.clearAllMocks();

    feature = new OlFeature({
      id: 1,
      name: 'Test Feature'
    });
    layer = new OlLayer({});
    layer.set('editable', true);

    (useAppSelector as jest.Mock).mockImplementation(fn =>
      fn({
        featureInfo: { activeCopyTools: [CopyTools.COPY_AS_GEOJSON, CopyTools.COPY_AS_OBJECT] },
        editFeature: { userEditMode: ['CREATE'] }
      })
    );
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  it('renders pagination with correct total', () => {
    render(
      <PaginationToolbar
        features={[feature]}
        selectedFeature={feature}
        layer={layer}
      />
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByTitle('Previous Page')).toBeInTheDocument();
    expect(screen.getByTitle('Next Page')).toBeInTheDocument();
  });

  it('renders copy buttons when activeCopyTools contains options', () => {
    render(
      <PaginationToolbar
        features={[feature]}
        selectedFeature={feature}
        layer={layer}
      />
    );
    expect(document.querySelector('.copy-buttons')).toBeInTheDocument();
  });

  it('calls copy with JSON object when copy as Object clicked', async () => {
    render(
      <PaginationToolbar
        features={[feature]}
        selectedFeature={feature}
        layer={layer}
      />
    );

    fireEvent.click(document.querySelector('.copy-buttons')!.querySelector('.fa-clipboard-list')!);
    await waitFor(() => {
      expect(copy).toHaveBeenCalledWith(expect.stringContaining('{"id":1,"name":"Test Feature"}'));
    });
  });
});

