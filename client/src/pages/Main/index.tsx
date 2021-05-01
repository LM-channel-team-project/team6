import React from 'react';
import RelatedPosts from 'components/templates/RelatedPosts';
import * as S from './style';

export default function Main(): JSX.Element {
  return (
    <S.Container>
      <RelatedPosts />
    </S.Container>
  );
}
