import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 140px;
  box-shadow: 0 8px 6px -6px gray;
  display: flex;
`;

export const ContentWrapper = styled.div`
  width: 700px;
  padding: 1rem;
`;

export const Title = styled.h2``;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Date = styled.p`
  color: #c9c9c9;
  margin-bottom: 0.5rem;
`;

export const Content = styled.div`
  width: 700px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
