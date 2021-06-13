import styled from 'styled-components';

interface SlideProps {
  listLength: number | undefined;
  bgImg: string | undefined;
}

interface SliderProps {
  listLength: number | undefined;
  count: number | undefined;
  width: number | undefined;
}

interface ContainerProps {
  width: number | undefined;
}

export const ArrowImg = styled.img`
  width: 100%;
`;

export const PrevBtn = styled.button`
  width: 61px;
  height: 61px;
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%) rotate(180deg);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const NextBtn = styled(PrevBtn)`
  left: auto;
  right: 30px;
  transform: translateY(-50%);
`;

export const Content = styled.p`
  display: -webkit-box;
  overflow: hidden;
  width: 730px;
  height: 57px;
  font-size: 18px;
  color: #d0d0d0;
  line-height: 1.5;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Title = styled.h2`
  overflow: hidden;
  margin-bottom: 13px;
  font-size: 36px;
  color: #f3f3f3;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Slide = styled.li<SlideProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: ${({ listLength }) => listLength && `calc(100% / ${listLength})`};
  height: 404px;
  padding: 43px 60px 44px;
  box-sizing: border-box;
  background-image: ${({ bgImg }) => bgImg && `url('${bgImg}')`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Slider = styled.ul<SliderProps>`
  list-style: none;
  display: flex;
  width: ${({ listLength }) => listLength && `calc(100% * ${listLength})`};
  position: relative;
  transform: ${({ count, width }) =>
    count && width && `translateX(${count * -width}px)`};
  transition: transform 0.4s ease-in-out;
`;

export const Container = styled.div<ContainerProps>`
  overflow: hidden;
  position: relative;
  width: ${({ width }) => width && width}px;
  margin: 33px auto;

  border-radius: 10px;
`;
