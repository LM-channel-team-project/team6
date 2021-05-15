import React from 'react';
import BasicText from 'components/atoms/BasicText';
import InternalLink from 'components/atoms/InternalLink';
import {
  SIGN_UP_ALREADY_SIGN_UP_TEXT,
  LOGIN_URL,
  LOGIN_TEXT,
} from 'commons/constants/string';
import * as S from './style';

export default function SignUpHeader(): JSX.Element {
  return (
    <S.Container>
      <S.LinkContentWrapper>
        <BasicText text={SIGN_UP_ALREADY_SIGN_UP_TEXT} /> &nbsp;
        <InternalLink href={LOGIN_URL} text={LOGIN_TEXT} />
      </S.LinkContentWrapper>
    </S.Container>
  );
}
