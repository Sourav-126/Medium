import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='118699912322-ckh74ru9eoojeq52d7c8tjf4l5cf6s74.apps.googleusercontent.com'>
  <StrictMode>
    <App />
  </StrictMode>,
  </GoogleOAuthProvider>
)
