import React from 'react';
import RelatedPostsBody from 'components/organisms/RelatedPostsBody';
import RelatedPostsHeader from 'components/organisms/RelatedPostsHeader';
import * as S from './style';

export default function RelatedPosts(): JSX.Element {
  return (
    <S.Container>
      <RelatedPostsHeader />
      <RelatedPostsBody />
    </S.Container>
  );
}
