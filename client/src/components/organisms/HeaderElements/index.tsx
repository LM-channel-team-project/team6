import React, { useState } from 'react';
import Logo from 'components/atoms/Logo';
import SearchBar from 'components/atoms/SearchBar';
import DropDown from 'components/atoms/DropDown';
import HeaderText from 'components/atoms/HeaderText';
import HamburgurMenu from 'components/atoms/HamburgerMenu';
import dogeright from 'assets/image/dogeright.png';

import * as S from './style';

export default function HeaderElements(): JSX.Element {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const contents = [
    {
      id: 1,
      text: '글 쓰기',
      color: 'rgba(99, 99, 99, 1)',
      bottomBorder: false,
    },
    {
      id: 2,
      text: '[임시 버튼]',
      color: 'rgba(99, 99, 99, 1)',
      bottomBorder: true,
    },
    {
      id: 3,
      text: '마이페이지',
      color: 'rgba(99, 99, 99, 1)',
      bottomBorder: false,
    },
    {
      id: 4,
      text: '로그아웃',
      color: 'rgba(255, 73, 73, 0.82)',
      bottomBorder: false,
    },
  ];
  return (
    <S.Container>
      <Logo src={dogeright} />
      <S.HeaderTextWrapper>
        <HeaderText text="개: 발자 모임" />
      </S.HeaderTextWrapper>
      <SearchBar />
      <S.MenuDropDownWrapper>
        <S.HamburgurMenuWrapper>
          <HamburgurMenu
            isMenuClicked={isMenuClicked}
            setIsMenuClicked={setIsMenuClicked}
          />
        </S.HamburgurMenuWrapper>
        <S.DropDownWrapper>
          <DropDown contents={contents} isMenuClicked={isMenuClicked} />
        </S.DropDownWrapper>
      </S.MenuDropDownWrapper>
    </S.Container>
  );
}
