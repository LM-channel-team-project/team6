import React from 'react';
import * as S from './style';

export default function SearchBar(): JSX.Element {
  return (
    <S.Container>
      <S.SearchText type="search" placeholder="Search..." />
      <S.SearchIcon>
        <i className="fa fa-search" />
      </S.SearchIcon>
    </S.Container>
  );
}
