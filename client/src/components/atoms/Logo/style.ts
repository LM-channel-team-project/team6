import styled, { css } from 'styled-components';

export const Logo = styled.img`
  radious: 50%;
  width: 40px;
  height: 40px;
  // border: 5px solid red;
  border-radius: 50%;

  ${({ dir }) => {
    return css`
      position: relative;
      ${dir}: 10px;
    `;
  }}
`;
