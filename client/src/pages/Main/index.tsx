import React from 'react';
import RelatedPosts from 'components/templates/RelatedPosts';
import MainHeader from 'components/templates/MainHeader';
import * as S from './style';

export default function Main(): JSX.Element {
  return (
    <S.Container>
      <MainHeader />
      <RelatedPosts />
    </S.Container>
  );
}
