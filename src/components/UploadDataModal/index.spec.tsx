import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react';

import { Shapefile } from 'shapefile.js';

import {
  store
} from '../../store/store';
import {
  show,
  hide
} from '../../store/uploadDataModal';

import {
  createReduxWrapper
} from '../../utils/testUtils';

import UploadDataModal from './index';

jest.mock('shapefile.js', () => ({
  Shapefile: {
    load: jest.fn()
  }
}));

describe('<UploadDataModal />', () => {

  beforeEach(() => {
    store.dispatch(show());
    global.fetch = jest.fn();
    jest.clearAllMocks();
  });

  afterEach(() => {
    store.dispatch(hide());
  });

  it('is defined', () => {
    expect(UploadDataModal).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(<UploadDataModal />, {
      wrapper: createReduxWrapper()
    });

    expect(container).toBeVisible();
  });

  it('can toggle its visibility', () => {
    render(<UploadDataModal />, {
      wrapper: createReduxWrapper()
    });

    const modal = screen.getByRole('dialog');

    expect(modal).not.toHaveStyle('display: none');

    const closeButton = screen.getByLabelText('Close', {
      selector: 'button'
    });

    fireEvent.click(closeButton);

    expect(modal).toHaveStyle('display: none');
  });

  it('displays the correct title', () => {
    render(<UploadDataModal />, {
      wrapper: createReduxWrapper()
    });

    expect(screen.getByText('UploadDataModal.title')).toBeInTheDocument();
  });

  it('displays upload instructions', () => {
    render(<UploadDataModal />, {
      wrapper: createReduxWrapper()
    });

    expect(screen.getByText('UploadDataModal.description')).toBeInTheDocument();
    expect(screen.getByText('UploadDataModal.hint')).toBeInTheDocument();
  });

  it('has a file input for uploading', () => {
    render(<UploadDataModal />, {
      wrapper: createReduxWrapper()
    });

    const fileInput = document.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute('accept', 'image/tiff,application/zip');
  });

  describe('File validation', () => {
    it('rejects files that exceed the size limit', async () => {
      render(<UploadDataModal />, {
        wrapper: createReduxWrapper()
      });

      const file = new File(['content'], 'large-file.tif', { type: 'image/tiff' });
      Object.defineProperty(file, 'size', { value: 300000000 }); // 300MB

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      Object.defineProperty(fileInput, 'files', {
        value: [file],
        writable: false
      });

      fireEvent.change(fileInput);

      await waitFor(() => {
        expect(screen.getByText('UploadDataModal.error.maxSize')).toBeInTheDocument();
      });
    });

    it('rejects unsupported file types', async () => {
      render(<UploadDataModal />, {
        wrapper: createReduxWrapper()
      });

      const file = new File(['content'], 'document.pdf', { type: 'application/pdf' });
      Object.defineProperty(file, 'size', { value: 1000 });

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      Object.defineProperty(fileInput, 'files', {
        value: [file],
        writable: false
      });

      fireEvent.change(fileInput);

      await waitFor(() => {
        expect(screen.getByText('UploadDataModal.error.supportedFormats')).toBeInTheDocument();
      });
    });

    it('accepts valid GeoTIFF files', () => {
      render(<UploadDataModal />, {
        wrapper: createReduxWrapper()
      });

      const file = new File(['content'], 'valid.tif', { type: 'image/tiff' });
      Object.defineProperty(file, 'size', { value: 5000000 }); // 5MB

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      Object.defineProperty(fileInput, 'files', {
        value: [file],
        writable: false
      });

      expect(() => {
        fireEvent.change(fileInput);
      }).not.toThrow();
    });

    it('accepts valid ZIP files', () => {
      render(<UploadDataModal />, {
        wrapper: createReduxWrapper()
      });

      const file = new File(['content'], 'shapefile.zip', { type: 'application/zip' });
      Object.defineProperty(file, 'size', { value: 5000000 }); // 5MB

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      Object.defineProperty(fileInput, 'files', {
        value: [file],
        writable: false
      });

      expect(() => {
        fireEvent.change(fileInput);
      }).not.toThrow();
    });
  });

  describe('GeoTIFF upload', () => {
    it('successfully uploads a GeoTIFF file', async () => {
      (global.fetch as jest.Mock)
        .mockResolvedValueOnce({ ok: true })
        .mockResolvedValueOnce({ ok: true });

      render(<UploadDataModal />, {
        wrapper: createReduxWrapper()
      });

      const file = new File(['tiff-content'], 'test.tif', { type: 'image/tiff' });
      Object.defineProperty(file, 'size', { value: 1000000 });

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      Object.defineProperty(fileInput, 'files', {
        value: [file],
        writable: false
      });

      fireEvent.change(fileInput);

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          expect.stringContaining('/rest/workspaces/SHOGUN/coveragestores/'),
          expect.objectContaining({
            method: 'PUT',
            headers: expect.objectContaining({
              'Content-Type': 'image/tiff'
            })
          })
        );
      }, { timeout: 3000 });
    });

    it('displays error when GeoTIFF upload fails', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500
      });

      render(<UploadDataModal />, {
        wrapper: createReduxWrapper()
      });

      const file = new File(['tiff-content'], 'test.tif', { type: 'image/tiff' });
      Object.defineProperty(file, 'size', { value: 1000000 });

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      Object.defineProperty(fileInput, 'files', {
        value: [file],
        writable: false
      });

      fireEvent.change(fileInput);

      await waitFor(() => {
        expect(screen.getByText('UploadDataModal.error.general')).toBeInTheDocument();
      }, { timeout: 3000 });
    });
  });

  describe('Shapefile upload', () => {
    it('successfully uploads a shapefile ZIP', async () => {
      (Shapefile.load as jest.Mock).mockResolvedValueOnce({
        // eslint-disable-next-line camelcase
        test_layer: {
          parse: jest.fn()
            .mockReturnValueOnce({
              fields: [
                {
                  name: 'ID',
                  type: 'N',
                  length: 10
                },
                {
                  name: 'NAME',
                  type: 'C',
                  length: 50
                }
              ]
            })
            .mockReturnValueOnce({
              header: { type: 5 } // Polygon
            })
        }
      });

      (global.fetch as jest.Mock)
        .mockResolvedValueOnce({ ok: true }) // Datastore upload
        .mockResolvedValueOnce({ ok: true }); // FeatureType creation

      render(<UploadDataModal />, {
        wrapper: createReduxWrapper()
      });

      const file = new File(['zip-content'], 'test.zip', { type: 'application/zip' });
      Object.defineProperty(file, 'size', { value: 1000000 });

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      Object.defineProperty(fileInput, 'files', {
        value: [file],
        writable: false
      });

      fireEvent.change(fileInput);

      await waitFor(() => {
        expect(Shapefile.load).toHaveBeenCalledWith(file);
      }, { timeout: 3000 });
    });

    it('displays error when shapefile has invalid content', async () => {
      (Shapefile.load as jest.Mock).mockResolvedValueOnce({
        layer1: {},
        layer2: {}
      });

      render(<UploadDataModal />, {
        wrapper: createReduxWrapper()
      });

      const file = new File(['zip-content'], 'test.zip', { type: 'application/zip' });
      Object.defineProperty(file, 'size', { value: 1000000 });

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      Object.defineProperty(fileInput, 'files', {
        value: [file],
        writable: false
      });

      fireEvent.change(fileInput);

      await waitFor(() => {
        expect(screen.getByText('UploadDataModal.error.zipContent')).toBeInTheDocument();
      }, { timeout: 3000 });
    });
  });
});
