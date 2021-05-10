import React from 'react';
import avatar from 'assets/image/avatar.png';
import * as S from './style';

function Img(): JSX.Element {
  return <S.Img src={avatar} alt="avatar" />;
}

export default Img;
