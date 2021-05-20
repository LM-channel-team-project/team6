import styled from 'styled-components';

interface SpanProps {
  nickColor: string | undefined;
}

export const Span = styled.span<SpanProps>`
  margin-left: 6px;
  font-size: 14px;
  color: ${({ nickColor }) => nickColor};
`;

export const Img = styled.img`
  width: 26px;
  height: 26px;
  border: 1px solid #fff;
  border-radius: 50%;
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  ${({ color = '#fff' }) => color && `color: ${color}`};
`;
