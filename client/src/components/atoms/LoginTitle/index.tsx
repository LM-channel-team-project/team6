import React from 'react';
import { LOGIN_TITLE } from 'commons/constants/string';
import * as S from './style';

export default function LoginTitle(): JSX.Element {
  return (
    <S.Container>
      <S.Title>{LOGIN_TITLE}</S.Title>
    </S.Container>
  );
}
