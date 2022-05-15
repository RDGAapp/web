import { render } from '@testing-library/react';

import { TownProvider } from 'hooks/TownContext';
import useShortTown from 'hooks/useShortTown';

const Container = () => {
  const town = useShortTown();

  return (<div>{town}</div>);
};

describe('useShortTown hook', () => {
  beforeEach(() => localStorage.clear());

  describe('without TownProvider', () => {
    test('should render empty value', () => {
      const { container } = render(<Container />);

      expect(container.firstChild?.textContent).toBe('');
    });
  });

  describe('with TownProvider', () => {
    test('should render shorten town from localStorage', () => {
      localStorage.setItem('town', 'Санкт-Петербург');
      const { container } = render(<TownProvider><Container /></TownProvider>);

      expect(container.firstChild?.textContent).toBe('spb');
    });

    test('should render empty if town not known', () => {
      localStorage.setItem('town', 'test');
      const { container } = render(<TownProvider><Container /></TownProvider>);

      expect(container.firstChild?.textContent).toBe('');
    });
  });
});
