import styled from 'styled-components';

import { CirclesUrl, HeroPhotoBgUrl } from '@/assets/images/hero-section';

const bgUrl = `"${HeroPhotoBgUrl}"`;
const circlesUrl = `"${CirclesUrl}"`;

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.hero.paddings.top};
  padding-bottom: ${({ theme }) => theme.sections.hero.paddings.bottom};
  background-color: ${({ theme }) => theme.colors.secondary['50']};
`;

export const Content = styled.div`
  max-width: 500px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export const Greeting = styled.span`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
`;

export const Heading = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize['5xl']};
`;

export const Presentation = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary[400]};
`;

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.secondary[0]};
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 0.25rem;
`;

export const PortraitWrapper = styled.div`
  position: relative;
  width: 413px;
  height: 490px;
  padding: 50px 25px 40px 45px;
  background-image: url(${bgUrl});
  background-repeat: no-repeat;
  background-size: contain;

  &::after {
    position: absolute;
    right: 12px;
    bottom: 0;
    width: 111px;
    height: 69px;
    content: '';
    background-image: url(${circlesUrl});
    background-repeat: no-repeat;
  }
`;

export const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;
