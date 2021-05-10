import React from 'react';
import Logo from 'components/atoms/Logo';
import HeaderNavLink from 'components/molecules/HeaderNavLink';
import SearchBar from 'components/atoms/SearchBar';
import DropDown from 'components/atoms/DropDown';
import userphoto from 'assets/image/userphoto.png';
// 왜 styledComponent를 먼저 import하면 안 되지?
import * as S from './style';

const texts = [
  { content: '마이페이지', color: '#5072A5' },
  { content: '로그아웃', color: '#8000FF' },
];
export default function MainHeader(): JSX.Element {
  return (
    <S.Container>
      <HeaderNavLink />
      <SearchBar />
      <S.SubContainer>
        <DropDown texts={texts} />

        <Logo imageSrc={userphoto} dir="right" />
      </S.SubContainer>
    </S.Container>
  );
}
