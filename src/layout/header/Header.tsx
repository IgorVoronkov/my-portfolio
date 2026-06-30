import { HeaderNav, Logo } from '@/components';

import * as S from './Header.styled';

export const Header = () => {
  return (
    <S.Header>
      <Logo />
      <HeaderNav />
    </S.Header>
  );
};
