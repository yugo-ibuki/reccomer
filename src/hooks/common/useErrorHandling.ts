import { useCallback, useState } from 'react'

type ErrorHandler = (error: unknown) => void

export const useErrorHandling = (): [unknown | null, ErrorHandler] => {
  const [error, setError] = useState<unknown | null>(null)

  const handleError = useCallback((error: unknown) => {
    setError(error)
    console.error('Error occurred:', error)
  }, [])

  return [error, handleError]
}
