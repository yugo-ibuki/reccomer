'use client'

import { defaultTheme, Provider } from '@adobe/react-spectrum'
import { FC, ReactNode } from 'react'

export const SpectrumProvider: FC<Readonly<{ children: ReactNode }>> = ({
  children,
}) => {
  return <Provider theme={defaultTheme}>{children}</Provider>
}
