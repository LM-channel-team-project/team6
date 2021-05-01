import React from 'react';
import image from 'assets/image/pro.jpeg';
import * as S from './style';

export default function RelatedPostsCell(): JSX.Element {
  // ! 임시 하드코딩
  const postsTitle = '2020 신입 개발자 Oli가 말하는 내가 "DBA를 선택한 이유"';
  const postsContent =
    '다양한 서비스에 맞춰진 국내 최대 규모의 데이터베이스를 효율적으로 관리하는 경험을 할 수 있는 카카오 DBA Oli의 이야기 안녕하세요. 2020 신입 개발자 블라인드 공채로 입사한 Oli입니다. 컴퓨터공학 전공은 아니나 평소에 다양한 분야에 관심이 많았기에 대학';
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Title>{postsTitle}</S.Title>
        <S.Date>2020.04.11</S.Date>
        <S.Content>{postsContent}</S.Content>
      </S.ContentWrapper>
      <S.ImageWrapper>
        <S.Image src={image} alt="image" />
      </S.ImageWrapper>
    </S.Container>
  );
}
