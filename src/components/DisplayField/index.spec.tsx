import React from 'react';

import {
  render,
  screen
} from '@testing-library/react';

import DisplayField from '.';

describe('<DisplayField />', () => {

  it('is defined', () => {
    expect(DisplayField).toBeDefined();
  });

  it('renders urls as links', () => {
    const linkValues = [
      'http://example.com',
      'https://example.com',
      'http://localhost:8080',
      'ftp://example.com',
      'mailto:silke@shogun.pl'
    ];

    for (const linkValue of linkValues) {
      render(<DisplayField value={linkValue} />);
      const link = screen.getByText(linkValue);
      expect(link).toBeVisible();
      expect(link).toBeInstanceOf(HTMLAnchorElement);
      expect(link).toHaveAttribute('href', linkValue);
    }

    const noneLinkValues = [
      'H:\\special\\windäws\\with spaces\\and, tons of, commas and .dots\\file.txt',
      'file://///server/share/path/to/file.txt',
      'Peter',
      123
    ];

    for (const noneLinkValue of noneLinkValues) {
      render(<DisplayField value={noneLinkValue} />);
      const noneLink = screen.queryByText(noneLinkValue);
      expect(noneLink).toBeVisible();
      expect(noneLink).not.toBeInstanceOf(HTMLAnchorElement);
    }
  });

});
