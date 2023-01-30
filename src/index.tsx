import React, { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './pages/app';

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
