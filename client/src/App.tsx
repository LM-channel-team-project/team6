import React from 'react';
import theme from 'commons/style/theme';
import GlobalStyle from 'commons/style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import {
  HOME_URL,
  LOGIN_URL,
  SIGN_UP_URL,
  LOGIN_EMAIL_URL,
} from 'commons/constants/string';
import Detail from 'pages/Detail';
import LoginEmail from 'pages/LoginEmail';
import NotFound from 'pages/NotFound';

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path={HOME_URL} component={Main} />
            <Route exact path={LOGIN_URL} component={Login} />
            <Route exact path={LOGIN_EMAIL_URL} component={LoginEmail} />
            <Route exact path={SIGN_UP_URL} component={SignUp} />
            <Route path="/detail/:id" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
