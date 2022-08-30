import { render } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';

import useMatchMedia from 'hooks/useMatchMedia';

const Container = () => {
  const { isSmallMobile, isMobile, isTablet, isDesktop } = useMatchMedia();

  return (<div>{`smallMobile: ${isSmallMobile}, mobile: ${isMobile}, tablet: ${isTablet}, desktop: ${isDesktop}`}</div>);
};

describe('useMatchMedia hook', () => {
  let matchMedia: MatchMediaMock;

  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test('should show all false', () => {
    const { container } = render(<Container />);

    expect(container.firstChild?.textContent).toBe('smallMobile: false, mobile: false, tablet: false, desktop: false');

    expect(matchMedia.getMediaQueries()).toEqual([
      '(max-width: 600px)',
      '(max-width: 767px)',
      '(max-width: 1024px) and (min-width: 767px)',
      '(min-width: 1024px)',
    ]);

    expect(matchMedia.getListeners('(max-width: 600px)')).toEqual([expect.any(Function)]);
    expect(matchMedia.getListeners('(max-width: 767px)')).toEqual([expect.any(Function)]);
    expect(matchMedia.getListeners('(max-width: 1024px) and (min-width: 767px)')).toEqual([expect.any(Function)]);
    expect(matchMedia.getListeners('(min-width: 1024px)')).toEqual([expect.any(Function)]);

    matchMedia.useMediaQuery('(max-width: 600px)');
    matchMedia.useMediaQuery('(max-width: 767px)');
    matchMedia.useMediaQuery('(max-width: 1024px) and (min-width: 767px)');
    matchMedia.useMediaQuery('(min-width: 1024px)');

    expect(container.firstChild?.textContent).toBe('smallMobile: false, mobile: false, tablet: false, desktop: false');
  });
});
