import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

interface Props {
  background?: string;
  color?: string;
  title: string;
  icon?: string;
  alt?: string;
  type: 'submit';
  disabled?: boolean;
  url?: string;
}

SignButton.defaultProps = {
  background: null,
  color: null,
  icon: null,
  alt: null,
  disabled: false,
  url: null,
};

export default function SignButton({
  background,
  color,
  title,
  icon,
  alt,
  type,
  disabled,
  url,
}: Props): JSX.Element {
  return (
    <S.Container>
      {url ? (
        <Link to={url}>
          <S.Button
            background={background}
            color={color}
            disabled={disabled}
            type={type}
          >
            {icon ? <S.Icon src={icon} alt={alt} /> : null}
            <S.ButtonTitle>{title}</S.ButtonTitle>
          </S.Button>
        </Link>
      ) : (
        <S.Button
          background={background}
          color={color}
          disabled={disabled}
          type={type}
        >
          {icon ? <S.Icon src={icon} alt={alt} /> : null}
          <S.ButtonTitle>{title}</S.ButtonTitle>
        </S.Button>
      )}
    </S.Container>
  );
}
