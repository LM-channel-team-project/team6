import styled from 'styled-components';

interface Props {
  fontSize: string;
}

export const Container = styled.div``;

export const Title = styled.h2<Props>`
  color: #7c7c7c;
  font-size: ${(props) => props.fontSize};
`;
