import React from 'react';
import BasicText from 'components/atoms/BasicText';
import InternalLink from 'components/atoms/InternalLink';
import {
  SIGN_UP_URL,
  SIGN_UP_WELCOME_TEXT,
  SIGN_UP_LINK_TEXT,
  LOGIN_EMAIL_TEXT,
  LOGIN_EMAIL_ALT,
} from 'commons/constants/string';
import SignButton from 'components/atoms/SignButton';
import LoginUserIcon from 'assets/image/login-user.png';
import * as S from './style';

export default function LoginBody(): JSX.Element {
  return (
    <S.Container>
      <S.ButtonContainer>
        <SignButton
          icon={LoginUserIcon}
          title={LOGIN_EMAIL_TEXT}
          alt={LOGIN_EMAIL_ALT}
          type="submit"
        />
      </S.ButtonContainer>
      <S.LinkContainer>
        <BasicText text={SIGN_UP_WELCOME_TEXT} />
        &nbsp;
        <InternalLink href={SIGN_UP_URL} text={SIGN_UP_LINK_TEXT} />
      </S.LinkContainer>
    </S.Container>
  );
}
