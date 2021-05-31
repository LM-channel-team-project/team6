import styled from 'styled-components';

export const Count = styled.span`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 50px;
  background-color: inherit;
  color: #545454;
  font-size: 14px;

  &::before {
    content: '';
    align-self: flex-end;
    width: 10px;
    height: 10px;
    transform: translateX(3px) rotate(45deg);
    background-color: #ff7373;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 15px;
    height: 10px;
    background-color: inherit;
  }
`;
