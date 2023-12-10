import { useLayoutEffect, useState } from 'react';

import { commonTheme } from 'helpers/theme';

interface UseMatchMedia {
  isSmallMobile: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const queries = [
  `(max-width: ${commonTheme.breakpoints.smallMobile}px)`,
  `(max-width: ${commonTheme.breakpoints.mobile}px)`,
  `(max-width: ${commonTheme.breakpoints.tablet}px) and (min-width: ${
    commonTheme.breakpoints.mobile - 1
  }px)`,
  `(min-width: ${commonTheme.breakpoints.tablet}px)`,
];

const useMatchMedia = (): UseMatchMedia => {
  const mediaQueryList = queries.map((query) => matchMedia(query));

  const getValues = (): UseMatchMedia =>
    ['isSmallMobile', 'isMobile', 'isTablet', 'isDesktop'].reduce(
      (result, screen, index) => ({
        ...result,
        [screen]: mediaQueryList[index].matches,
      }),
      {} as UseMatchMedia,
    );

  const [values, setValues] = useState<UseMatchMedia>(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryList.forEach((query) =>
      query.addEventListener('change', handler),
    );

    return () =>
      mediaQueryList.forEach((query) =>
        query.removeEventListener('change', handler),
      );
  }, []);

  return values;
};

export default useMatchMedia;
