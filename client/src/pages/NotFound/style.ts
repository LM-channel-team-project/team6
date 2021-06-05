import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;
export const Content = styled.div`
  display: inline-block;
  width: 487px;
  height: 654px;
  position: relative;
`;
export const ImageWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 351px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const TextWrapper = styled.div`
  div:nth-of-type(2) {
    margin-bottom: 8px;
  }
`;

export const Text = styled.div`
  font-weight: 700;
`;
export const Image = styled.img`
  position: absolute;
`;
