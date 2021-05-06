import React from 'react';
import Img from 'components/atoms/Img';
import Text from 'components/atoms/Text';
import * as S from './style';

function User(): JSX.Element {
  return (
    <S.User>
      <Img />
      <Text />
    </S.User>
  );
}

export default User;
