import './styles/fonts.ts';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { CssReset, GlobalStyles, theme } from '@/styles';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssReset />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
