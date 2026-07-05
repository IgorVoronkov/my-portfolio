import { Container, FlexWrapper, Logo } from '@/components';

import * as S from './Header.styled';
import { Navigation } from './navigation/Navigation';

export const Header = () => {
  return (
    <S.Header>
      <FlexWrapper>
        <Container $paddingY="0px">
          <FlexWrapper $alignItems="center">
            <Logo />
            <Navigation />
          </FlexWrapper>
        </Container>
      </FlexWrapper>
    </S.Header>
  );
};
