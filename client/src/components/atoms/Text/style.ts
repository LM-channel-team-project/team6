import styled from 'styled-components';

type SpanProps = {
  display?: string;
  margin?: string;
  size?: string;
};

export const Span = styled.span<SpanProps>`
  ${({ display }) => display && `display: ${display}`};
  ${({ margin = '0 0 0 6px' }) => margin && `margin: ${margin}`};
  ${({ size = '14px' }) => size && `font-size: ${size}`};
`;
