import { useEffect } from 'react';

import useTimeout from 'hooks/useTimeout';

const useDebounce = (
  callback: () => void,
  delay: number,
  dependencies: unknown[],
) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);

  return { reset, clear };
};

export default useDebounce;
