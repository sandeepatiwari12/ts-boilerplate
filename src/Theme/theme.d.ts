import { ThemeOptions, PaletteOptions, Theme, ThemeCssOverrides } from '@mui/material';
import React from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties['color'];
    };
  }
  interface PaletteOptions {
    neutral: {
      main: string;
      contrastText: string;
    };
  }
}
