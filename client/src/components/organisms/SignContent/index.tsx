import React from 'react';
import LoginHeader from 'components/molecules/LoginHeader';
import LoginBody from 'components/molecules/LoginBody';
import SignUpHeader from 'components/molecules/SignUpHeader';
import SignUpBody from 'components/molecules/SignUpBody';
import { useLocation } from 'react-router';
import { LOGIN_URL } from 'commons/constants/string';
import * as S from './style';

export default function SignContent(): JSX.Element {
  const location = useLocation();
  return (
    <S.Container>
      {location.pathname === LOGIN_URL ? (
        <>
          <LoginHeader />
          <LoginBody />
        </>
      ) : (
        <>
          <SignUpHeader />
          <SignUpBody />
        </>
      )}
    </S.Container>
  );
}
