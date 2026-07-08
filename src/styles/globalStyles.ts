import { createGlobalStyle, css } from 'styled-components';

const globalStyles = css`
  :root {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.secondary[50]};
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
