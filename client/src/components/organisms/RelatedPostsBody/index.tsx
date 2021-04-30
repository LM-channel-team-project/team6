import React from 'react';
import RelatedPostsCell from 'components/molecules/RelatedPostsCell';
import * as S from './style';

export default function RelatedPostsBody(): JSX.Element {
  return (
    <S.Container>
      <RelatedPostsCell />
    </S.Container>
  );
}
