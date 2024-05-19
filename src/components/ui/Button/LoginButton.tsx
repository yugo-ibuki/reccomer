'use client'

import { FC, ReactNode } from 'react'
import { Button as SpectrumButton } from '@adobe/react-spectrum'

type Props = Readonly<{
  children: ReactNode
  onClick: () => void
}>

export const LoginButton: FC<Props> = ({ children, onClick }) => {
  return (
    <SpectrumButton variant="accent" onPress={onClick}>
      {children}
    </SpectrumButton>
  )
}

export default LoginButton
