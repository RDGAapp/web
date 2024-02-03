import { render } from '@testing-library/react';
import styled, { ThemeProvider } from 'styled-components';

import theme from 'helpers/theme';

const Button = styled.button`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primary};
`;

describe('theme helper', () => {
  test('should return theme', () => {
    expect(theme.light.media).toEqual({
      tablet: '@media (max-width: 1024px)',
      mobile: '@media (max-width: 767px)',
      smallMobile: '@media (max-width: 600px)',
    });
    expect(theme.light.breakpoints).toEqual({
      tablet: 1024,
      mobile: 767,
      smallMobile: 600,
    });
    expect(theme.light.colors).toEqual({
      primary: 'hsl(49, 97%, 50%)',
      secondary: 'hsl(217, 84%, 55%)',
      additional: 'hsl(352, 100%, 45%)',
      background: 'hsl(0, 0%, 100%)',
      border: 'hsl(0, 0%, 0%)',
      borderContrast: 'hsl(0, 0%, 100%)',
      success: 'hsl(120, 75%, 43%)',
      error: 'hsl(0, 100%, 65%)',
      warn: 'hsl(50, 100%, 65%)',
      lighterBackground: 'hsl(0, 0%, 95%)',
      backdrop: 'hsla(0, 0%, 0%, 0.5)',
      avatarBackground: 'hsl(0, 0%, 78%)',
      black: 'hsl(0, 0%, 0%)',
      white: 'hsl(0, 0%, 100%)',
      text: {
        primary: 'hsl(0, 0%, 0%)',
        contrast: 'hsl(0, 0%, 100%)',
        neutral: 'hsl(0, 0%, 50%)',
      },
    });
    expect(theme.light.fontFamily).toEqual({
      primary: 'Inter',
      header: 'Oswald',
    });
    expect(theme.light.zIndex).toEqual({
      swNotification: 1000,
      header: 101,
      selectedPlayerCard: 800,
      spinner: 100,
      modal: 999,
    });
  });

  test('should use set variable from theme', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme.light}>
        <Button data-testid='test_button' />
      </ThemeProvider>,
    );
    expect(getByTestId('test_button')).toHaveStyle('background-color: hsl(49, 97%, 50%)');
  });
});
