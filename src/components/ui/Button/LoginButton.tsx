'use client'

import { FC, ReactNode } from 'react'
import { Button as SpectrumButton } from '@adobe/react-spectrum'

type Props = Readonly<{
  children: ReactNode
  variant: 'primary' | 'secondary' | 'accent'
  marginTop?: string
  width?: string
  justifySelf?: 'center'
  onClick: () => void
}>

export const LoginButton: FC<Props> = ({
  children,
  variant,
  width,
  marginTop,
  justifySelf,
  onClick,
}) => {
  return (
    <SpectrumButton
      variant={variant}
      onPress={onClick}
      marginTop={marginTop}
      justifySelf={justifySelf}
      width={width}
    >
      {children}
    </SpectrumButton>
  )
}

export default LoginButton
