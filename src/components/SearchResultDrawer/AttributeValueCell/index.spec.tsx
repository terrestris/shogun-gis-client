import React from 'react';

import {
  render, screen
} from '@testing-library/react';

import { AttributeValueCell } from './index';

describe('AttributeValueCell', () => {
  it('renders a simple string value', () => {
    render(
      <AttributeValueCell
        value="Mall"
        attributeName="name"
      />
    );
    expect(screen.getByText('Mall')).toBeInTheDocument();
  });

  it('renders a clickable link if value is a URL and config matches', () => {
    render(
      <AttributeValueCell
        value="https://www.terrestris.de"
        attributeName="Details"
        resultDrawerConfig={{
          children: [
            {
              displayName: 'Details',
              fieldProps: { urlDisplayValue: 'terrestris' }
            }
          ]
        }}
      />
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://www.terrestris.de');
    expect(link).toHaveTextContent('terrestris');
  });

  it('normalizes single-item string arrays', () => {
    render(
      <AttributeValueCell
        value={['single value']}
        attributeName="name"
      />
    );
    expect(screen.getByText('single value')).toBeInTheDocument();
  });
});
