import React from 'react';
import LoginHeader from 'components/molecules/LoginHeader';
import LoginBody from 'components/molecules/LoginBody';
import LoginEmailHeader from 'components/molecules/LoginEmailHeader';
import LoginEmailBody from 'components/molecules/LoginEmailBody';
import SignUpHeader from 'components/molecules/SignUpHeader';
import SignUpFormBody from 'components/molecules/SignUpBody';
import { useLocation } from 'react-router';
import {
  LOGIN_URL,
  LOGIN_EMAIL_URL,
  SIGN_UP_URL,
} from 'commons/constants/string';
import * as S from './style';

export default function SignContent(): JSX.Element {
  const location = useLocation();
  const pathName = location.pathname;

  const getLoginPage = (url: string) => {
    switch (url) {
      case LOGIN_URL:
        return (
          <>
            <LoginHeader />
            <LoginBody />
          </>
        );
      case LOGIN_EMAIL_URL:
        return (
          <>
            <LoginEmailHeader />
            <LoginEmailBody />
          </>
        );
      case SIGN_UP_URL:
        return (
          <>
            <SignUpHeader />
            <SignUpFormBody />
          </>
        );
      default:
        return null;
    }
  };
  return <S.Container>{getLoginPage(pathName)}</S.Container>;
}
