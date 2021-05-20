import styled from 'styled-components';

interface Props {
  backImg: string;
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 314px;
  background: ${({ backImg }) => `url(${backImg})`};
`;

export const TitleBox = styled.div`
  padding-bottom: 17px;
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
