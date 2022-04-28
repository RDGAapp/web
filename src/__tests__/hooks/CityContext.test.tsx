import { useContext } from 'react';

import { fireEvent, render } from '@testing-library/react';

import { CityProvider, CityContext } from 'hooks/CityContext';

const Button = () => {
  const { city, changeCity } = useContext(CityContext);

  return (<button type="button" onClick={() => changeCity('test')}>{city}</button>);
};

describe('CityContext hook', () => {
  beforeEach(() => localStorage.clear());

  describe('without Provider', () => {
    test('should render empty', () => {
      const { container } = render(<Button />);

      expect(container.firstChild?.textContent).toBe('');

      fireEvent.click(container.firstChild as Element);

      expect(container.firstChild?.textContent).toBe('');
    });
  });

  describe('with Provider', () => {
    test('should render empty and rerender on click', () => {
      const { container } = render(<CityProvider><Button /></CityProvider>);

      expect(container.firstChild?.textContent).toBe('');

      fireEvent.click(container.firstChild as Element);

      expect(container.firstChild?.textContent).toBe('test');
    });

    test('should render value from localStorage', () => {
      localStorage.setItem('city', 'predefined');
      const { container } = render(<CityProvider><Button /></CityProvider>);

      expect(container.firstChild?.textContent).toBe('predefined');
    });
  });
});
