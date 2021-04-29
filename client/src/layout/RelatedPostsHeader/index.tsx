import React from 'react';
import Button from 'components/Button';
import * as S from './style';

export default function RelatedPostsHeader(): JSX.Element {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.TitleWrapper>
          <S.Title>Related Posts</S.Title>
        </S.TitleWrapper>
        <S.LinkWrapper>
          <S.Link>Week</S.Link>
          <S.Link>Latest</S.Link>
          <S.Link>Feed</S.Link>
        </S.LinkWrapper>
        <S.ButtonWrapper>
          <Button title="Create New Posts" />
        </S.ButtonWrapper>
      </S.HeaderContainer>
    </S.Container>
  );
}
