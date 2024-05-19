'use client'

import { ReactNode } from 'react'
import { SpectrumProvider } from './SpectrumProvider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <SpectrumProvider>{children}</SpectrumProvider>
}
