import { Container, FlexWrapper, Logo } from '@/components';

import * as S from './Header.styled';
import { Navigation } from './navigation/Navigation';

export const Header = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper $justifyContent="space-between" $alignItems="center">
          <Logo />
          <Navigation />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
