import React from 'react';
import LoginHeader from 'components/molecules/LoginHeader';
import LoginBody from 'components/molecules/LoginBody';
import Doge from 'assets/image/doge.png';
import * as S from './style';

export default function LoginEmailOrg(): JSX.Element {
  return (
    <S.Base>
      <S.Img src={Doge} alt="Doge" />
      <S.Container>
        <LoginHeader />
        <LoginBody />
      </S.Container>
    </S.Base>
  );
}
