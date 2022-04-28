import { act, render } from '@testing-library/react';

import useWindowDimensions from 'hooks/useWindowDimensions';

const Container = () => {
  const { width, height } = useWindowDimensions();

  return (<div>{`width: ${width}, height: ${height}`}</div>);
};

describe('useWindowDimensions hook', () => {
  test('should render with current width and height', () => {
    const { container } = render(<Container />);

    expect(container.firstChild?.textContent).toBe('width: 1024, height: 768');
  });

  test('should rerender on resize', () => {
    const { container } = render(<Container />);

    expect(container.firstChild?.textContent).toBe('width: 1024, height: 768');

    act(() => {
      window.innerWidth = 500;
      window.innerHeight = 500;
      window.dispatchEvent(new Event('resize'));
    });

    expect(container.firstChild?.textContent).toBe('width: 500, height: 500');
  });
});
