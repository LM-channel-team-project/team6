import React from 'react';
import * as S from './style';

interface Props {
  title: string;
  icon: string;
  alt: string;
}

export default function LoginButton({ title, icon, alt }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Button>
        <S.Icon src={icon} alt={alt} />
        <S.ButtonTitle>{title}</S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
}
