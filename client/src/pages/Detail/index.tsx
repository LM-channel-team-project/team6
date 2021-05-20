import React from 'react';
import MainHeader from 'components/templates/MainHeader';
import PostDetails from 'components/templates/PostDetails';
import * as S from './style';

function Detail(): JSX.Element {
  return (
    <S.Container>
      <MainHeader />
      <PostDetails />
    </S.Container>
  );
}

export default Detail;
