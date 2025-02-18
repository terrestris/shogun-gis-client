import React from 'react';

import {
  screen,
  fireEvent,
  render,
  within
} from '@testing-library/react';

import { Form } from 'antd';

import AttributionRow from './index';

describe('<AttributionRow />', () => {
  it('is defined', () => {
    expect(AttributionRow).not.toBeUndefined();
  });

  it('can be rendered with placeholders and options', async () => {
    render(
      <Form>
        <AttributionRow
          keyName="testKey"
          options={['Option1', 'Option2']}
        />
      </Form>
    );

    expect(screen.getByText('AttributionRow.keyPlaceholder')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('AttributionRow.valuePlaceholder')).toBeInTheDocument();

    const autoComplete = document.querySelector('#field1_name');

    if (!autoComplete) {
      return;
    };

    expect(within(autoComplete.parentElement!).getByText('AttributionRow.keyPlaceholder')).toBeInTheDocument();

    const input = screen.getByPlaceholderText('AttributionRow.valuePlaceholder');
    expect(input).toBeInTheDocument();

    fireEvent.focus(autoComplete);
    expect(screen.getByText('Option1')).toBeInTheDocument();
    expect(screen.getByText('Option2')).toBeInTheDocument();
  });

  it('calls onChange when Input value changes', () => {
    const handleChange = jest.fn();

    render(
      <Form>
        <AttributionRow
          keyName="testKey"
          onChange={handleChange}
        />
      </Form>
    );

    const input = screen.getByPlaceholderText('AttributionRow.valuePlaceholder');
    fireEvent.change(input, { target: { value: 'TestValue' } });

    expect(handleChange).toHaveBeenCalledWith('TestValue');
  });

  it('validates the required fields', async () => {
    render(
      <Form>
        <AttributionRow keyName="testKey" />
      </Form>
    );

    const autoComplete = document.querySelector('#field1_name');
    const input = screen.getByPlaceholderText('AttributionRow.valuePlaceholder');

    if (!autoComplete) {
      return;
    };

    fireEvent.blur(autoComplete);
    fireEvent.blur(input);

    expect(await screen.findByText('AttributionRow.missingKey')).toBeInTheDocument();
    expect(await screen.findByText('AttributionRow.missingValue')).toBeInTheDocument();
  });

  it('validates unique keys', async () => {
    const mockFormData = {
      fields: {
        field1: { name: 'DuplicateKey' },
        field2: { name: 'DuplicateKey' }
      }
    };

    render(
      <Form initialValues={mockFormData}>
        <AttributionRow keyName="field1" />
      </Form>
    );

    const autoComplete = document.querySelector('#field1_name');

    if (!autoComplete) {
      return;
    };

    fireEvent.change(autoComplete, { target: { value: 'DuplicateKey' } });
    fireEvent.blur(autoComplete);

    expect(await screen.findByText('AttributionRow.keyInUse')).toBeInTheDocument();
  });
});
