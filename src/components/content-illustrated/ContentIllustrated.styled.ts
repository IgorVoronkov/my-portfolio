import styled, { css } from 'styled-components';

import { type ContentIllustratedProps } from './ContentIllustrated.types';

export const ContentIllustratedStyled = styled.div<ContentIllustratedProps>`
  display: flex;
  align-items: center;

  ${({ theme, $picture, $minHeight }) => {
    const imgWidth = `min(${$picture.width}, 45%)`;
    return css`
    min-height: ${$minHeight ?? theme.sections.defaults.minHeight};
    background-image: url(${$picture.src});
    background-repeat: no-repeat;
    background-position: ${$picture.where} center;
    background-size: ${imgWidth} auto;
    padding-${$picture.where}: calc(${imgWidth} + ${theme.spacing.sm});

    & > div:only-child {
      flex: 1;
    }

    ${theme.media.mobile} {
      padding: 0;
      background: none;
    }
  `;
  }}
`;
