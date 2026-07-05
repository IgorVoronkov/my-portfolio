import { FlexWrapper } from '@/components';
import { SECTIONS } from '@/shared/constants';

import { StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const navLinks = Object.values(SECTIONS).filter((section) => section.id !== SECTIONS.hero.id);

  return (
    <nav>
      <FlexWrapper as="ul" $gap="50px">
        {navLinks.map(({ id, title }) => (
          <li key={id}>
            <StyledNavLink href={`#${id}`}>{title}</StyledNavLink>
          </li>
        ))}
      </FlexWrapper>
    </nav>
  );
};
