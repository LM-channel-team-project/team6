import React from 'react';
import * as S from './style';

interface Props {
  text: string;
}

export default function BasicText({ text }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
