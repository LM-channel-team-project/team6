import styled from 'styled-components';

interface ImgProps {
  imgSize: string | undefined;
}
interface TextProps {
  textSize: string | undefined;
}

export const Author = styled.span<TextProps>`
  font-size: ${({ textSize }) => textSize && textSize};
  color: #9d9d9d;
`;

export const Nickname = styled.span<TextProps>`
  font-size: ${({ textSize }) => textSize && textSize};
  color: #000;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img<ImgProps>`
  width: ${({ width }) => width && width};
  height: 50px;
  margin-right: 9px;
  border: 1px solid #fff;
  border-radius: 50%;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;
