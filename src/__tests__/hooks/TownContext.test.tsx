import { useContext } from 'react';

import { fireEvent, render } from '@testing-library/react';

import { TownProvider, TownContext } from 'hooks/TownContext';

const Button = () => {
  const { town, changeTown } = useContext(TownContext);

  return (<button type="button" onClick={() => changeTown('Белгород')}>{town}</button>);
};

describe('TownContext hook', () => {
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
      const { container } = render(<TownProvider><Button /></TownProvider>);

      expect(container.firstChild?.textContent).toBe('');

      fireEvent.click(container.firstChild as Element);

      expect(container.firstChild?.textContent).toBe('Белгород');
    });

    test('should render value from localStorage', () => {
      localStorage.setItem('town', 'predefined');
      const { container } = render(<TownProvider><Button /></TownProvider>);

      expect(container.firstChild?.textContent).toBe('predefined');
    });
  });
});
