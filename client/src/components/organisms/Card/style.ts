import styled from 'styled-components';

type CardContainerProps = {
  background?: string;
};

export const CardContainer = styled.li<CardContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  width: 212px;
  height: 312px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  ${({ background }) => background && `background-image: url(${background})`};
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  color: #f3f3f3;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  .text-info {
    z-index: 1;

    p {
      display: -webkit-box;
      overflow: hidden;
      max-height: 80px;
      margin-top: 15px;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      line-height: 20px;
    }
  }

  .user-info {
    z-index: 1;
  }

  & + & {
    margin-left: 22px;
  }
`;
