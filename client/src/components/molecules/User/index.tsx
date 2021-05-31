import React from 'react';
import avatar from 'assets/image/avatar.png';
import * as S from './style';

interface UserProps {
  imgSize?: string;
  textSize?: string;
}

User.defaultProps = {
  imgSize: '50px',
  textSize: '14px',
};

function User({ imgSize, textSize }: UserProps): JSX.Element {
  return (
    <S.User>
      <S.Img src={avatar} alt="avatar" imgSize={imgSize} />
      <S.Box>
        <S.Author textSize={textSize}>Author&nbsp;&minus;</S.Author>
        <S.Nickname textSize={textSize}>oli</S.Nickname>
      </S.Box>
    </S.User>
  );
}

export default User;
