import { useTheme } from 'styled-components';

import { FlexWrapper } from '@/components';
import { SECTIONS } from '@/shared/constants';

import { StyledNavLink } from './Navigation.styled';

const navLinks = Object.values(SECTIONS).filter((section) => section.id !== SECTIONS.hero.id);

export const Navigation = () => {
  const {
    sections: { header },
  } = useTheme();

  return (
    <nav>
      <FlexWrapper as="ul" $gap={header.navLinks.gap}>
        {navLinks.map(({ id, title }) => (
          <li key={id}>
            <StyledNavLink href={`#${id}`}>{title}</StyledNavLink>
          </li>
        ))}
      </FlexWrapper>
    </nav>
  );
};
