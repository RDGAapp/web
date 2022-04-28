import { render } from '@testing-library/react';
import styled, { ThemeProvider } from 'styled-components';

import theme from 'helpers/theme';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
`;

describe('theme helper', () => {
  test('should return theme', () => {
    expect(theme.media).toEqual({
      tablet: '@media (max-width: 1024px)',
      mobile: '@media (max-width: 767px)',
    });
    expect(theme.breakpoints).toEqual({
      tablet: 1024,
      mobile: 767,
    });
    expect(theme.colors).toEqual({
      primary: '#fbcd04',
      secondary: '#2a74ed',
      background: '#ffffff',
      border: '#000000',
      borderContrast: '#ffffff',
      error: '#ff7f7f',
      success: '#90ee90',
      menuInactive: '#f3f3f3',
      backdrop: '#00000080',
      avatarBackground: '#c8c8c8',
      text: {
        primary: '#000000',
      },
    });
    expect(theme.fontFamily).toEqual({
      primary: 'Inter, sans-serif',
      header: 'Oswald, sans-serif',
    });
    expect(theme.zIndex).toEqual({
      swNotification: 1000,
    });
  });

  test('should use set variable from theme', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button data-testid="test_button" />
      </ThemeProvider>,
    );
    expect(getByTestId('test_button')).toHaveStyle('background-color: #fbcd04');
  });
});
