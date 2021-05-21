import styled from 'styled-components';

interface ButtonProps {
  background: string | undefined;
}

export const Container = styled.div``;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 59px;
  font-size: 20px;
  border: 1px solid #bfbcbc;
  border-radius: 5px;
  position: relative;
  &:hover {
    cursor: pointer;
    border: 1px solid #9664ff;
  }
  background: ${(props) => props.background || 'white'};
  background: ${(props) => (props.disabled ? 'gray' : props.background)};
  color: ${(props) => props.color || 'black'};
`;

export const ButtonTitle = styled.p`
  font-size: 19px;
  width: 100%;
`;

export const Icon = styled.img`
  position: absolute;
  left: 15px;
  top: 10px;
  width: 35px;
`;
