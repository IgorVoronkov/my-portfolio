import { Container, FlexWrapper, HeaderNav, Logo } from '@/components';

import * as S from './Header.styled';

export const Header = () => {
  return (
    <S.Header>
      <FlexWrapper>
        <Container $paddingY="0px">
          <FlexWrapper $alignItems="center">
            <Logo />
            <HeaderNav />
          </FlexWrapper>
        </Container>
      </FlexWrapper>
    </S.Header>
  );
};
