import type { PropsWithChildren } from 'react';

import { ContentIllustratedStyled } from './ContentIllustrated.styled';
import { type ContentIllustratedProps } from './ContentIllustrated.types';

export const ContentIllustrated = ({
  $picture,
  $minHeight,
  children,
}: PropsWithChildren<ContentIllustratedProps>) => {
  return (
    <ContentIllustratedStyled $picture={$picture} $minHeight={$minHeight}>
      <div>{children}</div>
    </ContentIllustratedStyled>
  );
};
