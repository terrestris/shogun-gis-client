import React from 'react';

import {
  screen,
  fireEvent,
  cleanup,
  waitFor,
  render
} from '@testing-library/react';

import Feature from 'ol/Feature';

import AttributionDrawer from './index';

jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: jest.fn()
}));

describe('<AttributionDrawer />', () => {
  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(AttributionDrawer).not.toBeUndefined();
  });

  it('renders correctly when no selected feature', () => {
    render(<AttributionDrawer selectedFeature={undefined} />);
    expect(screen.queryByText('Attribution.title')).not.toBeInTheDocument();
  });

  test('renders correctly when a feature is selected', () => {
    const feature = new Feature({ name: 'Test Feature' });
    render(<AttributionDrawer selectedFeature={feature} />);
    expect(screen.getByText('Attribution.title')).toBeInTheDocument();
  });

  test('adds a new attribute field when clicking add button', async () => {
    const feature = new Feature({ name: 'Test Feature' });
    render(<AttributionDrawer selectedFeature={feature} />);

    const addButton = screen.getByText('Attribution.add');
    fireEvent.click(addButton);

    expect(await screen.findByRole('textbox')).toBeInTheDocument();
  });

  test('disables submit button when form is invalid', async () => {
    const feature = new Feature({ name: 'Test Feature' });
    render(<AttributionDrawer selectedFeature={feature} />);

    const addButton = screen.getByText('Attribution.add');
    fireEvent.click(addButton);

    const input = await screen.findByRole('textbox');
    await waitFor(() => {
      fireEvent.change(input, { target: { value: 'test' } });
      fireEvent.change(input, { target: { value: '' } });
    });

    const submitButton = screen.getByRole('button', { name: /submit/i }) as HTMLButtonElement;
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  test('updates available attributes when form values change', async () => {
    const feature = new Feature({ name: 'Test Feature' });
    render(<AttributionDrawer selectedFeature={feature} />);

    const addButton = screen.getByText('Attribution.add');
    fireEvent.click(addButton);

    const input = await screen.findByRole('textbox');
    fireEvent.change(input, { target: { value: 'newAttribute' } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByDisplayValue('newAttribute')).toBeInTheDocument();
    });
  });
});
