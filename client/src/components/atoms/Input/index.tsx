import React from 'react';
import * as S from './style';

interface Props {
  type: string;
  placeholder: string;
}

export default function Input({ type, placeholder }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Input type={type} placeholder={placeholder} />
    </S.Container>
  );
}
