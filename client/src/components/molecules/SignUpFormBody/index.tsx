import React, { useState } from 'react';
import Input from 'components/atoms/Input';
import SignButton from 'components/atoms/SignButton';
import {
  PLACEHOLDER_USERNAME,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PW,
  PLACEHOLDER_CONFIRM_PW,
  SIGN_UP_POST_API,
} from 'commons/constants/string';
import axios from 'axios';
import * as S from './style';

export default function SignUpFormBody(): JSX.Element {
  const [inputs, setInputs] = useState({
    user: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { user, email, password, confirmPassword } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: SIGN_UP_POST_API,
      data: {
        user,
        email,
        password,
      },
    })
      .then((res) => {
        alert(`${res.status}: 회원가입 성공`);
      })
      .catch((error) => {
        alert(`${error}: 오류발생`);
      });
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <Input
          type="input"
          name="user"
          value={user}
          onChange={onChange}
          placeholder={PLACEHOLDER_USERNAME}
        />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder={PLACEHOLDER_EMAIL}
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder={PLACEHOLDER_PW}
        />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          placeholder={PLACEHOLDER_CONFIRM_PW}
        />
        <SignButton
          title="회원 가입"
          background="#9564FF"
          color="white"
          type="submit"
        />
      </S.Form>
    </S.Container>
  );
}
