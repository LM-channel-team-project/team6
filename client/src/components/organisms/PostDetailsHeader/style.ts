import styled from 'styled-components';

interface Props {
  backImg: string;
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 339px;
  background-image: ${({ backImg }) => `url(${backImg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const TitleBox = styled.div`
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 31px;
  font-size: 36px;
  color: #fff;
`;

export const Date = styled.span`
  font-size: 13px;
  color: #c9c9c9;
`;
