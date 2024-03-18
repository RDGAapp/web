import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { expect, afterEach } from 'vitest';
import 'jest-styled-components';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
