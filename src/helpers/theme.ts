const theme = {
  media: {
    tablet: '@media (max-width: 1024px)',
    mobile: '@media (max-width: 767px)',
  },
  breakpoints: {
    tablet: 1024,
    mobile: 767,
  },
  colors: {
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
  },
  fontFamily: {
    primary: 'Inter, sans-serif',
    header: 'Oswald, sans-serif',
  },
  zIndex: {
    swNotification: 1000,
  },
};

export default theme;
