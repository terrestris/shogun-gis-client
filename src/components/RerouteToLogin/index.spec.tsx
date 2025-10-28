import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom';

import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

import RerouteToLogin from './index';

jest.mock('../../hooks/useSHOGunAPIClient', () => jest.fn());

describe('RerouteToLogin', () => {
  let mockKeycloak: { createLoginUrl: jest.Mock };

  beforeEach(() => {
    mockKeycloak = {
      createLoginUrl: jest.fn().mockResolvedValue('http://login-url.com')
    };
    (useSHOGunAPIClient as jest.Mock).mockReturnValue({
      getKeycloak: () => mockKeycloak
    });
    jest.spyOn(window, 'open').mockImplementation(() => null);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders with provided reroute message', () => {
    render(<RerouteToLogin rerouteMsg="Please login" />);
    expect(screen.getByRole('button')).toHaveTextContent('Please login');
  });

  it('calls createLoginUrl on mount and stores it', async () => {
    render(<RerouteToLogin rerouteMsg="Login" />);
    await waitFor(() => {
      expect(mockKeycloak.createLoginUrl).toHaveBeenCalled();
    });
  });

  it('clicking the button opens login URL if keycloak is available', async () => {
    render(<RerouteToLogin rerouteMsg="Login now" />);
    await waitFor(() => {
      expect(mockKeycloak.createLoginUrl).toHaveBeenCalled();
    });

    fireEvent.click(screen.getByRole('button'));
    expect(window.open).toHaveBeenCalledWith('http://login-url.com', '_self');
  });

  it('clicking the button does nothing if keycloak is not available', () => {
    (useSHOGunAPIClient as jest.Mock).mockReturnValue({ getKeycloak: () => undefined });
    render(<RerouteToLogin rerouteMsg="Login" />);
    fireEvent.click(screen.getByRole('button'));
    expect(window.open).not.toHaveBeenCalled();
  });
});
