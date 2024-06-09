import { ToastQueue } from '@react-spectrum/toast'

type Props = {
  type: 'positive' | 'negative' | 'info' | 'neutral'
  message: string
  timeout?: number
}

export const useToast = () => {
  const toast = ({ type, message, timeout = 5000 }: Props) => {
    switch (type) {
      case 'positive':
        ToastQueue.positive(message, { timeout })
        break
      case 'negative':
        ToastQueue.negative(message, { timeout })
        break
      case 'info':
        ToastQueue.info(message, { timeout })
        break
      case 'neutral':
        ToastQueue.neutral(message, { timeout })
        break
      default:
        ToastQueue.negative(message, { timeout })
    }
  }

  return { toast }
}
