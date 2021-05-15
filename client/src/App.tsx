import React from 'react';
import theme from 'commons/style/theme';
import GlobalStyle from 'commons/style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import { HOME_URL, LOGIN_URL, SIGN_UP_URL } from 'commons/constants/string';

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path={HOME_URL} component={Main} />
            <Route exact path={LOGIN_URL} component={Login} />
            <Route exact path={SIGN_UP_URL} component={SignUp} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
