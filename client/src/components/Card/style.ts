import styled from 'styled-components';

export const CardBox = styled.li`
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
  background: url('https://img.huffingtonpost.com/asset/5d70682724000032007549cf.jpeg?ops=scalefit_630_noupscale')
    no-repeat center / cover;
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

    .category {
      display: inline-block;
      padding: 3px 5px;
      background-color: #ffedaf;
      color: #ffac5f;
      font-size: 10px;

      &.react {
        background-color: #ace6ff;
        color: #4692d8;
      }

      &.node {
        background-color: #acffbe;
        color: #47ba89;
      }

      &.python {
        background-color: #306fcc;
        color: #c1c4ff;
      }

      & + .category {
        margin-left: 7px;
      }
    }

    p {
      display: -webkit-box;
      overflow: hidden;
      max-height: 80px;
      margin-top: 25px;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      line-height: 20px;
    }
  }

  .user-info {
    z-index: 1;
    display: flex;
    align-items: center;

    img {
      width: 26px;
      height: 26px;
      border-radius: 50%;
    }

    > span {
      margin-left: 6px;
    }
  }
`;
