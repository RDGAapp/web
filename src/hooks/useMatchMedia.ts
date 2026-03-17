import { useLayoutEffect, useState } from 'react';

interface UseMatchMedia {
  isSmallMobile: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const queries = [
  `(width <= 600px)`,
  `(width <= 767px)`,
  `(width <= 1024px) and (width > 767px)`,
  `(width > 1024px)`,
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
