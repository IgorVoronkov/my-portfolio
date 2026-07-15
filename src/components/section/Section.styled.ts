import styled, { css } from 'styled-components';

import { type SectionProps } from './Section.types';

type SectionType = Pick<SectionProps, '$variant' | '$padding'>;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  text-align: center;
`;

export const Section = styled.section<SectionType>`
  ${({ theme, $variant = 'primary', $padding }) => css`
    padding-top: ${$padding?.top ?? theme.sections.defaults.paddingY};
    padding-bottom: ${$padding?.bottom ?? theme.sections.defaults.paddingY};
    color: ${$variant === 'primary' ? theme.colors.primary[400] : theme.colors.secondary[0]};
    background-color: ${theme.sections.bgColor[$variant]};

    ${Title} {
      color: ${$variant === 'primary' ? theme.colors.accent : null};
    }
  `}
`;
