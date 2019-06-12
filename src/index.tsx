import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import WebFontLoader from 'webfontloader';

import './styles/index.scss';

import App from './App';
import { ThemeProvider } from './ThemeProvider';
import ErrorBoundary from './ErrorBoundary';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
});

ReactDOM.render(
  <ThemeProvider>
    <ErrorBoundary>
      <CssBaseline />
      <App />
    </ErrorBoundary>
  </ThemeProvider>,
  document.getElementById('root')
);
