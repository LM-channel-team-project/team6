import React from 'react';
import Doge from 'assets/image/doge.png';
import SignContent from 'components/organisms/SignContent';
import * as S from './style';

export default function DogeTemplate(): JSX.Element {
  return (
    <S.Container>
      <S.Img src={Doge} alt="Doge" />
      <SignContent />
    </S.Container>
  );
}
