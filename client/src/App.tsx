import React from 'react';
import theme from 'commons/style/theme';
import GlobalStyle from 'commons/style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Login from 'pages/Login';

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
