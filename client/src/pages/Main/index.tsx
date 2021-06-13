import React from 'react';
import RelatedPosts from 'components/templates/RelatedPosts';
import MainHeader from 'components/templates/MainHeader';
import Carousel from 'components/organisms/Carousel';
import * as S from './style';

export default function Main(): JSX.Element {
  return (
    <S.Container>
      <MainHeader />
      <Carousel />
      <RelatedPosts />
    </S.Container>
  );
}
