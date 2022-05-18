const breakpoints = {
  tablet: 1024,
  mobile: 767,
};

const theme = {
  media: {
    tablet: `@media (max-width: ${breakpoints.tablet}px)`,
    mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  },
  breakpoints,
  colors: {
    primary: '#fbcd04',
    secondary: '#2a74ed',
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
  },
  fontFamily: {
    primary: 'Inter, sans-serif',
    header: 'Oswald, sans-serif',
  },
  zIndex: {
    swNotification: 1000,
    selectedPlayerCard: 1000,
    spinner: 1000,
  },
};

export default theme;
