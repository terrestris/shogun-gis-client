module.exports = {
  roots: ['<rootDir>/src'],
  globals: {
    PROJECT_VERSION: JSON.stringify(require('./package.json').version),
    KEYCLOAK_HOST: 'localhost',
    KEYCLOAK_REALM: 'SHOGun',
    KEYCLOAK_CLIENT_ID: 'shogun-client'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest'
  },
  testMatch: ['<rootDir>/src/**/?(*.)(spec).(j|t)s?(x)'],
  testPathIgnorePatterns: ['/e2e-tests/'],
  collectCoverageFrom: ['src/**/?!(*.ui)*.{tsx,jsx,ts,js}'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/jest/matchMediaMock.js',
    '<rootDir>/jest/resizeObserverMock.js'
  ],
  testEnvironment: './jest/CustomTestEnvironment.js',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(ol|antd|@babel|jest-runtime|(rc-*[a-z]*)|@ant-design|@terrestris|query-string|decode-uri-component|split-on-first|filter-obj))'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '^.+\\.(css|less)$': '<rootDir>/jest/cssTransform.js',
    clientConfig: '<rootDir>/resources/config/gis-client-config.js'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  reporters: [
    'default',
    '@casualbot/jest-sonar-reporter'
  ],
  coverageReporters: ['json-summary'],
  coverageDirectory: 'coverage/all'
};
