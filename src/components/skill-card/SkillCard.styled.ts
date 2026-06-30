import styled from 'styled-components';

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin: 0;
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
`;

export const Caption = styled.figcaption`
  font-size: 14px;
  text-align: center;
`;
