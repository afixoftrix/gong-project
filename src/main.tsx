import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from '@/Contexts/Auth/AuthContext'
import AppRoutes from '@/AppRoutes'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </StrictMode>,
)
