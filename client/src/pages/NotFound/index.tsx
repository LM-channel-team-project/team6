import React from 'react';
import MainHeader from 'components/templates/MainHeader';
import dogeflight from 'assets/image/dogeflight.png';
import worldwide from 'assets/image/worldwide.png';
import mars from 'assets/image/mars.png';

import * as S from './style';

export default function NotFound(): JSX.Element {
  return (
    <S.Container>
      <MainHeader />
      <S.Content>
        <S.TextWrapper>
          <S.Text style={{ fontSize: '144px' }}>404</S.Text>
          <S.Text
            style={{ fontSize: '36px', color: 'rgba(201, 110, 233, 0.93)' }}
          >
            Page not found
          </S.Text>
          <S.Text style={{ fontSize: '18px', color: 'rgba(166, 166, 166, 1)' }}>
            Because, Doge went to the Mars.{' '}
          </S.Text>
        </S.TextWrapper>
        <S.ImageWrapper>
          <S.Image
            src={worldwide}
            style={{
              width: '260px',
              height: '260px',
              left: '0',
              bottom: '0',
            }}
          />
          <S.Image
            src={dogeflight}
            style={{ width: '133px', height: '130px', top: '0', right: '20%' }}
          />
          <S.Image
            src={mars}
            style={{
              width: '110px',
              height: '110px',

              right: '0',
              top: '30%',
            }}
          />
        </S.ImageWrapper>
      </S.Content>
    </S.Container>
  );
}
