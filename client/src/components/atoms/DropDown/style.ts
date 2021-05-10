import styled, { css } from 'styled-components';

export const DropDown = styled.div`
  border: 5px solid white;
  width: 100px;
  height: 64px;
  background-color: white;


  border-radius: 10px;
 
text-align: center;

 
  }
`;
export const DropDownContent = styled.div`
  ${({ color }) => {
    return css`
      color: ${color};
    `;
  }}
  &:not(:last-child) {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.09);
  }
  font-weight: 700;
`;

export const Container = styled.div`
  &::before {
    content: '';
    display: relative;

    margin-top: 10px;
    margin-left: 60%;
    border-width: 15px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
  display: inline-block;
  position: relative;
  top: 40px;
  left: 40px;
  z-index: 1;
`;

export const TriangleBlock = styled.div`
  height: 10px;
`;
