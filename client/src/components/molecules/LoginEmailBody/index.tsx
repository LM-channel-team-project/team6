import React, { useState } from 'react';
import Input from 'components/atoms/Input';
import {
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PW,
  LOCAL_LOGIN_POST_API,
  LOGIN_URL,
  LOGIN_EMAIL_BACK_TEXT,
} from 'commons/constants/string';
import { loginEmailValidateInput } from 'utils/loginEmailValidateInput';
import SignButton from 'components/atoms/SignButton';
import InternalLink from 'components/atoms/InternalLink';
import axios from 'axios';
import * as S from './style';

export default function LoginEmailBody(): JSX.Element {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const isEnabled = loginEmailValidateInput(email, password);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(
        `${LOCAL_LOGIN_POST_API}`,
        {
          data: {
            email,
            password,
          },
        },
        { withCredentials: true },
      )
      .then((res) => {
        alert(`${res.status}: 로그인 성공`); // eslint-disable-line no-alert
      })
      .catch((error) => {
        alert(`${error}: 오류발생`); // eslint-disable-line no-alert
      });
  };
  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
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
        <SignButton
          title="로그인"
          background="#9564FF"
          color="white"
          type="submit"
          disabled={!isEnabled}
        />
      </S.Form>
      <InternalLink href={LOGIN_URL} text={LOGIN_EMAIL_BACK_TEXT} />
    </S.Container>
  );
}
