import React from 'react';
import * as S from './style';

interface Props {
  imageSrc: string;
  dir: string;
}

export default function Logo({ imageSrc, dir }: Props): JSX.Element {
  return <S.Logo src={imageSrc} dir={dir} />;
}
