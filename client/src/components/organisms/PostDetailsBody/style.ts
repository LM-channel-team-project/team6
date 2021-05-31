import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 38px;
  margin: 31px auto 33px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  background-color: #f1f4f9;
`;

export const Text = styled.p`
  padding-bottom: 60px;
  border-bottom: 1px solid #dbdbdb;
  font-size: 18px;
  line-height: 1.5;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ImgBox = styled.div`
  max-width: 630px;
  max-height: 341px;
  margin: 64px auto 32px;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1154px;
  min-height: 500px;
  margin: 0 auto;
  padding: 11px 126px;
  box-sizing: border-box;
  background: #fff;
`;
