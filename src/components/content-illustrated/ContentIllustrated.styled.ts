import styled, { css } from 'styled-components';

import { type ContentIllustratedProps } from './ContentIllustrated.types';

export const ContentIllustratedStyled = styled.div<ContentIllustratedProps>`
  display: flex;
  align-items: center;
  min-height: ${({ theme, $minHeight }) => $minHeight ?? theme.sections.defaults.minHeight};

  & > div:only-child {
    max-width: calc(100% - ${({ $picture: { width } }) => width});

    ${({ $picture: { where } }) => {
      return where === 'left'
        ? css`
            margin-left: auto;
          `
        : css`
            margin-right: auto;
          `;
    }}
  }

  ${({ $picture }) => css`
    background-image: url(${$picture.src});
    background-repeat: no-repeat;
    background-position: ${$picture.where} center;
    background-size: ${$picture.width} auto;
  `}
`;
