import React from 'react';
import LoginEmailHeader from 'components/molecules/LoginEmailHeader';
import LoginEmailBody from 'components/molecules/LoginEmailBody';
import Doge from 'assets/image/doge.png';
import * as S from './style';

export default function LoginEmailOrg(): JSX.Element {
  return (
    <S.Base>
      <S.Img src={Doge} alt="Doge" />
      <S.Container>
        <LoginEmailHeader />
        <LoginEmailBody />
      </S.Container>
    </S.Base>
  );
}
