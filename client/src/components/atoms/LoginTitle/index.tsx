import React from 'react';
import { LOGIN_TEXT } from 'commons/constants/string';
import * as S from './style';

export default function LoginTitle(): JSX.Element {
  return (
    <S.Container>
      <S.Title>{LOGIN_TEXT}</S.Title>
    </S.Container>
  );
}
