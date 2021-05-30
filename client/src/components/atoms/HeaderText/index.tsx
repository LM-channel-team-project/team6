import React from 'react';
import * as S from './style';

interface Props {
  text: string;
}

export default function HeaderText({ text }: Props): JSX.Element {
  return <S.HeaderText>{text}</S.HeaderText>;
}
