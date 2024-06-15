import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useErrorHandling } from '@/hooks'
import { useRouter } from 'next/navigation'
import { auth } from '@/configs'
import { useToast } from '@/hooks'
import { useAuth } from '@/providers'
import { useEffect, useState } from 'react'

export const useLogin = () => {
  const { user, loading, setAuthUser } = useAuth()
  const [loginPageLoading, setLoginPageLoading] = useState<boolean>(true)
  const { toast } = useToast()
  const [error, handleError] = useErrorHandling()
  const router = useRouter()

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      setAuthUser(userCredential.user)
      router.push('/dashboard')
    } catch (error: unknown) {
      handleError(error)
      toast({
        type: 'negative',
        message: 'エラーが発生しました。',
      })
    }
  }

  useEffect(() => {
    setLoginPageLoading(true)
    if (user) {
      router.push('/dashboard')
    }
    setLoginPageLoading(false)
  }, [router.push, user])

  return {
    error,
    loading: loading || loginPageLoading,
    handleGoogleLogin,
  }
}
