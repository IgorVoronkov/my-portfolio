import { Container, FlexWrapper, HeaderNav, Logo } from '@/components';

import * as S from './Header.styled';

export const Header = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper $alignItems="center">
          <Logo />
          <HeaderNav />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
