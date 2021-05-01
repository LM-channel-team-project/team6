import React from 'react';
import { CardBox } from './style';

function Card() {
  return (
    <CardBox>
      <div className="text-info">
        <h2 className="title">Title</h2>
        <span className="category"># JavaScript</span>
        <span className="category react"># React</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
          atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Harum, atque. atque. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Harum, atque.
        </p>
      </div>
      <div className="user-info">
        <img
          src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png"
          alt="avatar"
        />
        <span>by. user01</span>
      </div>
    </CardBox>
  );
}

export default Card;
