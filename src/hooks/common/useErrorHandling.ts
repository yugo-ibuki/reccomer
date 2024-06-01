import { useCallback, useState } from 'react'

type ErrorHandler = (error: Error) => void

export const useErrorHandling = (): [Error | null, ErrorHandler] => {
  const [error, setError] = useState<Error | null>(null)

  const handleError = useCallback((error: Error) => {
    setError(error)
    // エラーログの送信や通知の表示などの処理を行う
    console.error('Error occurred:', error)
  }, [])

  return [error, handleError]
}
