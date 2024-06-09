import { ReactNode } from 'react'
import { ToastContainer } from '@react-spectrum/toast'

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  )
}
