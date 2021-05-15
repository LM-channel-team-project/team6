import React from 'react';
import Input from 'components/atoms/Input';
import SignButton from 'components/atoms/SignButton';
import {
  PLACEHOLDER_USERNAME,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PW,
  PLACEHOLDER_CONFIRM_PW,
} from 'commons/constants/string';
import * as S from './style';

export default function SignUpBody(): JSX.Element {
  return (
    <S.Container>
      <Input type="input" placeholder={PLACEHOLDER_USERNAME} />
      <Input type="email" placeholder={PLACEHOLDER_EMAIL} />
      <Input type="password" placeholder={PLACEHOLDER_PW} />
      <Input type="password" placeholder={PLACEHOLDER_CONFIRM_PW} />
      <SignButton title="회원 가입" background="#9564FF" color="white" />
    </S.Container>
  );
}
