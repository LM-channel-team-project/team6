import React from 'react';
import * as S from './style';

interface Props {
  title: string;
  fontSize: string;
}

export default function LoginTitle({ title, fontSize }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Title fontSize={fontSize}>{title}</S.Title>
    </S.Container>
  );
}
