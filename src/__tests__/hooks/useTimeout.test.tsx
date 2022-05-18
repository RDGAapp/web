import { fireEvent, render } from '@testing-library/react';

import useTimeout from 'hooks/useTimeout';

const timeoutCallback = jest.fn();

const Button = () => {
  const { reset, clear } = useTimeout(timeoutCallback, 1000);

  return (
    <>
      <button type="button" onClick={reset}>
        reset
      </button>
      <button type="button" onClick={clear}>
        clear
      </button>
    </>
  );
};

describe('useTimeout hook', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  test('should set timeout with setTimeout', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    render(<Button />);
    expect(setTimeout).toBeCalledTimes(1);
    expect(setTimeout).toBeCalledWith(expect.any(Function), 1000);
    expect(timeoutCallback).toBeCalledTimes(0);

    jest.runAllTimers();
    expect(timeoutCallback).toBeCalledTimes(1);
  });

  test('should call clearTimeout on reset and clear function calls', () => {
    jest.spyOn(global, 'clearTimeout');

    const { getByText } = render(<Button />);
    const resetButton = getByText('reset');
    const clearButton = getByText('clear');

    expect(resetButton).toBeDefined();
    expect(clearButton).toBeDefined();
    expect(clearTimeout).toBeCalledTimes(0);

    fireEvent.click(resetButton);
    expect(clearTimeout).toBeCalledTimes(1);

    fireEvent.click(clearButton);
    expect(clearTimeout).toBeCalledTimes(2);
  });

  test('should not call clearTimeout as timer is undefined', () => {
    jest.spyOn(global, 'clearTimeout');
    global.setTimeout = (() => { /* do nothing */ }) as unknown as typeof setTimeout;

    const { getByText } = render(<Button />);
    const clearButton = getByText('clear');

    expect(clearButton).toBeDefined();
    expect(clearTimeout).toBeCalledTimes(0);

    fireEvent.click(clearButton);
    expect(clearTimeout).toBeCalledTimes(0);
  });
});
