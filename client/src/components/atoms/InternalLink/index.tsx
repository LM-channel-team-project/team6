import React from 'react';
import * as S from './style';

interface Props {
  href: string;
  text: string;
}

export default function InternalLink({ href, text }: Props): JSX.Element {
  return (
    <S.Container>
      <S.InternalLink to={href}>
        <S.Text>{text}</S.Text>
      </S.InternalLink>
    </S.Container>
  );
}
