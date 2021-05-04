import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 1000;
`;

export const ContentContainer = styled.div`
  background-color: white;
  width: 448px;
  height: 550px;
  border-radius: 30px;
  box-shadow: 5px 5px 10px gray;
`;

export const ImgContainer = styled.div``;

export const Img = styled.img`
  position: absolute;
  right: 20px;
  top: -73px;
  z-index: -100;
`;
