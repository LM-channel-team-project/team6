import React from 'react';
import SignUpHeader from 'components/molecules/SignUpHeader';
import SignUpFormBody from 'components/molecules/SignUpBody';
import Doge from 'assets/image/doge.png';
import * as S from './style';

export default function LoginEmailOrg(): JSX.Element {
  return (
    <S.Base>
      <S.Img src={Doge} alt="Doge" />
      <S.Container>
        <SignUpHeader />
        <SignUpFormBody />
      </S.Container>
    </S.Base>
  );
}
