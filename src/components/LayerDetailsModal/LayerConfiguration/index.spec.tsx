import React from 'react';

import {
  cleanup,
  render
} from '@testing-library/react';

import OlLayer from 'ol/layer/Layer';

import { useTranslation } from 'react-i18next';

import { createReduxWrapper } from '../../../utils/testUtils';

import LayerConfiguration from './index';

export default function CustomComponent() {
  const { t } = useTranslation();

  return <div>{t('some.key', { some: 'variable' })}</div>;
}

let mockLayer: OlLayer;

describe('<LayerConfiguration />', () => {

  beforeEach(() => {
    const mockShogunId = 'test-shogun-id';
    mockLayer = new OlLayer({});

    mockLayer.set('shogunId', mockShogunId);

    expect(mockLayer.get('shogunId')).toBe(mockShogunId);
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(LayerConfiguration).not.toBeUndefined();
  });

  it('can be rendered', async () => {
    const {
      container
    } = render(
      <LayerConfiguration
        layer={mockLayer}
      />,
      {
        wrapper: createReduxWrapper()
      });
    await expect(container).toBeVisible();
  });
});
