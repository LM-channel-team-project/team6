import React from 'react';
import * as S from './style';

interface Props {
  background?: string;
  color?: string;
  title: string;
  icon?: string;
  alt?: string;
}

SignButton.defaultProps = {
  background: null,
  color: null,
  icon: null,
  alt: null,
};

export default function SignButton({
  background,
  color,
  title,
  icon,
  alt,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.Button background={background} color={color}>
        {icon ? <S.Icon src={icon} alt={alt} /> : null}
        <S.ButtonTitle>{title}</S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
}
