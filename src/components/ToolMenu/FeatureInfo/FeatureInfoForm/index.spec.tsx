import React from 'react';

import {
  render,
  screen
} from '@testing-library/react';

import '@testing-library/jest-dom';
import OlFeature from 'ol/Feature';

import FeatureInfoForm from './index';

jest.mock('../../../DisplayField', () => (props: any) => (
  <div data-testid="display-field"
    {...props}
  >
    {props.label}
  </div>
));

describe('FeatureInfoForm', () => {
  it('renders without crashing', () => {
    const feature = new OlFeature({
      id: 1,
      name: 'Test Feature'
    });

    render(<FeatureInfoForm feature={feature} />);
    expect(document.querySelector('.feature-info-form')).toBeInTheDocument();
  });

  it('renders form items based on formConfig', () => {
    const feature = new OlFeature({
      id: 1,
      name: 'Test Feature'
    });
    const formConfig = [
      {
        propertyName: 'id',
        displayName: 'Identifier'
      },
      {
        propertyName: 'name'
      }
    ];

    render(
      <FeatureInfoForm
        feature={feature}
        formConfig={formConfig}
      />
    );

    expect(screen.getByTitle('Identifier')).toBeInTheDocument();
    expect(screen.getByTitle('name')).toBeInTheDocument();

    const fields = screen.getAllByTestId('display-field');
    expect(fields).toHaveLength(2);
  });

  it('sets initial values from feature properties', () => {
    const feature = new OlFeature({
      id: 42,
      name: 'Initial Name'
    });
    const formConfig = [
      {
        propertyName: 'id',
        displayName: 'Identifier'
      },
      {
        propertyName: 'name'
      }
    ];

    render(
      <FeatureInfoForm
        feature={feature}
        formConfig={formConfig}
      />
    );

    const inputs = screen.getAllByTestId('display-field');

    expect(inputs[0]).toHaveAttribute('value', '42');
    expect(inputs[1]).toHaveAttribute('value', 'Initial Name');
  });

  it('updates form values when feature changes', () => {
    const { rerender } = render(
      <FeatureInfoForm
        feature={new OlFeature({ name: 'Old Name' })}
        formConfig={[{ propertyName: 'name' }]}
      />
    );

    let input = screen.getByTestId('display-field') as HTMLInputElement;
    expect(input).toHaveAttribute('value', 'Old Name');

    rerender(
      <FeatureInfoForm
        feature={new OlFeature({ name: 'New Name' })}
        formConfig={[{ propertyName: 'name' }]}
      />
    );

    input = screen.getByTestId('display-field') as HTMLInputElement as HTMLInputElement;
    expect(input).toHaveAttribute('value', 'New Name');
  });

  it('passes through extra props to Form', () => {
    const feature = new OlFeature({ id: 1 });
    render(
      <FeatureInfoForm
        feature={feature}
        formConfig={[]}
        layout="vertical"
      />
    );

    expect(document.querySelector('.feature-info-form')).toHaveClass('ant-form-vertical');
  });
});
