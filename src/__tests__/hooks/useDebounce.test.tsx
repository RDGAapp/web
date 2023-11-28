import { useState } from 'react';

import { render, fireEvent } from '@testing-library/react';

import useDebounce from 'hooks/useDebounce';

jest.useFakeTimers();
const functionMock = jest.fn();

const Button = () => {
  const [value, setValue] = useState(0);
  useDebounce(functionMock, 1000, [value]);

  return (
    <button type='button' onClick={() => setValue(value + 1)}>
      increase
    </button>
  );
};

describe('useDebounce hook', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('should call function only once', () => {
    const { getByText } = render(<Button />);
    const button = getByText('increase');

    expect(button).toBeDefined();
    expect(functionMock).toHaveBeenCalledTimes(0);

    for (let i = 0; i < 5; i += 1) {
      fireEvent.click(button);
    }
    expect(functionMock).toHaveBeenCalledTimes(0);
    jest.runAllTimers();
    expect(functionMock).toHaveBeenCalledTimes(1);
  });
});
