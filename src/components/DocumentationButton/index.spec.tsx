import React from 'react';

import {
  render,
  screen,
  fireEvent,
  cleanup
} from '@testing-library/react';

import DocumentationButton from '.';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(() => ({
    t: (key: string) => key
  }))
}));

describe('<DocumentationButton />', () => {

  afterEach(() => {
    cleanup();
  });

  it('renders correctly', () => {
    render(<DocumentationButton />);
    const button = screen.getByRole('button', { name: 'documentation-button' });
    expect(button).toBeInTheDocument();
  });

  it('has the correct icon', () => {
    render(<DocumentationButton />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('fa-circle-question');
  });

  it('opens the documentation link in a new tab when clicked', () => {
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
    render(<DocumentationButton />);
    const button = screen.getByRole('button', { name: 'documentation-button' });
    fireEvent.click(button);
    expect(openSpy).toHaveBeenCalledWith('/gis-docs', '_blank');
    openSpy.mockRestore();
  });

  it('applies the correct class name', () => {
    const customClassName = 'custom-class';
    render(<DocumentationButton className={customClassName} />);
    const button = screen.getByRole('button', { name: 'documentation-button' });
    expect(button).toHaveClass('documentationbutton custom-class');
  });
});
