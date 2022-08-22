import { createTheme } from '@mui/material';
import colors from './colors';

const theme = createTheme({
  status: {
    danger: colors.orange,
  },
  palette: {
    mode: 'light',
    primary: {
      main: colors.black,
    },
    secondary: {
      main: colors.secondary,
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: "'Inter-Regular'",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
  },
});

export default theme;
