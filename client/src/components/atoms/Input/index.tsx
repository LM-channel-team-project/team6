import React from 'react';
import * as S from './style';

interface Props {
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder: string;
}

export default function Input({
  type,
  name,
  value,
  onChange,
  placeholder,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </S.Container>
  );
}
