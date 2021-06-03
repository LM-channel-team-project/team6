import React from 'react';
import LoginTitle from 'components/atoms/LoginTitle';
import ExternalLink from 'components/atoms/ExternalLink';
import BasicText from 'components/atoms/BasicText';
import {
  LOGIN_TITLE,
  LOGIN_LINK_TEXT,
  TEAM_GITHUB_URL,
  LOGIN_WELCOME_TEXT,
} from 'commons/constants/string';
import * as S from './style';

export default function LoginHeader(): JSX.Element {
  return (
    <S.Container>
      <S.TitleWrapper>
        <LoginTitle title={LOGIN_TITLE} fontSize="3rem" />
      </S.TitleWrapper>
      <S.LinkContentWrapper>
        <ExternalLink text={LOGIN_LINK_TEXT} href={TEAM_GITHUB_URL} />
        &nbsp;
        <BasicText text={LOGIN_WELCOME_TEXT} />
      </S.LinkContentWrapper>
    </S.Container>
  );
}
