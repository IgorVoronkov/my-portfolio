import { createGlobalStyle, css } from 'styled-components';

const globalStyles = css`
  :root {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.secondary[50]};
  }

  #root > section {
    scroll-margin-top: calc(${({ theme }) => theme.sections.header.height});
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;
