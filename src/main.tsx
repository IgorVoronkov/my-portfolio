import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CssReset } from '@/styles';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssReset />
    <App />
  </StrictMode>,
);
