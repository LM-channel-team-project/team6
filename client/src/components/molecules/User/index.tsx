import React from 'react';
import avatar from 'assets/image/avatar.png';
import * as S from './style';

interface Props {
  nickColor?: string;
}

User.defaultProps = {
  nickColor: '#fff',
};

function User({ nickColor }: Props): JSX.Element {
  return (
    <S.User>
      <S.Img src={avatar} alt="avatar" />
      <S.Span nickColor={nickColor}>by. user01</S.Span>
    </S.User>
  );
}

export default User;
