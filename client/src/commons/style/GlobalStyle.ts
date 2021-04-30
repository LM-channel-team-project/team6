import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    max-width: 1440px;
    margin: auto;
    min-height: 100vh;
    border: 3px solid tomato;
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    background-color: #F8FAFB;
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
