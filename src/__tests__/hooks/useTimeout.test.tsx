import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';

import useTimeout from 'hooks/useTimeout';

const timeoutCallback = vi.fn();

const Button = () => {
  const { reset, clear } = useTimeout(timeoutCallback, 1000);

  return (
    <>
      <button type='button' onClick={reset}>
        reset
      </button>
      <button type='button' onClick={clear}>
        clear
      </button>
    </>
  );
};

describe('useTimeout hook', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  test('should set timeout with setTimeout', async () => {
    vi.useFakeTimers();
    vi.spyOn(global, 'setTimeout');

    render(<Button />);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    expect(timeoutCallback).toHaveBeenCalledTimes(0);

    vi.runAllTimers();
    expect(timeoutCallback).toHaveBeenCalledTimes(1);
  });

  test('should call clearTimeout on reset and clear function calls', () => {
    vi.spyOn(global, 'clearTimeout');

    const { getByText } = render(<Button />);
    const resetButton = getByText('reset');
    const clearButton = getByText('clear');

    expect(resetButton).toBeDefined();
    expect(clearButton).toBeDefined();
    expect(clearTimeout).toHaveBeenCalledTimes(0);

    fireEvent.click(resetButton);
    expect(clearTimeout).toHaveBeenCalledTimes(1);

    fireEvent.click(clearButton);
    expect(clearTimeout).toHaveBeenCalledTimes(2);
  });

  test('should not call clearTimeout as timer is undefined', () => {
    vi.spyOn(global, 'clearTimeout');
    global.setTimeout = (() => {
      /* do nothing */
    }) as unknown as typeof setTimeout;

    const { getByText } = render(<Button />);
    const clearButton = getByText('clear');

    expect(clearButton).toBeDefined();
    expect(clearTimeout).toHaveBeenCalledTimes(0);

    fireEvent.click(clearButton);
    expect(clearTimeout).toHaveBeenCalledTimes(0);
  });
});
