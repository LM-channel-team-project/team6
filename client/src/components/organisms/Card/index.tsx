import React from 'react';
import Category from 'components/atoms/Category';
import User from 'components/molecules/User';
import bg from 'assets/image/bg.png';
import * as S from './style';

function Card(): JSX.Element {
  return (
    <S.CardContainer background={bg}>
      <div className="text-info">
        <h2 className="title">Title</h2>
        <Category categories="javascript" />
        <Category categories="react" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
          atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Harum, atque. atque. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Harum, atque.
        </p>
      </div>
      <div className="user-info">
        <User />
      </div>
    </S.CardContainer>
  );
}

export default Card;
