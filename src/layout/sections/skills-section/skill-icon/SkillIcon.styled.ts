import styled from 'styled-components';

import { hexagonUrl } from '@/assets/images';

const bgUrl = `"${hexagonUrl}"`;

export const Figure = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.sections.skills.icon.wrapperWidth};
  height: ${({ theme }) => theme.sections.skills.icon.wrapperWidth};
  background-image: url(${bgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Icon = styled.img<{ $enlarged: boolean }>`
  width: ${({ theme }) => theme.sections.skills.icon.width};
  transform: ${({ $enlarged }) => ($enlarged ? 'scale(1.25)' : null)};
`;

export const Caption = styled.figcaption`
  position: absolute;
  bottom: 0;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primary[400]};
  transform: translateY(100%);
`;
