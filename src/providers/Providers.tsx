'use client'

import { ReactNode } from 'react'
import { SpectrumProvider } from './SpectrumProvider'
import { AuthProvider } from './AuthProvider'
import { ToastProvider } from './ToastProvider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SpectrumProvider>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </SpectrumProvider>
  )
}
