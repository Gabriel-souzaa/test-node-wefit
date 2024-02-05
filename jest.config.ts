import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  forceExit: true,
  testEnvironment: 'node',
  roots: ['<rootDir>'],
}

export default jestConfig;