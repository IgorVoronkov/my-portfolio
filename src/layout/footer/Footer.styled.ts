import styled from 'styled-components';

import { waveUrl } from '@/assets/images';

const wave = `"${waveUrl}"`;

export const Footer = styled.footer`
  position: relative;
  height: ${({ theme }) => theme.sections.footer.height};
  padding-top: ${({ theme }) => theme.sections.footer.paddings.top};
  color: ${({ theme }) => theme.colors.secondary[0]};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary[500]};

  &::before {
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    height: calc(${({ theme }) => theme.sections.footer.waveHeight} + 10px);
    content: '';
    background-color: inherit;
    mask-image: url(${wave});
    mask-repeat: no-repeat;
    mask-position: bottom;
    mask-size: 100% auto;
    transform: translateY(-99%);
  }
`;

export const BlockLabel = styled.p`
  margin-bottom: 16px;
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 24px;
`;
