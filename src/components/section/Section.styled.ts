import styled from 'styled-components';

import { type SectionProps } from './Section.types';

type SectionType = Pick<SectionProps, '$variant' | '$padding'>;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  text-align: center;
`;

export const Section = styled.section<SectionType>`
  padding-top: ${({ theme, $padding }) =>
    $padding ? $padding.top : theme.sections.defaults.paddingY};
  padding-bottom: ${({ theme, $padding }) =>
    $padding ? $padding.bottom : theme.sections.defaults.paddingY};
  color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.primary[400] : theme.colors.secondary[0]};
  background-color: ${({ theme, $variant }) =>
    $variant === 'primary' ? null : theme.colors.primary[500]};

  h2${Title} {
    color: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.accent : null)};
  }
`;
