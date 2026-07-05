import { createGlobalStyle, css } from 'styled-components';

const globalStyles = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
  }

  section {
    scroll-margin-top: calc(
      ${({ theme }) => theme.sizes.headerHeight} + ${({ theme }) => theme.spacing.md}
    );
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;
