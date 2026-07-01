import { createGlobalStyle, css } from 'styled-components';

const globalStyles = css`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;
