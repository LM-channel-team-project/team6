import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  width: 91%;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #b9bdbe;
  padding: 0 1rem 0 1rem;
  font-size: 1.1rem;
  &::placeholder {
    color: #b9bdbe;
  }
  &:hover {
    cursor: pointer;
  }
`;
