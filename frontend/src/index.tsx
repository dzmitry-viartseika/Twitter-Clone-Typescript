import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from '@material-ui/core';
import { theme } from './theme';
import './assets/css/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);