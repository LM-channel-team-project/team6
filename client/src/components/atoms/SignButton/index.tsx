import React from 'react';
import * as S from './style';

interface Props {
  background?: string;
  color?: string;
  title: string;
  icon?: string;
  alt?: string;
  type: 'submit';
  disabled?: boolean;
}

SignButton.defaultProps = {
  background: null,
  color: null,
  icon: null,
  alt: null,
  disabled: false,
};

export default function SignButton({
  background,
  color,
  title,
  icon,
  alt,
  type,
  disabled,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.Button
        background={background}
        color={color}
        type={type}
        disabled={disabled}
      >
        {icon ? <S.Icon src={icon} alt={alt} /> : null}
        <S.ButtonTitle>{title}</S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
}
