import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import '@testing-library/dom';

afterEach(() => {
  cleanup();
});
