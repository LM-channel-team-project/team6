import React from 'react';
import * as S from './style';
import RelatedPostsHeader from '../RelatedPostsHeader';
import RelatedPostsBody from '../RelatedPostsBody';

export default function RelatedPosts(): JSX.Element {
  return (
    <S.RelatedPostsContainer>
      <RelatedPostsHeader />
      <RelatedPostsBody />
    </S.RelatedPostsContainer>
  );
}
