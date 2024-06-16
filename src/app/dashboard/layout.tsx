'use client'

import { ReactNode } from 'react'
import { useAuth } from '@/providers'
import { Content } from '@react-spectrum/view'
import { Avatar, Button, Flex, Heading, View } from '@adobe/react-spectrum'
import { useRouter } from 'next/navigation'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { user, loading } = useAuth()
  const router = useRouter()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <View backgroundColor="gray-100" padding="size-300">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading level={2}>My App</Heading>
          <View>
            {user ? (
              <Flex alignItems="center" gap="size-200">
                <Avatar
                  src={user.photoURL || ''}
                  alt={user.displayName || ''}
                />
                <Content>{user.displayName}</Content>
                <Button variant="primary">Logout</Button>
              </Flex>
            ) : (
              <Button
                variant="primary"
                onPress={() => {
                  router.push('/login')
                }}
              >
                Login
              </Button>
            )}
          </View>
        </Flex>
      </View>
      {children}
    </div>
  )
}

export default Layout
