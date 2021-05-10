import React from 'react';
import * as S from './style';

interface Data {
  content: string;
  color: string;
}
interface Props {
  texts: Data[];
}

export default function DropDown({ texts }: Props): JSX.Element {
  return (
    <S.Container>
      <S.TriangleBlock />
      <S.DropDown>
        {texts.map((text) => (
          <S.DropDownContent color={text.color}>
            {text.content}
          </S.DropDownContent>
        ))}
      </S.DropDown>
    </S.Container>
  );
}
