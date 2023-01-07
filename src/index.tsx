import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const root = createRoot(document.getElementById('root')!)
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
