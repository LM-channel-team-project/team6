import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  align-items: center;

  ${({ color = '#fff' }) => color && `color: ${color}`};
`;
