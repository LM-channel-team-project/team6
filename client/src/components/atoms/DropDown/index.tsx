import React from 'react';
import * as S from './style';

interface Data {
  id: number;
  text: string;
  color: string;
  bottomBorder: boolean;
}
interface Props {
  contents: Data[];
  isMenuClicked: boolean;
}

export default function DropDown({
  contents,
  isMenuClicked,
}: Props): JSX.Element {
  return (
    <S.DropDown isMenuClicked={isMenuClicked}>
      {contents.map((content) => (
        <S.DropDownContent
          key={content.id}
          color={content.color}
          bottomBorder={content.bottomBorder}
        >
          {content.text}
        </S.DropDownContent>
      ))}
    </S.DropDown>
  );
}
