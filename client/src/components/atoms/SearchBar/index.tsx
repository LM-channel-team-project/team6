import React from 'react';
import * as S from './style';

export default function SearchBar(): JSX.Element {
  return (
    <S.Container>
      <S.SearchIcon>
        <i className="fa fa-search" style={{ color: '#B0B0B0' }} />
      </S.SearchIcon>
      <S.SearchText type="search" />
    </S.Container>
  );
}
