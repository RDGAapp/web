import { useLayoutEffect, useState } from 'react';

import theme from 'helpers/theme';

interface UseMatchMedia {
  isSmallMobile: boolean;
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean,
}

const queries = [
  `(max-width: ${theme.breakpoints.smallMobile}px)`,
  `(max-width: ${theme.breakpoints.mobile}px)`,
  `(max-width: ${theme.breakpoints.tablet}px) and (min-width: ${theme.breakpoints.mobile}px)`,
  `(min-width: ${theme.breakpoints.tablet}px)`,
];

const useMatchMedia = (): UseMatchMedia => {
  const mediaQueryList = queries.map((query) => matchMedia(query));

  const getValues = (): UseMatchMedia => ['isSmallMobile', 'isMobile', 'isTablet', 'isDesktop']
    .reduce((result, screen, index) => ({
      ...result,
      [screen]: mediaQueryList[index].matches,
    }), {} as UseMatchMedia);

  const [values, setValues] = useState<UseMatchMedia>(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryList.forEach((query) => query.addEventListener('change', handler));

    return () => mediaQueryList.forEach((query) => query.removeEventListener('change', handler));
  }, []);

  return values;
};

export default useMatchMedia;
