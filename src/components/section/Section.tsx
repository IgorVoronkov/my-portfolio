import type { PropsWithChildren } from 'react';

import { Container } from '../container/Container';
import * as S from './Section.styled';
import type { SectionProps } from './Section.types';

export const Section = ({
  id,
  $variant = 'primary',
  title,
  children,
  $padding,
}: PropsWithChildren<SectionProps>) => {
  return (
    <S.Section id={id} $variant={$variant} $padding={$padding}>
      <Container>
        <S.Title>{title}</S.Title>
        {children}
      </Container>
    </S.Section>
  );
};
