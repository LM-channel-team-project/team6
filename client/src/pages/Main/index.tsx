import React from 'react';
import MainHeader from 'components/templates/MainHeader';
import RelatedPosts from 'components/templates/RelatedPosts';
import * as S from './style';

export default function Main(): JSX.Element {
  return (
    <S.Container>
      <MainHeader />
      <RelatedPosts />
    </S.Container>
  );
}
