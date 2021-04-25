import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }
  ul, ol {
    list-style: none;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

`;

export default GlobalStyle;
