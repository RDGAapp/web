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
      smallMobile: '@media (max-width: 600px)',
    });
    expect(theme.breakpoints).toEqual({
      tablet: 1024,
      mobile: 767,
      smallMobile: 600,
    });
    expect(theme.colors).toEqual({
      primary: '#fbcd04',
      secondary: '#2a74ed',
      additional: '#e30020',
      background: '#ffffff',
      border: '#000000',
      borderContrast: '#ffffff',
      error: '#ff4a4a',
      success: '#1bbe1b',
      menuInactive: '#f3f3f3',
      backdrop: '#00000080',
      avatarBackground: '#c8c8c8',
      text: {
        primary: '#000000',
        contrast: '#ffffff',
        neutral: '#808080',
      },
    });
    expect(theme.fontFamily).toEqual({
      primary: 'Inter',
      header: 'Oswald',
    });
    expect(theme.zIndex).toEqual({
      swNotification: 1000,
      header: 101,
      selectedPlayerCard: 800,
      spinner: 100,
      modal: 999,
    });
  });

  test('should use set variable from theme', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button data-testid='test_button' />
      </ThemeProvider>
    );
    expect(getByTestId('test_button')).toHaveStyle('background-color: #fbcd04');
  });
});
