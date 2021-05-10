import React from 'react';
import * as S from './style';

interface Props {
  text: string;
  // Link location created by concatenating the location’s pathname, search, and hash properties.
  linkLocation: string;
}
export default function TextLink({ text, linkLocation }: Props): JSX.Element {
  return <S.TextLink to={linkLocation}>{text}</S.TextLink>;
}
