import styled from 'styled-components';

import { hexagonUrl } from '@/assets/images';

const bgUrl = `"${hexagonUrl}"`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxs};
  align-items: center;
`;

export const Hexagon = styled.div`
  padding: 16px 12px;
  background-image: url(${bgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.sizes.skillIcon};
  height: ${({ theme }) => theme.sizes.skillIcon};
`;

export const Caption = styled.figcaption`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primary[400]};
`;
