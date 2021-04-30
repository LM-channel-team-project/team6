import React from 'react';
import * as S from './style';

interface Props {
  title: string;
}

export default function Button({ title }: Props): JSX.Element {
  return <S.Button>{title}</S.Button>;
}
