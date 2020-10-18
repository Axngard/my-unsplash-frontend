module.exports = {
   verbose: true,
   setupFilesAfterEnv: ['<rootDir>/src/__test__/jest.setup.js'],
   moduleNameMapper: {
      '^@components/(.*)': '<rootDir>/src/components/$1',
      '^@src/(.*)': '<rootDir>/src/$1',
      '\\.(css)$': '<rootDir>/src/__mocks__/styles.mock.ts'
   }
}
