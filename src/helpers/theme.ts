const breakpoints = {
  tablet: 1024,
  mobile: 767,
  smallMobile: 600,
};

export const commonTheme = {
  media: {
    tablet: `@media (max-width: ${breakpoints.tablet}px)`,
    mobile: `@media (max-width: ${breakpoints.mobile}px)`,
    smallMobile: `@media (max-width: ${breakpoints.smallMobile}px)`,
  },
  breakpoints,
  colors: {
    primary: 'hsl(49, 97%, 50%)',
    secondary: 'hsl(217, 84%, 55%)',
    additional: 'hsl(352, 100%, 45%)',
    backdrop: 'hsla(0, 0%, 0%, 0.5)',
    avatarBackground: 'hsl(0, 0%, 78%)',
    black: 'hsl(0, 0%, 0%)',
    white: 'hsl(0, 0%, 100%)',
    text: {
      neutral: 'hsl(0, 0%, 50%)',
    },
  },
  fontFamily: {
    primary: 'Inter',
    header: 'Oswald',
  },
  zIndex: {
    swNotification: 1000,
    header: 101,
    selectedPlayerCard: 800,
    spinner: 100,
    modal: 999,
  },
};

const lightTheme = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
    success: 'hsl(120, 75%, 43%)',
    error: 'hsl(0, 100%, 65%)',
    warn: 'hsl(50, 100%, 65%)',
    background: 'hsl(0, 0%, 100%)',
    border: 'hsl(0, 0%, 0%)',
    borderContrast: 'hsl(0, 0%, 100%)',
    lighterBackground: 'hsl(0, 0%, 95%)',
    text: {
      ...commonTheme.colors.text,
      primary: 'hsl(0, 0%, 0%)',
      contrast: 'hsl(0, 0%, 100%)',
    },
  },
};

export const darkTheme = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
    success: 'hsl(120, 75%, 30%)',
    error: 'hsl(0, 100%, 30%)',
    warn: 'hsl(50, 100%, 50%)',
    background: 'hsl(0, 0%, 15%)',
    border: 'hsl(0, 0%, 100%)',
    borderContrast: 'hsl(0, 0%, 15%)',
    lighterBackground: 'hsl(0, 0%, 25%)',
    text: {
      ...commonTheme.colors.text,
      primary: 'hsl(0, 0%, 100%)',
      contrast: 'hsl(0, 0%, 0%)',
    },
  },
};

export default { light: lightTheme, dark: darkTheme };
