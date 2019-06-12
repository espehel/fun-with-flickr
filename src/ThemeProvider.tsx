import React, { ReactNode } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { indigo, blue } from '@material-ui/core/colors';

interface Props {
  children: ReactNode;
}

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue,
    background: {
      default: '#eeeeee'
    }
  }
});

export const ThemeProvider = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
