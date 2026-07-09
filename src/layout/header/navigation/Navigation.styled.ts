import styled from 'styled-components';

export const StyledNavLink = styled.a`
  font-size: ${({ theme }) => theme.sections.header.navLinks.fontSize};
  font-weight: ${({ theme }) => theme.sections.header.navLinks.fontWeight};
  color: ${({ theme }) => theme.sections.header.navLinks.color};
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.sections.header.navLinks.hoverColor};
  }

  &:active {
    opacity: 0.7;
  }
`;
