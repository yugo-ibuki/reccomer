'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/configs'

type AuthContextType = {
  user: User | null
  loading: boolean
  setAuthUser: (user: User | null) => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  setAuthUser: () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const setAuthUser = (user: User | null) => {
    setUser(user)
  }

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const value = {
    user,
    loading,
    setAuthUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
