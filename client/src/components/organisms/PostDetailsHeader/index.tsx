import React from 'react';
import backImg from 'assets/image/detail-pro.png';
import * as S from './style';

function PostDetailsHeader(): JSX.Element {
  return (
    <S.Container backImg={backImg}>
      <S.TitleBox>
        <S.Title>
          2020 신입 개발자 Oli가 말하는 “내가 DBA를 선택한 이유”
        </S.Title>
        <S.Date>2021.04.11</S.Date>
      </S.TitleBox>
    </S.Container>
  );
}

export default PostDetailsHeader;
