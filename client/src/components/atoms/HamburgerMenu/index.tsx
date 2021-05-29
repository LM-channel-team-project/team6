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
  // event type 다시 설정
  function onClickMenu(e: any): void {
    setIsMenuClicked(!isMenuClicked);
  }
  return (
    // <S.Container isMenuClicked={isMenuClicked}>
    <S.ListsWrapper
      onClick={(e) => onClickMenu(e)}
      isMenuClicked={isMenuClicked}
    >
      <S.ListElement />
      <S.ListElement />
      <S.ListElement />
    </S.ListsWrapper>
    // </S.Container>
  );
}
