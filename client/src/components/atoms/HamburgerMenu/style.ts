import styled, { css } from 'styled-components';

interface Props {
  isMenuClicked: boolean;
}
export const ListsWrapper = styled.ul`

  transform: translate(0%, 0%);
  width: 34px;
  height: 33px;
  cursor: pointer;

  li:nth-of-type(1) {
    top: 20%;
  }
  li:nth-of-type(2) {
    top: 50%;
  }
  li:nth-of-type(3) {
    top: 80%;
  }
  ${(props: Props) =>
    props.isMenuClicked &&
    css`
      li:nth-of-type(1) {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }
      li:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
      }
      li:nth-of-type(3) {
        left: -100%;
        opacity: 0;
      }
    `}};
`;

export const ListElement = styled.li`
  list-style: none;
  position: absolute;
  left: 0;
  background: black;
  width: 100%;
  height: 5px;
  transform: translateY(-50%);
  transition: 0.9s;
`;
