import React from 'react';
import CardList from 'components/templates/CardList';
import RelatedPosts from 'components/templates/RelatedPosts';
import MainHeader from 'components/templates/MainHeader';
import * as S from './style';

export default function Main(): JSX.Element {
  return (
    <S.Container>
      <CardList />
      <RelatedPosts />
    </S.Container>
  );
}
