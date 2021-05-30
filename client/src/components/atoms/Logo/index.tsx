import React from 'react';
import * as S from './style';

interface Props {
  src: string;
}

export default function Logo({ src }: Props): JSX.Element {
  return <S.Logo src={src} />;
}
