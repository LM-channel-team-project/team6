import React from 'react';
import User from 'components/molecules/User';
import detailImg from 'assets/image/detail-img.png';
import Like from 'components/atoms/Like';
import * as S from './style';

function PostDetailsBody(): JSX.Element {
  return (
    <S.Container>
      <User />
      <S.ImgBox>
        <S.Img src={detailImg} />
      </S.ImgBox>
      <S.Text>
        다양한 서비스에 맞춰진 국내 최대 규모의 데이터베이스를 효율적으로
        관리하는 경험을 할 수 있는 카카오 DBA Oli의 이야기 안녕하세요. 2020 신입
        개발자 블라인드 공채로 입사한 Oli입니다. 컴퓨터공학 전공은 아니나 평소에
        다양한 분야 다양한 서비스에 맞춰진 국내 최대 규모의 데이터베이스를
        효율적으로 관리하는 경험을 할 수 있는 카카오 DBA Oli의 이야기
        안녕하세요. 2020 신입 개발자 블라인드 공채로 입사한 Oli입니다.
        컴퓨터공학 전공은 아니나 평소에
      </S.Text>
      <S.Box>
        <Like count={2629} />
      </S.Box>
    </S.Container>
  );
}

export default PostDetailsBody;
