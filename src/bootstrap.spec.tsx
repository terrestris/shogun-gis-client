import Logger from '@terrestris/base-util/dist/Logger';

import { SHOGunAPIClient } from '@terrestris/shogun-util/dist/service/SHOGunAPIClient';

import {
  getApplicationConfiguration,
  getStaticApplicationConfiguration,
  getApplicationConfigurationByName,
  getUser,
  setApplicationToStore,
  parseTheme,
  checkRoles,
  matchRole
} from './bootstrap';

import { setDescription } from './store/description';
import { setLegal } from './store/legal';
import { setLogoPath } from './store/logoPath';
import { setSearchEngines } from './store/searchEngines';
import { store } from './store/store';
import { setTitle } from './store/title';

jest.mock('@terrestris/base-util/dist/Logger', () => ({
  __esModule: true,
  default: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn()
  }
}));

jest.mock('./store/store', () => ({
  store: {
    dispatch: jest.fn()
  }
}));

jest.mock('@terrestris/shogun-util/dist/service/SHOGunAPIClient');

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn()
  }))
}));

describe('Application Configuration Functions', () => {
  let mockApp = {
    id: 1,
    name: 'TestApp'
  };
  const mockUser = {
    id: 1,
    name: 'TestUser'
  };
  let mockClient = {
    application: jest.fn(),
    user: jest.fn()
  } as unknown as jest.Mocked<SHOGunAPIClient>;

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    jest.clearAllMocks();
  });

  test('logs error when fetching application fails', async () => {
    const error = new Error('Fetch failed');

    global.fetch = jest.fn(() => Promise.reject(error)) as jest.Mock;

    const result = await getStaticApplicationConfiguration('/config.json');

    expect(result).toBeUndefined();
    expect(Logger.error).toHaveBeenCalledWith(expect.stringContaining('Error while loading static application'));
  });

  test('getApplicationConfiguration  - success', async () => {
    mockApp = {
      id: 1,
      name: 'TestApp'
    };

    const applicationMock = {
      findOne: jest.fn().mockResolvedValue(mockApp)
    };

    mockClient = {
      application: jest.fn(() => applicationMock)
    } as unknown as jest.Mocked<SHOGunAPIClient>;

    const result = await getApplicationConfiguration(mockClient, 1);

    expect(mockClient.application).toHaveBeenCalled();
    expect(applicationMock.findOne).toHaveBeenCalledWith(1);
    expect(result).toEqual(mockApp);
    expect(Logger.info).toHaveBeenCalledWith('Successfully loaded application with ID 1');
  });

  test('getApplicationConfiguration - unauthorized error', async () => {
    const applicationMock = {
      findOne: jest.fn().mockRejectedValue(new Error('401 Unauthorized'))
    };

    mockClient = {
      application: jest.fn(() => applicationMock)
    } as unknown as jest.Mocked<SHOGunAPIClient>;

    await expect(getApplicationConfiguration(mockClient, 1)).rejects.toThrow('APP_UNAUTHORIZED');
  });

  test('ApplicationConfigurationByName - success', async () => {
    mockApp = {
      id: 1,
      name: 'TestApp'
    };

    const applicationMock = {
      findOneByName: jest.fn().mockResolvedValue(mockApp)
    };

    mockClient = {
      application: jest.fn(() => applicationMock)
    } as unknown as jest.Mocked<SHOGunAPIClient>;

    const result = await getApplicationConfigurationByName(mockClient, 'TestApp');

    expect(mockClient.application().findOneByName).toHaveBeenCalledWith('TestApp');
    expect(result).toEqual(mockApp);
    expect(Logger.info).toHaveBeenCalledWith('Successfully loaded application with name: TestApp');
  });

  test('getStaticApplicationConfiguration - success', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          id: 1,
          name: 'StaticApp'
        })
      })
    ) as jest.Mock;

    const result = await getStaticApplicationConfiguration('/config.json');

    expect(global.fetch).toHaveBeenCalledWith('/config.json');
    expect(result).toEqual({
      id: 1,
      name: 'StaticApp'
    });
    expect(Logger.info).toHaveBeenCalledWith('Successfully loaded static application');
  });

  test('getStaticApplicationConfiguration - unauthorized error', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: false,
      status: 401
    })) as jest.Mock;

    await expect(getStaticApplicationConfiguration('/config.json')).rejects.toThrow('APP_UNAUTHORIZED');
  });

  test('getUser - success', async () => {
    const userMock = {
      findOne: jest.fn().mockResolvedValue(mockUser)
    };

    mockClient = {
      user: jest.fn(() => userMock)
    } as unknown as jest.Mocked<SHOGunAPIClient>;

    const result = await getUser(mockClient, 1);

    expect(mockClient.user().findOne).toHaveBeenCalledWith(1);
    expect(result).toEqual(mockUser);
    expect(Logger.info).toHaveBeenCalledWith('Successfully loaded user with ID 1');
  });

  test('getUser - missing userId', async () => {
    const result = await getUser(mockClient, undefined);

    expect(result).toBeUndefined();
    expect(Logger.info).toHaveBeenCalledWith('No user ID given, can\'t load it\'s details.');
  });
});

describe('State Management Functions', () => {
  test('setApplicationToStore - dispatches correct actions', async () => {
    const mockMapView = {};
    const mockLegalConfig = {};

    const mockApp = {
      name: 'TestApp',
      clientConfig: {
        description: 'Test Description',
        legal: mockLegalConfig,
        theme: { logoPath: '/logo.png' },
        mapView: mockMapView
      },
      toolConfig: []
    };

    await setApplicationToStore(mockApp);

    expect(store.dispatch).toHaveBeenCalledWith(setTitle('TestApp'));
    expect(store.dispatch).toHaveBeenCalledWith(setDescription('Test Description'));
    expect(store.dispatch).toHaveBeenCalledWith(setLegal({}));
    expect(store.dispatch).toHaveBeenCalledWith(setLogoPath('/logo.png'));
    expect(store.dispatch).toHaveBeenCalledWith(setSearchEngines(['nominatim']));
  });
});

describe('Utility Functions', () => {
  test('parseTheme - returns default values', () => {
    const result = parseTheme(undefined);
    expect(result).toEqual({
      '--primaryColor': '#59666C',
      '--secondaryColor': '#70B3BE',
      '--complementaryColor': '#FFFFFF'
    });
  });

  test('parseTheme - overrides values', () => {
    const theme = {
      primaryColor: '#FF0000',
      secondaryColor: '#00FF00',
      complementaryColor: '#0000FF'
    };
    const result = parseTheme(theme);
    expect(result).toEqual({
      '--primaryColor': '#FF0000',
      '--secondaryColor': '#00FF00',
      '--complementaryColor': '#0000FF'
    });
  });

  test('checkRoles - assigns correct roles', () => {
    const featureEditRoles = {
      authorizedRolesForCreate: ['admin'],
      authorizedRolesForUpdate: ['editor'],
      authorizedRolesForDelete: ['admin'],
      authorizedRolesForEditingGeometries: [/geo_/]
    };

    const result = checkRoles(['admin', 'editor', 'geo_user'], featureEditRoles);
    expect(result).toEqual(['CREATE', 'DELETE', 'UPDATE', 'EDIT_GEOMETRY']);
  });

  test('matchRole - exact match', () => {
    expect(matchRole('admin', 'admin')).toBe(true);
    expect(matchRole('editor', 'admin')).toBe(false);
  });

  test('matchRole - regex match', () => {
    expect(matchRole(/^geo_/, 'geo_admin')).toBe(true);
    expect(matchRole(/^geo_/, 'editor')).toBe(false);
  });
});
