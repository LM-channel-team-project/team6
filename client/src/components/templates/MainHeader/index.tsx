import React from 'react';
import HeaderElements from 'components/organisms/HeaderElements';

import * as S from './style';

export default function MainHeader(): JSX.Element {
  return (
    <S.Container>
      <HeaderElements />
    </S.Container>
  );
}
