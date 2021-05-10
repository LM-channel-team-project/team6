import React from 'react';
import Card from 'components/organisms/Card';
import * as S from './style';

function CardList(): JSX.Element {
  return (
    <S.List>
      <Card />
    </S.List>
  );
}

export default CardList;
