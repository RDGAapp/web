import { render } from '@testing-library/react';

import { CityProvider } from 'hooks/CityContext';
import useShortCity from 'hooks/useShortCity';

const Container = () => {
  const city = useShortCity();

  return (<div>{city}</div>);
};

describe('useShortCity hook', () => {
  beforeEach(() => localStorage.clear());

  describe('without CityProvider', () => {
    test('should render empty value', () => {
      const { container } = render(<Container />);

      expect(container.firstChild?.textContent).toBe('');
    });
  });

  describe('with CityProvider', () => {
    test('should render shorten city from localStorage', () => {
      localStorage.setItem('city', 'Санкт-Петербург');
      const { container } = render(<CityProvider><Container /></CityProvider>);

      expect(container.firstChild?.textContent).toBe('spb');
    });

    test('should render empty if city not known', () => {
      localStorage.setItem('city', 'test');
      const { container } = render(<CityProvider><Container /></CityProvider>);

      expect(container.firstChild?.textContent).toBe('');
    });
  });
});
