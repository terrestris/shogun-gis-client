import React from 'react';

import {
  cleanup,
  render,
  screen
} from '@testing-library/react';

import OlLayer from 'ol/layer/Layer';

import { createReduxWrapper } from '../../../utils/testUtils';

import LayerDetails from './index';

let mockLayer: OlLayer;

describe('<LayerDetails />', () => {
  beforeEach(() => {
    mockLayer = new OlLayer({});
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(LayerDetails).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(
      <LayerDetails
        layer={mockLayer}
      />,
      {
        wrapper: createReduxWrapper()
      });
    expect(container).toBeVisible();
  });

  it('has full form', async () => {
    render(
      <LayerDetails
        layer={mockLayer}
      />,
      {
        wrapper: createReduxWrapper()
      });
    const formElem = await document.querySelector('.layer-details');
    await expect(formElem).toBeInTheDocument();

    await expect(document.querySelector('#layerName')).toBeInTheDocument();
    await expect(screen.getByTitle('LayerDetails.layerNameLabel')).toBeInTheDocument();
    await expect(screen.getByTitle('LayerDetails.layerTitleLabel')).toBeInTheDocument();
    await expect(screen.getByTitle('LayerDetails.serviceAbstractLabel')).toBeInTheDocument();
    await expect(screen.getByTitle('LayerDetails.abstractLabel')).toBeInTheDocument();
    await expect(screen.getByTitle('LayerDetails.accessConstraintsLabel')).toBeInTheDocument();
    await expect(screen.getByTitle('LayerDetails.capabilitiesUrlLabel')).toBeInTheDocument();
    await expect(screen.getByTitle('LayerDetails.contactLabel')).toBeInTheDocument();
    await expect(screen.getByTitle('LayerDetails.minScaleLabel')).toBeInTheDocument();
    await expect(screen.getByTitle('LayerDetails.maxScaleLabel')).toBeInTheDocument();
    await expect(screen.getByTitle('LayerDetails.bboxLabel')).toBeInTheDocument();
  });
});
