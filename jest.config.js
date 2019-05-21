const { defaults } = require('jest-config');
module.exports = {
  ...defaults,
  setupFiles: ['<rootDir>/setupTests.js'],
  testMatch: ['<rootDir>/src/**/*.test.js'],
};
