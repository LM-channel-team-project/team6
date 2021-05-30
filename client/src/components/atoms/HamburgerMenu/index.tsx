import React from 'react';
import * as S from './style';

interface Props {
  isMenuClicked: boolean;
  setIsMenuClicked: (value: boolean) => void;
}
export default function HamburgurMenu({
  isMenuClicked,
  setIsMenuClicked,
}: Props): JSX.Element {
  function onClickMenu(): void {
    setIsMenuClicked(!isMenuClicked);
  }
  return (
    <S.ListsWrapper
      onClick={onClickMenu}
      isMenuClicked={isMenuClicked}
    >
      <S.ListElement />
      <S.ListElement />
      <S.ListElement />
    </S.ListsWrapper>
    // </S.Container>
  );
}
