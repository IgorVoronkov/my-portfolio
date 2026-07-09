import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  height: ${({ theme }) => theme.sections.header.height};
  background-color: ${({ theme }) => theme.colors.secondary[0]};
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
`;
