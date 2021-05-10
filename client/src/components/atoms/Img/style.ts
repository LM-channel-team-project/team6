import styled from 'styled-components';

type ImgProps = {
  width?: string;
  height?: string;
  border?: string;
  radius?: string;
};

export const Img = styled.img<ImgProps>`
  ${({ width = '26px' }) => width && `width: ${width}`};
  ${({ height = '26px' }) => height && `height: ${height}`};
  ${({ border = '1px solid #fff' }) => border && `border: ${border}`};
  ${({ radius = '50%' }) => radius && `border-radius: ${radius}`};
`;
