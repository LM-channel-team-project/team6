import React from 'react';
import Logo from 'components/atoms/Logo';
import TextLink from 'components/atoms/TextLink';
import house from 'assets/image/house.png';
import { Link } from 'react-router-dom';
import * as S from './style';

export default function HeaderNavLink(): JSX.Element {
  return (
    <S.Container>
      <Link to="/">
        <Logo imageSrc={house} dir="left" />
      </Link>
      <S.ContainerWrap>
        <TextLink text=" About" linkLocation="/about" />

        <TextLink text="Post" linkLocation="/post" />
        <TextLink text="Chat" linkLocation="/chat" />
      </S.ContainerWrap>
    </S.Container>
  );
}
