import React from 'react';
import LoginHeader from 'components/molecules/LoginHeader';
import LoginBody from 'components/molecules/LoginBody';
import * as S from './style';

export default function LoginContent(): JSX.Element {
  return (
    <S.Container>
      <LoginHeader />
      <LoginBody />
    </S.Container>
  );
}
