import React from 'react';
import { LOGIN_EMAIL_TITLE } from 'commons/constants/string';
import LoginTitle from 'components/atoms/LoginTitle';
import * as S from './style';

export default function LoginEmailHeader(): JSX.Element {
  return (
    <S.Container>
      <LoginTitle title={LOGIN_EMAIL_TITLE} fontSize="2rem" />
    </S.Container>
  );
}
