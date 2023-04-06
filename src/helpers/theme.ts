const breakpoints = {
  tablet: 1024,
  mobile: 767,
  smallMobile: 600,
};

const theme = {
  media: {
    tablet: `@media (max-width: ${breakpoints.tablet}px)`,
    mobile: `@media (max-width: ${breakpoints.mobile}px)`,
    smallMobile: `@media (max-width: ${breakpoints.smallMobile}px)`,
  },
  breakpoints,
  colors: {
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

export default theme;
