import React from 'react';
import * as S from './style';

interface Props {
  href: string;
  text: string;
}

export default function ExternalLink({ href, text }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Anchor href={href} target="_blank">
        <S.Text>{text}</S.Text>
      </S.Anchor>
    </S.Container>
  );
}
