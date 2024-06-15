import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useErrorHandling } from '@/hooks'
import { useRouter } from 'next/navigation'
import { auth } from '@/configs'
import { useToast } from '@/hooks'

export const useLogin = () => {
  const { toast } = useToast()
  const [error, handleError] = useErrorHandling()
  const router = useRouter()

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log('Logged in user:', user)
      router.push('/dashboard')
    } catch (error: unknown) {
      handleError(error)
      toast({
        type: 'negative',
        message: 'エラーが発生しました。',
      })
    }
  }

  return {
    error,
    handleGoogleLogin,
  }
}
