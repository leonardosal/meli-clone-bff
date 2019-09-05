// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**",
    "!<rootDir>/node_modules/",
    "!<rootDir>/src/config/config.js",
    "!<rootDir>/src/controllers/controller.js",
    "!<rootDir>/src/server.js"
],
  coverageDirectory: "__tests__/coverage",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.test.js?(x)"
  ],
};
