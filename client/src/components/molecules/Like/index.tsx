import React from 'react';
import * as S from './style';

function Like(): JSX.Element {
  return (
    <S.Container>
      <S.Icon className="fa fa-thumbs-up" aria-hidden="true" />
      <S.Count>100</S.Count>
    </S.Container>
  );
}

export default Like;
