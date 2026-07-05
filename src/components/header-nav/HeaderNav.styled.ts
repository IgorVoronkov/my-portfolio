import styled from 'styled-components';

export const StyledNavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary[500]};
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    opacity: 0.7;
  }
`;
