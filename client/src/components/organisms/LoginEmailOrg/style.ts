import styled from 'styled-components';

export const Base = styled.div`
  position: relative;
`;

export const Container = styled.div`
  background-color: #f8fafb;
  width: 448px;
  height: 550px;
  border-radius: 30px;
  box-shadow: 5px 5px 10px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1000;
`;

export const Img = styled.img`
  position: absolute;
  right: 20px;
  top: -71px;
`;
