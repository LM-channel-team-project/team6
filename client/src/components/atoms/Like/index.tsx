import React from 'react';
import * as S from './style';

interface LikeProps {
  count?: number;
}

Like.defaultProps = {
  count: 0,
};

function Like({ count }: LikeProps): JSX.Element {
  return <S.Count>{count}</S.Count>;
}

export default Like;
