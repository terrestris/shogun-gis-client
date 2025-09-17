import React from 'react';

import {
  render,
  screen
} from '@testing-library/react';

import OlFeature from 'ol/Feature';

import { FeatureInfoForm } from './FeatureInfoForm';

import FeatureInfo from './index';

jest.mock('../../DisplayField', () => (props: any) => (
  <div data-testid="display-field">{props.label}</div>
));
describe('<FeatureInfo />', () => {
  it('is defined', () => {
    expect(FeatureInfo).not.toBeUndefined();
  });

  describe('<FeatureInfoForm />', () => {
    it('renders form items based on formConfig', () => {
      const feature = new OlFeature({
        foo: 'bar',
        baz: 42
      });
      const formConfig = [
        {
          propertyName: 'foo',
          displayName: 'Foo Label',
          fieldProps: {}
        },
        {
          propertyName: 'baz',
          fieldProps: {}
        }
      ];

      render(
        <FeatureInfoForm
          feature={feature}
          formConfig={formConfig}
        />
      );

      expect(screen.getAllByText('Foo Label')[0]).toBeInTheDocument();
      expect(screen.getByTitle('baz')).toBeInTheDocument();
      expect(screen.getAllByTestId('display-field')).toHaveLength(2);
    });

    it('calls resetFields and setFieldsValue on feature change', () => {
      const feature1 = new OlFeature({ foo: 'bar' });
      const feature2 = new OlFeature({ foo: 'baz' });
      const formConfig = [{
        propertyName: 'foo',
        fieldProps: {}
      }];

      const { rerender } = render(
        <FeatureInfoForm
          feature={feature1}
          formConfig={formConfig}
        />
      );
      rerender(
        <FeatureInfoForm
          feature={feature2}
          formConfig={formConfig}
        />
      );

      expect(screen.getAllByText('foo')[0]).toBeInTheDocument();
    });

    it('renders nothing if formConfig is undefined', () => {
      const feature = new OlFeature({ foo: 'bar' });
      render(<FeatureInfoForm feature={feature} />);
      expect(screen.queryByTestId('display-field')).toBeNull();
    });

    it('passes additional props to Form', () => {
      const feature = new OlFeature({ foo: 'bar' });
      const { container } = render(
        <FeatureInfoForm
          feature={feature}
          data-testid="my-form"
        />
      );
      expect(container.querySelector('.feature-info-form')).toBeInTheDocument();
    });
  });
});
