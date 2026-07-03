import type { PropsWithChildren } from 'react';

import {
  ContentIllustratedStyled,
  type ContentIllustratedStyledProps,
} from './ContentIllustrated.styled';

export const ContentIllustrated = ({
  $picture,
  $gap,
  children,
}: PropsWithChildren<ContentIllustratedStyledProps>) => (
  <ContentIllustratedStyled $picture={$picture} $gap={$gap}>
    <div>{children}</div>
  </ContentIllustratedStyled>
);
