import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'commons/style/GlobalStyle';
import theme from 'commons/style/theme';
import RelatedPosts from 'components/templates/RelatedPosts';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
      <RelatedPosts />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
