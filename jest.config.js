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
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['<rootDir>/src/**/?(*.)(spec).(j|t)s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/src/e2e-tests/'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{tsx,jsx,ts,js}',
    '!<rootDir>/src/e2e-tests/**',
    '!<rootDir>/src/bootsrap.tsx',
    '!<rootDir>/src/global.d.ts'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/jest/matchMediaMock.js',
    '<rootDir>/jest/resizeObserverMock.js'
  ],
  testEnvironment: './jest/CustomTestEnvironment.js',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(ol|antd|keycloak-js|@babel|jest-runtime|(rc-*[a-z]*)|@ant-design|@terrestris|color-*[a-z]*|@camptocamp|d3-*[a-z]*|' +
    'query-string|decode-uri-component|strict-uri-encode|split-on-first|filter-obj|shpjs|geostyler|pbf))'
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
  coverageReporters: ['json-summary', 'lcov', 'text'],
  coverageDirectory: 'coverage/all'
};
