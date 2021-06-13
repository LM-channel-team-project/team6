import React, { useState, useMemo, useEffect } from 'react';
import src from 'assets/image/arrow.png';
import bg from 'assets/image/slide1.png';
import * as S from './style';

function Carousel(): JSX.Element {
  const [list, setList] = useState([
    {
      id: 1,
      title: '1번 Carousel',
      content: `1번 Carousel 1번 Carousel 1번 Carousel 1번 Carousel `,
      bg,
    },
    {
      id: 2,
      title: '2번 Carousel',
      content: `다양한 서비스에 맞춰진 국내 최대 규모의 데이터베이스를 효율적으로
    관리하는 경험을 할 수 있는 카카오 DBA Oli의 이야기 다양한 서비스에
    맞춰진 국내 최대 규모의 데이터베이스를 효율적으로 관리하는 경험을 할
    수 있는 카카오 DBA Oli의 이야기다양한 서비스에 맞춰진 국내 최대
    규모의 데이터베이스를 효율적으로 관리하는 경험을 할 수 있는 카카오
    DBA Oli의 이야기`,
      bg,
    },
    {
      id: 3,
      title: '3번 Carousel',
      content: `다양한 서비스에 맞춰진 국내 최대 규모의 데이터베이스를 효율적으로
    관리하는 경험을 할 수 있는 카카오 DBA Oli의 이야기 다양한 서비스에
    맞춰진 국내 최대 규모의 데이터베이스를 효율적으로 관리하는 경험을 할
    수 있는 카카오 DBA Oli의 이야기다양한 서비스에 맞춰진 국내 최대
    규모의 데이터베이스를 효율적으로 관리하는 경험을 할 수 있는 카카오
    DBA Oli의 이야기`,
      bg,
    },
  ]);
  const [count, setCount] = useState(1);

  const listLength = useMemo(() => {
    return list.length + 2;
  }, [list]);

  const prevBtn = () => {
    if (count <= 0) return;

    setCount((prevCount) => prevCount - 1);
  };

  const nextBtn = () => {
    if (count >= listLength - 1) return;

    setCount((prevCount) => prevCount + 1);
  };

  const transition = (e: React.TransitionEvent<HTMLUListElement>) => {
    if (count === 0) {
      e.currentTarget.style.transition = 'none';
      setCount(listLength - 2);
      const target = e.currentTarget;
      setTimeout(() => {
        target.style.transition = `transform 0.4s ease-in-out`;
      }, 500);
    }

    if (count === listLength - 1) {
      e.currentTarget.style.transition = 'none';
      setCount(listLength - count);
      const target = e.currentTarget;
      setTimeout(() => {
        target.style.transition = `transform 0.4s ease-in-out`;
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < listLength + 1) {
        setCount((prevCount) => prevCount + 1);
      } else if (count > listLength) {
        setCount(0);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  if (listLength < 5) return <div />;

  return (
    <S.Container width={1154}>
      <S.Slider
        listLength={listLength}
        count={count}
        width={1154}
        onTransitionEnd={transition}
      >
        <S.Slide listLength={listLength} bgImg={list[list.length - 1].bg}>
          <S.Title>{list[list.length - 1].title}</S.Title>
          <S.Content>{list[list.length - 1].content}</S.Content>
        </S.Slide>
        {list.map((item) => (
          <S.Slide key={item.id} listLength={listLength} bgImg={item.bg}>
            <S.Title>{item.title}</S.Title>
            <S.Content>{item.content}</S.Content>
          </S.Slide>
        ))}
        <S.Slide listLength={listLength} bgImg={list[0].bg}>
          <S.Title>{list[0].title}</S.Title>
          <S.Content>{list[0].content}</S.Content>
        </S.Slide>
      </S.Slider>
      <S.PrevBtn onClick={prevBtn}>
        <S.ArrowImg src={src} alt="PREV" />
      </S.PrevBtn>
      <S.NextBtn onClick={nextBtn}>
        <S.ArrowImg src={src} alt="NEXT" />
      </S.NextBtn>
    </S.Container>
  );
}

export default Carousel;
