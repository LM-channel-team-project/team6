import React from 'react';
import Button from 'components/atoms/Button';
import {
  RELATED_POSTS_TITLE,
  RELATED_POSTS_CREATE_BUTTON,
  RELATED_POSTS_SORT,
} from 'commons/constants/string';
import * as S from './style';

export default function RelatedPostsHeader(): JSX.Element {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.TitleWrapper>
          <S.Title>{RELATED_POSTS_TITLE}</S.Title>
        </S.TitleWrapper>
        <S.LinkWrapper>
          {RELATED_POSTS_SORT.map((sort) => (
            <S.Link key={sort}>{sort}</S.Link>
          ))}
        </S.LinkWrapper>
        <S.ButtonWrapper>
          <Button title={RELATED_POSTS_CREATE_BUTTON} />
        </S.ButtonWrapper>
      </S.HeaderContainer>
    </S.Container>
  );
}
