module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': '<rootDir>/node_modules/babel-jest'
  },
  testMatch: ['<rootDir>/src/**/?!(*.ui)(spec|test).(j|t)s?(x)'],
  collectCoverageFrom: ['src/**/?!(*.ui)*.{tsx,jsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(ol|antd|@babel|jest-runtime|(rc-*[a-z]*)|@ant-design|@terrestris))'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '^.+\\.(css|less)$': '<rootDir>/jest/cssTransform.js'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json']
};
