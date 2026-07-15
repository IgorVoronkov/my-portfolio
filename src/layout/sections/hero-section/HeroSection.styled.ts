import styled from 'styled-components';

import { circlesUrl, cubeUrl, ellipseUrl, plusUrl, zigzagsUrl } from '@/assets/images/hero-section';

const circles = `"${circlesUrl}"`;
const cube = `"${cubeUrl}"`;
const ellipse = `"${ellipseUrl}"`;
const plus = `"${plusUrl}"`;
const zigzags = `"${zigzagsUrl}"`;

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.hero.paddings.top};
  padding-bottom: ${({ theme }) => theme.sections.hero.paddings.bottom};
  background-color: ${({ theme }) => theme.colors.secondary.dark};
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
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSize['5xl']};
`;

export const Presentation = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary[400]};
`;

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.secondary.base};
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 0.25rem;
`;

export const PhotoFrame = styled.div`
  width: 100%;
  max-width: 410px;
  aspect-ratio: 5 / 6;
  container-type: size;
`;

export const PhotoFramePadding = styled.div`
  position: relative;
  height: 100%;
  padding: 11cqh 6cqw 9cqh 11cqw;
  background-image: url(${cube}), url(${plus}), url(${zigzags}), url(${ellipse});
  background-repeat: no-repeat;
  background-position:
    top right,
    40cqw 0,
    0 7cqh,
    6cqw 94cqh;
  background-size: 10cqw, 7cqw, 9cqw, 5cqw;

  &::after {
    position: absolute;
    right: 3cqw;
    bottom: 0;
    width: 27cqw;
    height: 14cqh;
    content: '';
    background-image: url(${circles});
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
  }
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
