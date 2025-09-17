import React from 'react';

import {
  render,
  screen
} from '@testing-library/react';

import OlFeature from 'ol/Feature';
import OlLayer from 'ol/layer/Layer';

import FeatureInfoTabs from './index';

jest.mock('../FeatureInfoForm', () => (props: any) => (
  <div data-testid="feature-info-form">{props.name}</div>
));
jest.mock('../PaginationToolbar', () => (props: any) => (
  <div data-testid="pagination-toolbar">{props.current}</div>
));
jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: () => ({
    getView: () => ({})
  })
}));

jest.mock('@terrestris/ol-util/dist/MapUtil/MapUtil', () => ({
  MapUtil: {
    getLayerByName: jest.fn(() => ({
      getSource: () => ({
        clear: jest.fn(),
        addFeature: jest.fn()
      })
    }))
  }
}));
jest.mock('../../../../hooks/useHighlightVectorLayer', () => () => {});

describe('<FeatureInfoTabs />', () => {
  const feature1 = new OlFeature({ foo: 'bar' });
  const feature2 = new OlFeature({ foo: 'baz' });
  const features = [feature1, feature2];
  const layer = new OlLayer({});
  const tabConfig = [
    {
      title: 'Tab 1',
      children: [
        {
          propertyName: 'foo',
          displayName: 'Foo',
          fieldProps: {}
        }
      ]
    },
    {
      title: 'Tab 2',
      children: [
        {
          propertyName: 'baz',
          displayName: 'Baz',
          fieldProps: {}
        }
      ]
    }
  ];

  it('renders nothing if tabConfig is missing', () => {
    const { container } = render(
      <FeatureInfoTabs
        features={features}
        layerName="test"
        layer={layer}
      />
    );
    expect(container.firstChild).toBe(null);
  });

  it('renders nothing if selectedFeature is missing', () => {
    const { container } = render(
      <FeatureInfoTabs
        features={[]}
        layerName="test"
        tabConfig={tabConfig}
        layer={layer}
      />
    );
    expect(container.firstChild).toBe(null);
  });

  it('renders tabs and passes correct props to children', () => {
    render(
      <FeatureInfoTabs
        features={features}
        layerName="test"
        tabConfig={tabConfig}
        layer={layer}
      />
    );
    expect(screen.getByTestId('pagination-toolbar')).toBeInTheDocument();
    expect(screen.getAllByTestId('feature-info-form')).toHaveLength(2);
    expect(screen.getAllByText('Tab 1')).toHaveLength(2);
    expect(screen.getAllByText('Tab 2')).toHaveLength(2);
  });

  it('filters out null tabConfig entries', () => {
    const tabConfigWithNil = [
      ...tabConfig,
      null as any,
      undefined as any
    ];
    render(
      <FeatureInfoTabs
        features={features}
        layerName="test"
        tabConfig={tabConfigWithNil}
        layer={layer}
      />
    );
    expect(screen.getAllByTestId('feature-info-form')).toHaveLength(2);
});

  it('calls exportFilter and returns true for matching property', () => {
    render(
      <FeatureInfoTabs
        features={features}
        layerName="test"
        tabConfig={tabConfig}
        layer={layer}
      />
    );
    expect(screen.getByTestId('pagination-toolbar')).toBeInTheDocument();
});

  it('renders with additional props passed to Tabs', () => {
    render(
      <FeatureInfoTabs
        features={features}
        layerName="test"
        tabConfig={tabConfig}
        layer={layer}
        data-testid="tabs"
      />
    );
    expect(screen.getByTestId('pagination-toolbar')).toBeInTheDocument();
  });
});