import styled from 'styled-components';

export const Article = styled.article`
  overflow: hidden;
  background-color: #172b52;
  border-radius: 8px;
`;

export const Preview = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 24px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #efe8e8;
  text-align: center;
`;
