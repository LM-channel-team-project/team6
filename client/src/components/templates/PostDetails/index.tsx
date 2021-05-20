import React from 'react';
import PostDetailsBody from 'components/organisms/PostDetailsBody';
import PostDetailsHeader from 'components/organisms/PostDetailsHeader';
import * as S from './style';

function PostDetails(): JSX.Element {
  return (
    <S.Container>
      <PostDetailsHeader />
      <PostDetailsBody />
    </S.Container>
  );
}

export default PostDetails;
